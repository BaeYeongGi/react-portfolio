import React, { useState } from "react";
import { Section, SectionTitle, Contents, SectionArea } from "style/Common";
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
				<SectionTitle className="portfolio">Portfolio</SectionTitle>
				<Contents>
					<PortfolioListWrap>
						<li>
							<PortfolioThumb onClick={homepagePop}>
								<img src={images.homepage} alt="Homepage Renewal" />
								<div className="name">
									<span></span>
									<span></span>
									<span></span>
									<span></span>
									<p>
										Homepage
										<br />
										Renewal
										<strong>(publishing &amp; react)</strong>
									</p>
								</div>
							</PortfolioThumb>
							<PortfolioPage href="http://www.medicalip.com/" target="_blank" rel="noreferrer">
								<span>{pageLink}</span>
							</PortfolioPage>
						</li>
						<li>
							<PortfolioThumb onClick={tisepxPop}>
								<img src={images.tisepx} alt="TiSepX" />
								<div className="name">
									<span></span>
									<span></span>
									<span></span>
									<span></span>
									<p>
										TiSepX
										<strong>(publishing &amp; react)</strong>
									</p>
								</div>
							</PortfolioThumb>
							<PortfolioPage href="http://tisepx.com/" target="_blank" rel="noreferrer">
								<span>{pageLink}</span>
							</PortfolioPage>
						</li>
						<li>
							<PortfolioThumb
								href="https://baeyeonggi.github.io/portfolio/"
								target="_blank"
								rel="noreferrer">
								<img src={images.publishing} alt="Web Publishing Portfolio" />
								<div className="name">
									<span></span>
									<span></span>
									<span></span>
									<span></span>
									<p>
										Web
										<br />
										Publishing
										<br />
										Portfolio
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
