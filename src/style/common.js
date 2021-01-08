import styled from "styled-components";

export const device = {
	sidebar: "@media screen and (max-width:1610px)",
	labtop: "@media screen and (max-width: 1280px)",
	tablet: "@media screen and (max-width: 1024px)",
	mobile: "@media screen and (max-width: 720px)",
	tinyMobile: "@media screen and (max-width: 400px)",
};

export const transitionDuration = {
	slow: "0.5s",
	normal: "0.3s",
	fast: "0.2s",
}

export const Section = styled.section`
	min-height: 30rem;
	position: relative;
	padding: 6rem;
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
	&::before {
		content: "";
		display: block;
		width: calc(100% - 4rem);
		height: calc(100% - 4rem);
		position: absolute;
		top: 2rem;
		bottom: 2rem;
		left: 2rem;
		right: 2rem;
		border: 1px solid #fff;
	}
  ${device.mobile} {
		padding:6rem 4rem 4rem 4rem;
  }	

`;

export const SectionArea = styled.div`
	position: absolute;
	top: -10rem;
	left: 0;
	width: 1px;
	height: 1px;
`;

export const SectionTitle = styled.h2`
	font-size: 20px;
	color: #fff;
	position: absolute;
	top: 2rem;
	left: 2rem;
	font-weight: 600;
	padding: 0 2rem 2rem 0;
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
`;

export const Contents = styled.div`
	display: flex;
	flex-wrap: wrap;
	position: relative;
	z-index: 1;
`;
