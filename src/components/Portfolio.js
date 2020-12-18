import React, { useState } from "react";
import { Section, SectionTitle, Contents, SectionArea } from "style/common";
import { URL } from "include/ImageURL";
import styled from "styled-components";
import PortfolioSlidesPop from "components/PortfolioSlidesPop";

const images = {
	homepage: URL + "/images/img_portfolio_homepage.jpg",
	tisepx: URL + "/images/img_portfolio_tisepx.jpg",
	publishing: URL + "/images/img_portfolio_publishing.jpg",
	clickCursor: URL + "/images/icon_click_cursor_mint.png",
};

const PortfolioListWrap = styled.ul`
	display: flex;
	width: 100%;
	justify-content: center;
	> li {
		text-align: center;
		&:not(:last-child) {
			margin: 0 2.6rem 0 0;
		}
	}
`;

const PortfolioThumb = styled.div`
	cursor: url(${images.clickCursor}), auto;
	position: relative;
	.name {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0);
		transition-property: background;
		transition-duration: 0.3s;
		> p {
			position: absolute;
			top: 57%;
			left: 50%;
			width:100%;
			transform: translate(-50%, -50%);
			transition-property: opacity, top;
			transition-duration: 0.3s;
			color: #fff;
			opacity: 0;
			font-size: 3rem;
			line-height: 1.3;
			> strong {display:block; font-size:2rem;}
		}
		> span {
			display: block;
			width: 1px;
			height: 1px;
			background: transparent;
			position: absolute;
			transition-property: width, height, background;
			transition-duration: 0.2s;
			&::after {
				content: "";
				display: block;
				position: absolute;
				background: #fff;
			}
			&:nth-child(1) {
				width: 1px;
				top: 2rem;
				left: 2rem;
			}
			&:nth-child(2) {
				height: 1px;
				top: 2rem;
				right: 2rem;
			}
			&:nth-child(3) {
				width: 1px;
				bottom: 2rem;
				right: 2rem;
			}
			&:nth-child(4) {
				height: 1px;
				bottom: 2rem;
				left: 2rem;
			}
		}
		&:hover {
			background: rgba(0, 0, 0, 0.7);
			> p {
				opacity: 1;
				top: 50%;
			}
			> span {
				background: #fff;
				&:nth-child(1) {
					width: calc(100% - 4rem);
				}
				&:nth-child(2) {
					height: calc(100% - 4rem);
				}
				&:nth-child(3) {
					width: calc(100% - 4rem);
				}
				&:nth-child(4) {
					height: calc(100% - 4rem);
				}
			}
		}
	}
`;

const PortfolioPage = styled.a`
	display: inline-block;
	font-size: 1.6rem;
	background: #274c5e;
	color: #fff;
	margin: 2rem 0 0 0;
	padding: 1rem 2.6rem;
	position: relative;
	overflow:hidden;
	> span {
		position: relative;
		z-index: 1;
	}
	&::after {
		content: "";
		display: block;
		width: 100%;
		height: 100%;
		position:absolute; top:0; left:-100%; background:#082b40;
		transition-property:left;
		transition-duration:0.2s;
	}
	&:hover {
		&::after {
			left:0;
		}
	}
`;

const PortfolioOpacity = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.8);
	z-index:2;
	&.hidden {opacity:0; z-index:-1;}
	&.visible {opacity:1; z-index:2;}
`;

const PortfolioPopWrap = styled.div`
	position: fixed;
	top: 14rem;
	bottom: 3rem;
	left: 50%;
	z-index: 2;
	transform: translate(-50%, 0);
	width: 120rem;
	height: 100%;
	&.hidden {
		opacity:0; z-index:-1;
	}
	&.visible {
		opacity:1; z-index:2;
	}
`;

const PopCloseBtn = styled.a`
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #fff;
	font-size: 3rem;
	z-index: 3;
	top: -3rem;
	right: 0;
	width: 3rem;
	height: 3rem;
	background: #ff5f5f;
	cursor: pointer;
	&:hover {
		background:#ff2f2f;
	}
`;

const pageLink = "Page Link";
const Portfolio = () => {
	const [ visible, setVisible ] = useState('hidden')
	const homepagePop = () => {
		setVisible('visible')
	}

	const closePop = () => {
		setVisible('hidden')
	}

	return (
		<>
		<Section className="portfolio">
			<SectionArea id="Portfolio"/>
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
						<PortfolioThumb>
							<img src={images.tisepx} alt="TiSepX" />
							<div className="name">
								<span></span>
								<span></span>
								<span></span>
								<span></span>
								<p>TiSepX
								<strong>(publishing &amp; react)</strong>
								</p>
							</div>
						</PortfolioThumb>
						<PortfolioPage href="http://tisepx.com/" target="_blank" rel="noreferrer">
							<span>{pageLink}</span>
						</PortfolioPage>
					</li>
					<li>
						<PortfolioThumb>
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
			<PortfolioSlidesPop/>
		</PortfolioPopWrap>
		</>
	);
};

export default Portfolio;
