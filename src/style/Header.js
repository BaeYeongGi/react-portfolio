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
    transition-property:font;
    transition-duration:0.3s;
    
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
`;
