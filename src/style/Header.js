import styled from "styled-components";
import { device } from "style/Common";

export const HeaderWrap = styled.div`
	width: 100%;
	height: 100px;
	background: #7c7877;
	position: fixed;
	z-index: 2;
	transition-property: background, height;
	transition-duration: 0.3s;
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
		transition-duration: 0.3s;

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
				transition: width 0.2s;
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
			}
		}
	}
	${device.mobile} {
		display: none;
	}
`;

export const WeatherBtn = styled.a``;

export const MobileGnbWrap = styled.div`
	width: 80%;
	height: 100%;
	position: fixed;
	top: 0;
	right: 0;
	background: #fff;
	z-index: 2;
  padding: 2rem;
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
			line-height: 6rem;
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
      font-size:2rem;
      &.naver {color:#3ba046;}
      &.github {color:#333;}
      &.kakao {color:#f0d94a;}
    }
    &:not(:last-child) {margin:0 0.4rem 0 0;}
	}
`;
