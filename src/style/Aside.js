import styled from "styled-components";
import { device } from "style/Common";

export const SideBar = styled.div`
	position: fixed;
	top: 12rem;
	left: 50%;
	width: 16rem;
	padding: 0 0 2rem 0;
	transform: translate(-50%, 0);
	margin-left: 70rem;
	background: #fff;
	border-radius: 1.6rem;
	z-index:2;
	.weather_icon {
		display: block;
		margin: 0 auto;
		width: 8rem;
	}
	${device.sidebar} {
		left:auto;
		right:3rem;
		transform:translate(0, 0);
		margin-left:0;
	}
  ${device.labtop} {

		
	 
	 
  }
  ${device.tablet} {

  }
  ${device.mobile} {

  }	
`;

export const DateState = styled.ul`
	display: flex;
	justify-content: center;
	> li {
		color:#333;
		&:not(:last-child) {
			&::after {
				content: "-";
			}
		}
	}
`;

export const WeatherState = styled.ul`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	> li {
		font-size: 1.6rem;
		color:#333;
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
`;

export const TimeState = styled.ul`
	display:flex;
	margin:0.4rem 0 0 0;
	justify-content:center;
	> li {
		color:#333;
		&:not(:last-child) {
			&::after {content:':';}
		}
	}
`