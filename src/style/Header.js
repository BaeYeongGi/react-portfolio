import styled from "styled-components";
import { device, transitionDuration } from "style/Common";

export const HeaderOpacity = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	display:none;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.8);
	z-index: 3;
	&.visible {display:block;}
	&.hidden {display:none;}
`;

export const HeaderWrap = styled.div`
	width: 100%;
	height: 100px;
	background: #7c7877;
	position: fixed;
	z-index: 2;
	transition-property: background, height;
	transition-duration: ${transitionDuration.normal};
	&.active {
		background: #615c5a;
	}
	${device.labtop} {
		height: 80px;
	}
	${device.tablet} {
	}
	${device.mobile} {
	}
`;

export const Head = styled.header`
	width: 120rem;
	height: 100%;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
	${device.labtop} {
		width: 100%;
		padding: 0 3rem;
	}
`;

export const Logo = styled.h1`
	> a {
		display: inline-block;
		color: #fff;
		font-size: 30px;
		font-weight: 600;
		transition-property: font;
		transition-duration: ${transitionDuration.normal};

		&::after {
			content: "";
			display: block;
			width: 100%;
			height: 4px;
			background: #fff;
			margin: 3px 0 0 0;
		}
	}
	${device.labtop} {
		> a {
			font-size: 26px;
		}
	}
	${device.mobile} {
		> a {
			font-size: 20px;
		}
	}
`;

export const Gnb = styled.ul`
	display: flex;
	> li {
		> a {
			color: #fff;
			font-size: 1.6rem;
			position: relative;
			&::after {
				content: "";
				display: block;
				width: 0%;
				height: 1px;
				background: #fff;
				position: absolute;
				left: 0;
				bottom: -0.2rem;
				transition-property: width;
				transition-duration: ${transitionDuration.fast};
			}
		}
		&:not(:last-child) {
			margin: 0 4rem 0 0;
		}
		&:hover {
			> a {
				&::after {
					width: 100%;
				}
			}MobileGnbWrap
		}
	}
	${device.mobile} {
		display: none;
	}
`;

export const WeatherBtn = styled.a``;

export const MobileMenu = styled.a`
	display: none;
	> i {
		color: #fff;
		font-size: 4rem;
	}
	${device.mobile} {
		display: block;
	}
`;

export const MobileGnbWrap = styled.div`
	width: 80%;
	height: 100%;
	position: fixed;
	top: 0;
	right: -100%;
	background: #fff;
	z-index: 3;
	padding: 2rem;
	transition-property: right;
	transition-duration: ${transitionDuration.normal};
	.mobile_gnb_txt {text-align:center; font-style:italic; color:#777; margin:4rem 0 0 0; line-height:1.4;}
	&.hidden {
		right: -100%;
	}
	&.visible {
		right: 0;
	}
`;

export const MobileGnbTop = styled.div`
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid #999;
	margin: 0 0 2rem 0;
	padding: 0 0 2rem 0;
	.mobile_logo {
		font-size: 20px;
		font-weight: 600;
		color: #555;
		&::after {
			content: "";
			display: block;
			width: 100%;
			height: 4px;
			background: #555;
			margin: 3px 0 0 0;
		}
	}
	.mobile_close {
		font-size: 3rem;
		color: #ff6565;
	}
`;

export const MobileGnb = styled.ul`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	border-bottom: 1px solid #999;
	padding: 0 0 1.2rem 0;
	> li {
		margin-bottom: 0.8rem;
		width: calc(50% - 0.4rem);
		display: flex;
		> a {
			display: block;
			width: 100%;
			text-align: center;
			line-height: 7rem;
			color: #fff;
			font-size: 1.8rem;
			&.intro {
				background: #76b0ad;
			}
			&.self_interview {
				background: #9b8281;
			}
			&.skills {
				background: #6182b8;
			}
			&.portfolio {
				background: #6b8fa1;
			}
		}
	}
	${device.tinyMobile} {
		> li {
			width: 100%;
		}
	}
`;

export const MobileGnbSns = styled.ul`
	margin: 3rem 0 0 0;
	display: flex;
	justify-content: center;
	> li {
		> a {
			display: block;
			border: 1px solid #999;
			width: 60px;
			line-height: 40px;
			text-align: center;
			border-radius: 40px;
			font-size: 2rem;
			&.naver {
				color: #3ba046;
			}
			&.github {
				color: #333;
			}
			&.kakao {
				color: #f0d94a;
			}
		}
		&:not(:last-child) {
			margin: 0 0.6rem 0 0;
		}
	}
`;

export const MobileGnbContact = styled.ul`
	text-align: center;
	margin: 3rem 0 0 0;
	> li {
		margin: 0 0 1.6rem 0;
		> a {
			color: #444;
			border-bottom: 1px solid #444;
		}
	}
`;
