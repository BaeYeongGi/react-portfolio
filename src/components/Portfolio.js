import React, { useState } from "react";
import { Section, SectionTitle, Contents, SectionArea } from "style/common";
import PortfolioSlidesPop from "components/PortfolioSlidesPop";
import { images, PortfolioListWrap, PortfolioThumb, PortfolioPage, PortfolioOpacity, PortfolioPopWrap, PopCloseBtn } from "style/Portfolio";

const pageLink = "Page Link";
const Portfolio = () => {
	const [visible, setVisible] = useState("hidden");
	const [popType, setPopType] = useState("");
	const homepagePop = () => {
		setVisible("visible");
		setPopType("popHomepage");
	};

	const tisepxPop = () => {
		setVisible("visible");
		setPopType("popTisepx");
	};

	const closePop = () => {
		setVisible("hidden");
	};

	return (
		<>
			<Section className="portfolio">
				<SectionArea id="Portfolio" />
				<SectionTitle className="portfolio">Album Sample</SectionTitle>
				<Contents>
					<PortfolioListWrap>
						<li>
							<PortfolioThumb onClick={homepagePop}>
								<img src="https://picsum.photos/324/324" alt="sample1" />
								<div className="name">
									<span></span>
									<span></span>
									<span></span>
									<span></span>
									<p>
										Album1
									</p>
								</div>
							</PortfolioThumb>
							<PortfolioPage href="https://baeyeonggi.github.io/resume/" target="_blank" rel="noreferrer">
								<span>{pageLink}</span>
							</PortfolioPage>
						</li>
						<li>
							<PortfolioThumb onClick={tisepxPop}>
								<img src="https://picsum.photos/324/324" alt="sample2" />
								<div className="name">
									<span></span>
									<span></span>
									<span></span>
									<span></span>
									<p>
										Album2
									</p>
								</div>
							</PortfolioThumb>
							<PortfolioPage href="https://baeyeonggi.github.io/resume/" target="_blank" rel="noreferrer">
								<span>{pageLink}</span>
							</PortfolioPage>
						</li>
						<li>
							<PortfolioThumb
								href="https://baeyeonggi.github.io/resume/"
								target="_blank"
								rel="noreferrer">
								<img src="https://picsum.photos/324/324" alt="sample3" />
								<div className="name">
									<span></span>
									<span></span>
									<span></span>
									<span></span>
									<p>
										Album3
									</p>
								</div>
							</PortfolioThumb>
							<PortfolioPage href="https://baeyeonggi.github.io/portfolio/" target="_blank" rel="noreferrer">
								<span>{pageLink}</span>
							</PortfolioPage>
						</li>
					</PortfolioListWrap>
				</Contents>
			</Section>
			<PortfolioOpacity className={visible} onClick={closePop} />
			<PortfolioPopWrap className={visible}>
				<PopCloseBtn onClick={closePop}>
					<i className="xi-close-min"></i>
				</PopCloseBtn>
				<PortfolioSlidesPop portfolioType={popType} />
			</PortfolioPopWrap>
		</>
	);
};

export default Portfolio;
