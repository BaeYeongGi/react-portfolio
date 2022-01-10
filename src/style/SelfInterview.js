import styled from "styled-components";
import { URL } from "include/ImageURL";
import { device } from "style/common";

const images = {
	clickCursor: URL + "/images/icon_click_cursor_brown.png",
};

export const InterviewTabs = styled.ul`
	display: flex;
	flex-wrap: wrap;	
	width: 100%;
	> li {
		width: 16rem;
		height: 8rem;
		transition-property:width;
		transition:0.3s;
		text-align: center;
		line-height: 1.4;
		> a {
			display: flex;
			align-items: center;
			width: 100%;
			height: 100%;
			padding: 0 1.4rem;
			color: #fff;
			background: #786e6e;
			font-size: 1.6rem;
			cursor: url(${images.clickCursor}), auto;
			&.active {
				background: #7f6362;
			}
		}
		&:not(:last-child) {
			margin: 0 1rem 0 0;
		}
	}
	${device.tablet} {
		justify-content:space-between;
		> li { width:calc(25% - 1rem); height:auto;
			&:not(:last-child) {
				margin: 0 0 0 0;
			}	
			> a {padding :1rem 1.4rem;}	
		}
	}	
	${device.mobile} {
		> li {
			width:calc(25% - 0.6rem);
		}
	}		
`;

export const InterviewContents = styled.div`
	width: 100%;
	background: #7f6362;
	padding: 4rem;
	> p {
		color: #fff;
		font-size: 1.6rem;
		line-height: 1.5;
	}
	> ul {
		margin: 1.4rem 0 1.4rem 0;
		> li {
			color: #fff;
			font-size: 1.6rem;
			line-height: 1.5;
			border-bottom: 1px solid #fff;
			padding: 0 0 0.4rem 0;
			margin: 0 0 0.4rem 0;
		}
	}
	${device.mobile} {
		padding:3rem;
	}
`;