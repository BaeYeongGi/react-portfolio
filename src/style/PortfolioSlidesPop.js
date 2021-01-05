import styled, { css } from "styled-components";
import { URL } from "include/ImageURL";

export const images = {
	homepage: {
		main: URL + "/images/portfolio_homepage_main.jpg",
		productsOverview: URL + "/images/portfolio_homepage_products_overview.jpg",
		newsList: URL + "/images/portfolio_homepage_news_list.jpg",
		newsView: URL + "/images/portfolio_homepage_news_view.jpg",
		download: URL + "/images/portfolio_homepage_download.jpg",
		login: URL + "/images/portfolio_homepage_login.jpg",
		policy: URL + "/images/portfolio_homepage_policy.jpg",
		regist: URL + "/images/portfolio_homepage_regist.jpg",
		verification: URL + "/images/portfolio_homepage_verification.jpg",
		mypage: URL + "/images/portfolio_homepage_mypage.jpg",
		modify: URL + "/images/portfolio_homepage_modify.jpg",
		changePassword: URL + "/images/portfolio_homepage_change_password.jpg",
		contactList: URL + "/images/portfolio_homepage_contact_list.jpg",
		contactView: URL + "/images/portfolio_homepage_contact_view.jpg",
	},
	tisepx: {
		main: URL + "/images/portfolio_tisepx_main.jpg",
		login: URL + "/images/portfolio_tisepx_login.jpg",
		policy: URL + "/images/portfolio_tisepx_policy.jpg",
		regist: URL + "/images/portfolio_tisepx_regist.jpg",
		mypage: URL + "/images/portfolio_tisepx_mypage.jpg",
		update: URL + "/images/portfolio_tisepx_update.jpg",
		changePassword: URL + "/images/portfolio_tisepx_change_password.jpg",
		upload: URL + "/images/portfolio_tisepx_upload.jpg",
		loading: URL + "/images/portfolio_tisepx_loading.jpg",
		result: URL + "/images/portfolio_tisepx_result.jpg",
	},
	clickCursor: URL + "/images/icon_click_cursor_mint.png",
};

export const PortfolioSlideWrap = styled.div`
	overflow-y: auto;
	height: calc(100% - 17rem);
	.swiper-container {
		.swiper-slide {
			display: flex;
			background: #fff;
			cursor: url(${images.clickCursor}), auto;
		}
	}
`;

export const PortfolioTxt = styled.ul`
	padding: 2rem;
	> li {
		counter-increment: TxtNum;
		font-size: 1.6rem;
		line-height: 1.4;
		position: relative;
		margin: 0 0 0 2.7rem;
		color: #333;
		&:not(:last-child) {
			margin: 0 0 1.8rem 2.7rem;
		}
		&::before {
			content: counter(TxtNum) ". ";
			color: #ff2e2d;
			font-size: 2.4rem;
			font-weight: 600;
			position: absolute;
			top: -0.8rem;
			left: -2.7rem;
		}
		> a {
			color: #0f4986;
			border-bottom: 1px solid #0f4986;
		}
		> span {
			&.upper {text-transform:uppercase;}
		}
	}
`;

export const PortfolioTitle = styled.p`
	font-size:3rem; color:#fff; position:absolute; bottom:calc(100% + 1.4rem); left:0; z-index:2;
`
const PortfolioController = css`
	position: absolute;
	top: -3rem;
	font-size: 3rem;
	width: 3rem;
	height: 3rem;
	background: #666;
	color: #fff;
	cursor: pointer;
	&:hover {
		background:#444;
	}
`;

export const PortfolioSlidePrev = styled.a`
	${PortfolioController}
	right:6rem;
`;

export const PortfolioSlideNext = styled.a`
	${PortfolioController}
	right:3rem;
`;