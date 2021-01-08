import styled, { css } from "styled-components";
import { device, transitionDuration } from "style/Common";

const blankArea = css`
	content: "";
	display: inline-block;
	vertical-align: middle;
	width: 8px;
	height: 100%;
	background: transparent;
`

export const SideBar = styled.div`
	position: fixed;
	top: 14rem;
	left: 50%;
	width: 16rem;
	padding: 0 0 2rem 0;
	transform: translate(-50%, 0);
	margin-left: 70rem;
	background: #fff;
	border-radius: 1.6rem;
	box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
	z-index: 1;
	.weather_icon {
		display: block;
		margin: 0 auto;
		width: 8rem;
		transition-property: width;
		transition-duration: ${transitionDuration.normal};
	}
	${device.sidebar} {
		left: auto;
		right: 3rem;
		transform: translate(0, 0);
		margin-left: 0;
	}
	${device.labtop} {
		top:11rem;
		.weather_icon {
			width: 7rem;
		}		
	}
	${device.tablet} {
		display: flex;
		align-items: center;
		width: auto;
		padding: 0 1rem 0 0;
		top: 80px;
		right: 0;
		border-radius: 0 0 0 1.6rem;
		.weather_icon {
			width: 4rem;
		}
	}
	${device.mobile} {
	}
`;

export const DateState = styled.ul`
	display: flex;
	justify-content: center;
	> li {
		color: #333;
		&:not(:last-child) {
			&::after {
				content: "-";
			}
		}
	}
	${device.tablet} {
		&::after {
			${blankArea}
		}
	}
`;

export const WeatherState = styled.ul`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	> li {
		font-size: 1.6rem;
		color: #333;
		&:not(:last-child) {
			margin: 0 0.6rem 0 0;
		}
	}
	&::before {
		content: "";
		display: block;
		width: 80%;
		height: 1px;
		margin: 0.8rem 10% 0.6rem 10%;
		background: #666;
	}

	${device.labtop} {
	}
	${device.tablet} {
		&::before {
			display: none;
		}
	}
	${device.mobile} {
	}
`;

export const TimeState = styled.ul`
	display: flex;
	margin: 0.4rem 0 0 0;
	justify-content: center;
	> li {
		color: #333;
		&:not(:last-child) {
			&::after {
				content: ":";
			}
		}
	}
	${device.labtop} {
	}
	${device.tablet} {
		margin: 0;
		&::after {
			${blankArea}
		}
	}
	${device.mobile} {
	}
`;
