import styled from "styled-components";
import { URL } from "include/ImageURL";
import { device } from "style/Common";

export const images = {
	react: URL + "/images/icon_react.png",
	router: URL + "/images/icon_react_router_dom.png",
	redux: URL + "/images/icon_redux.png",
	sass: URL + "/images/icon_sass.png",
	styledComponents: URL + "/images/icon_styled_components.png",
	html5: URL + "/images/icon_html5.png",
	css3: URL + "/images/icon_css3.png",
	javascript: URL + "/images/icon_javascript.png",
	seo: URL + "/images/icon_seo.png",
	dragCursor: URL + "/images/icon_drag_cursor.png",
	clickCursor: URL + "/images/icon_click_cursor_blue.png",
	slidesRight: URL + "/images/icon_slide_right_btn.png",
};

export const SkillsWrap = styled.div`
	.swiper-container {
		padding: 0 0 6rem 0;
		.swiper-slide {
			display: flex;
			align-items: center;
			height: 200px;
			cursor: url(${images.clickCursor}), auto;
			> div {
				background: #fff;
				width: 150px;
				height: 150px;
				border-radius: 150px;
				display: flex;
				justify-content: center;
				align-items: center;
				margin: 0 auto;

				transition-property: width, height, opacity;
				transition-duration: 0.3s;
				opacity: 0.7;
				> img {
					width: 60%;
					transition-property: width;
					transition-duration: 0.3s;
				}
			}
			&.swiper-slide-active {
				> div {
					width: 200px;
					height: 100%;
					border-radius: 200px;
					opacity: 1;
				}
			}
		}
		.swiper-button-prev,
		.swiper-button-next {
			color: #fff;
			top: auto;
			bottom: 0;
		}
	}
	.skills_line {
		display: block;
		width: 70%;
		height: 1px;
		background: #fff;
		border: 0;
		margin: -23px auto 3rem auto;
	}
	${device.labtop} {}
	${device.tablet} {
		.swiper-container {margin:0 auto;
			.swiper-slide {height:180px;
				> div {width:140px; height:140px;}
				&.swiper-slide-active {
					> div {width:180px; height:180px;}
				}
			}
		}
	}
	${device.mobile} {
		.swiper-container {
			.swiper-slide {height:160px;
				> div {width:120px; height:120px;}
				&.swiper-slide-active {
					> div {width:160px; height:160px;}
				}
			}
		}		
	}
`;

export const SkillsContents = styled.div`
	width: 70%;
	margin: 0 auto;
	position: relative;
	z-index: 1;
	> dl {
		color: #fff;
		> dt {
			font-size: 2rem;
			text-align: center;
			margin: 0 0 1rem 0;
		}
		> dd {
			font-size: 1.6rem;
			line-height: 1.5;
			> a {
				border-bottom: 1px solid #fff;
				color: #fff;
				margin: 0 0.6rem;
			}
		}
	}
`;