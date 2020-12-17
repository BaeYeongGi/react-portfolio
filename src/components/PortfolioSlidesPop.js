import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { URL } from "include/ImageURL";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import styled from "styled-components";
import "swiper/swiper.scss";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const images = {
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
};

const PortfolioSlideWrap = styled.div`
	.swiper-container {
		.swiper-slide {display:flex; background:#fff;}
	}
`

const PortfolioTxt = styled.ul`
padding:2rem;
	> li {
		counter-increment: TxtNum;
		font-size:1.6rem;
		line-height:1.4;
		position:relative;
		margin:0 0 0 2.7rem;
		color:#333;
		&:not(:last-child) {margin:0 0 1.8rem 2.7rem;}
		&::before {
			content: counter(TxtNum) ". ";
			color:#ff2e2d;
			font-size:2.4rem; font-weight:600;
			position:absolute; top:-0.8rem; left:-2.7rem;
		}
		> a {color:#0f4986; border-bottom:1px solid #0f4986;}
	}
`;

const params = {
	slidesPerView: 1,
	autoHeight:true,
	/*
	autoplay: {
		delay: 5000,
	},
	*/
};

const PortfolioSlidesPop = () => {
	const [homepageURL, setHomepageURL] = useState([]);

	useEffect(() => {
		setHomepageURL(images.homepage);
	}, []);
	return (
		<PortfolioSlideWrap>
			<Swiper {...params}>
				<SwiperSlide>
					<img src={images.homepage.main} alt="main" />
					<PortfolioTxt>
						<li>MouseOver → 2depth 메뉴 노출. 반응형 Navigation으로 제작되었으며 해상도에 따라 PC와 Mobile에 맞는 각각의 컴포넌트를 보여줍니다.</li>
						<li>CSS Animation과 Transition을 이용한 동적인 효과를 구현하였습니다.</li>
						<li>get통신을 이용하여 Backend에서 작업한 최신뉴스 API를 불러옵니다. 기존뉴스목록을 불러오는 API에서 slice 메서드를 적용해 3개만 노출시켜 줍니다.(But 모든 뉴스 목록을 불러오기 때문에 노출시켜야 하는 갯수의 API LIST만 별도로 가져와야 합니다.)</li>
						<li>Touch Slider Library인 Swiper를 이용하여 슬라이드 기능을 구현하였습니다.</li>
					</PortfolioTxt>
				</SwiperSlide>
				<SwiperSlide>
					<img src={images.homepage.productsOverview} alt="products_overview" />
					<PortfolioTxt>
						<li>CSS Animation Tranisition을 이용한 동적인 효과를 적용하였습니다.</li>
						<li>각각 상품에 해당하는 컴포넌트들을 보여줍니다. react-router-dom을 이용하여 해당되는 페이지로 Link 이동 시킵니다.</li>
						<li>TiSepX 상품페이지로 새창을 띄웁니다.<br/>
							<a href="http://tisepx.com/" target="_blank" rel="noreferrer">http://tisepx.com/</a>
						</li>
					</PortfolioTxt>
				</SwiperSlide>
				<SwiperSlide>
					<img src={images.homepage.newsList} alt="newsList" />
					<PortfolioTxt>
						<li>get통신을 이용하여 Backend에서 작업한 모든 뉴스 API를 불러옵니다. 별도의 페이지를 표시하는 field가 있다면 pagination 구현이 가능합니다.</li>
						<li>filter 메서드를 이용하여 검색에 해당되는 제목값의 글 목록들을 불러옵니다.</li>
						<li>페이지의 height 값을 계산하여 가장 밑부분의 스크롤 도달시 새로운 list를 불러옵니다. slice 메서드를 활용하여 상태값을 변경해줍니다.</li>
					</PortfolioTxt>
				</SwiperSlide>
				<SwiperSlide>
					<img src={images.homepage.newsView} alt="newsView" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={images.homepage.download} alt="download" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={images.homepage.login} alt="login" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={images.homepage.policy} alt="policy" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={images.homepage.regist} alt="regist" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={images.homepage.verification} alt="verification" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={images.homepage.mypage} alt="mypage" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={images.homepage.modify} alt="modify" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={images.homepage.changePassword} alt="changePassword" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={images.homepage.contactList} alt="contactList" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={images.homepage.contactView} alt="contactView" />
				</SwiperSlide>
			</Swiper>
		</PortfolioSlideWrap>
	);
};

export default PortfolioSlidesPop;
