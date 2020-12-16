import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { URL } from "include/ImageURL";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
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

const params = {
	slidesPerView: 1,
	shouldSwiperUpdate: true,
	rebuildOnUpdate: true,
	autoplay: {
		delay: 5000,
	},
};

const PortfolioSlidesPop = () => {
	const [homepageURL, setHomepageURL] = useState([]);

	useEffect(() => {
		setHomepageURL(images.homepage);
	}, []);
	return (
		<div>
			<Swiper {...params}>
				<SwiperSlide>
					<img src={images.homepage.main} alt="main" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={images.homepage.productsOverview} alt="products_overview" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={images.homepage.newsList} alt="newsList" />
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
		</div>
	);
};

export default PortfolioSlidesPop;
