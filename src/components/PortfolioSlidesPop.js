import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { URL } from "include/ImageURL";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import styled, { css } from "styled-components";
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
	clickCursor: URL + "/images/icon_click_cursor_mint.png",
};


const PortfolioSlideWrap = styled.div`
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

const PortfolioTxt = styled.ul`
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
	}
`;

const PortfolioController = css`
	position: absolute;
	top: -3rem;
	font-size: 3rem;
	width: 3rem;
	height: 3rem;
	background: #666;
	color: #fff;
	cursor: pointer;
`;

const PortfolioSlidePrev = styled.a`
	${PortfolioController}
	right:6rem;
`;

const PortfolioSlideNext = styled.a`
	${PortfolioController}
	right:3rem;
`;

const params = {
	slidesPerView: 1,
	autoHeight: true,
	resistanceRatio: 0.7,
	navigation: {
		nextEl: ".slideToNext",
		prevEl: ".slideToPrev",
	},
	/*
	autoplay: {
		delay: 5000,
	},
	*/
};


const PortfolioSlidesPop = ({ onClass }) => {
	/*
	useEffect(() => {
		setVisible(onClass);
	},[onClass])
*/

	console.log('온클래스', onClass)


	return (
		<>			
				<PortfolioSlideWrap>
					<Swiper {...params}>
						<SwiperSlide>
							<img src={images.homepage.main} alt="main" />
							<PortfolioTxt>
								<li>
									MouseOver → 2depth 메뉴 노출. 반응형 Navigation으로 제작되었으며 해상도에 따라 PC와 Mobile에 맞는 각각의 컴포넌트를 보여줍니다. i18next 다국어
									처리 적용 모듈을 설치하여 국문버전과 영문버전 각각의 화면을 보여줍니다.
								</li>
								<li>CSS Animation과 Transition을 이용한 동적인 효과를 구현하였습니다.</li>
								<li>
									get통신을 이용하여 Backend에서 작업한 최신뉴스 API를 불러옵니다. 기존뉴스목록을 불러오는 API에서 slice 메서드를 적용해 3개만 노출시켜
									줍니다.(But 모든 뉴스 목록을 불러오기 때문에 노출시켜야 하는 갯수의 API LIST만 별도로 가져와야 합니다.)
								</li>
								<li>Touch Slider Library인 Swiper를 이용하여 슬라이드 기능을 구현하였습니다.</li>
							</PortfolioTxt>
						</SwiperSlide>
						<SwiperSlide>
							<img src={images.homepage.productsOverview} alt="products_overview" />
							<PortfolioTxt>
								<li>CSS Animation Tranisition을 이용한 동적인 효과를 적용하였습니다.</li>
								<li>각각 상품에 해당하는 컴포넌트들을 보여줍니다. react-router-dom을 이용하여 해당되는 페이지로 Link 이동 시킵니다.</li>
								<li>
									TiSepX 상품페이지로 새창을 띄웁니다.
									<br />
									<a href="http://tisepx.com/" target="_blank" rel="noreferrer">
										http://tisepx.com/
									</a>
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
							<PortfolioTxt>
								<li>
									news 목록을 보여주는 페이지에서 뉴스를 클릭하면 기사가 존재하는 경우 해당 기사 링크로 이동하게 됩니다. 기사가 존재하지 않을경우 Backend에
									입력해두었던 기사 데이터를 불러옵니다. 제목, 내용, 날짜 등 불러오는 값이 html tag로 구성되어 있기 때문에 html-react-parser 라는 Library를
									추가적으로 설치하여 페이지를 보여줍니다.
								</li>
							</PortfolioTxt>
						</SwiperSlide>
						<SwiperSlide>
							<img src={images.homepage.download} alt="download" />
							<PortfolioTxt>
								<li>
									회사의 상품을 다운로드 할 수 있는 다운로드 링크 입니다. 로그인이 되어 있는 상태일 경우에만 다운로드가 가능하게 설계되어 있습니다. 삼항연산자를
									이용하여 로그인상태와 아닌상태를 구분하여 클라이언트에게 보여줍니다. 로그인을 하지 않은 클라이언트는 로그인이 필요하다는 alert을 띄워준 후 Yes를
									누를경우 Login 페이지를 보여주고 No를 누를경우 alert이 닫힙니다.
								</li>
							</PortfolioTxt>
						</SwiperSlide>
						<SwiperSlide>
							<img src={images.homepage.login} alt="login" />
							<PortfolioTxt>
								<li>
									아이디와 패스워드를 입력하여 로그인 하는 화면입니다. 입력정보를 올바르게 입력하지 않으면 로그인을 할 수 없다는 알람을 띄웁니다. 계정이 존재하지
									않으면 Sign Up을 통해 회원가입 페이지로 이동합니다.
									<br />
									로그인을 한 후 Backend로부터 accessToken과 로그인한계정의 정보를 받아 Redux에 정보를 저장합니다. accessToken과 sessionStorage를 이용하여
									다른페이지로 전환을 시도해도 회원 정보를 잃지않도록 합니다.
								</li>
							</PortfolioTxt>
						</SwiperSlide>
						<SwiperSlide>
							<img src={images.homepage.policy} alt="policy" />
							<PortfolioTxt>
								<li>
									회원가입전 회원약관과 개인정보보호정책에 동의를 하는 화면입니다. 두 개의 checkbox를 모두 동의할 경우에만 Sign Up 버튼을 통해 다음 화면으로
									넘어갑니다.
								</li>
							</PortfolioTxt>
						</SwiperSlide>
						<SwiperSlide>
							<img src={images.homepage.regist} alt="regist" />
							<PortfolioTxt>
								<li>
									회원가입 입력 화면입니다. 올바른 회원정보를 입력하기 위해 react-hook-form 모듈을 설치하여 조건에 맞는 validation을 추가하였습니다. 비밀번호의
									경우 정규표현식을 이용하여 적용하였습니다.
								</li>
								<li>Backend에서 보내준 국가코드를 출력해줍니다. get통신을 이용하였습니다.</li>
							</PortfolioTxt>
						</SwiperSlide>
						<SwiperSlide>
							<img src={images.homepage.verification} alt="verification" />
							<PortfolioTxt>
								<li>회원가입한 메일로 인증링크를 보내줍니다. 메일함에서 인증 링크를 클릭시 회원가입이 완료되는 페이지를 보여줍니다.</li>
							</PortfolioTxt>
						</SwiperSlide>
						<SwiperSlide>
							<img src={images.homepage.mypage} alt="mypage" />
							<PortfolioTxt>
								<li>로그인이 된 상태라면 상단의 GNB에서 LOGIN 메뉴는 MY PAGE로 변경됩니다. 로그인 후 Redux에서 저장된 정보를 MyPage 컴포넌트에 출력해줍니다.</li>
								<li>
									Backend에서 보내준 Logout API를 이용해 로그아웃 기능을 적용합니다. Redux와 sessionStorage에 저장해둔 정보를 지워주는 코드를 함께 작성해줍니다.
								</li>
							</PortfolioTxt>
						</SwiperSlide>
						<SwiperSlide>
							<img src={images.homepage.modify} alt="modify" />
							<PortfolioTxt>
								<li>로그인한 계정의 정보를 수정하여 적용하는 API를 사용합니다.</li>
							</PortfolioTxt>
						</SwiperSlide>
						<SwiperSlide>
							<img src={images.homepage.changePassword} alt="changePassword" />
							<PortfolioTxt>
								<li>현재의 비밀번호, 변경할 비밀번호와 다시 입력해야하는 입력란이 일치해야 비밀번호 변경 API가 적용됩니다.</li>
							</PortfolioTxt>
						</SwiperSlide>
						<SwiperSlide>
							<img src={images.homepage.contactList} alt="contactList" />
							<PortfolioTxt>
								<li>Contact 게시판 목록을 불러옵니다.</li>
								<li>게시글을 클릭하면 패스워드를 입력합니다. 패스워드가 일치할경우 게시글 상세보기로 넘어가고, 그렇지 않다면 일치하지 않는다는 문구를 띄웁니다.</li>
								<li>
									현재페이지의 Index 값을 이용하여 Pagination을 구현합니다. 페이지가 첫번째 혹은 마지막번째 페이지일 경우 필요없는 Controller를 지우는 코드를 함께
									작성해줍니다.
								</li>
								<li>게시글 등록을 위한 write 화면으로 갑니다.</li>
							</PortfolioTxt>
						</SwiperSlide>
						<SwiperSlide>
							<img src={images.homepage.contactView} alt="contactView" />
							<PortfolioTxt>
								<li>게시글의 패스워드가 일치하면 게시글의 상세페이지를 보여줍니다.</li>
							</PortfolioTxt>
						</SwiperSlide>
					</Swiper>
				</PortfolioSlideWrap>
				<PortfolioSlidePrev className="slideToPrev">
					<i className="xi-angle-left-min"></i>
				</PortfolioSlidePrev>
				<PortfolioSlideNext className="slideToNext">
					<i className="xi-angle-right-min"></i>
				</PortfolioSlideNext>
		</>
	);
};

export default PortfolioSlidesPop;
