import React, { useState } from "react";
import { Section, SectionTitle, SectionArea } from "style/common";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { URL } from "include/ImageURL";
import "swiper/swiper.scss";
import styled from "styled-components";
import "swiper/components/navigation/navigation.scss";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const images = {
	react: URL + "/images/icon_react.png",
	router: URL + "/images/icon_react_router_dom.png",
	redux: URL + "/images/icon_redux.png",
	sass: URL + "/images/icon_sass.png",
	styledComponents: URL + "/images/icon_styled_components.png",
	html5: URL + "/images/icon_html5.png",
	css3: URL + "/images/icon_css3.png",
	javascript: URL + "/images/icon_javascript.png",
	seo: URL + "/images/icon_seo.png",
	dragCursor: URL + "/images/icon_drag_cursor.png",
	clickCursor: URL + "/images/icon_click_cursor_blue.png",
	slidesRight: URL + "/images/icon_slide_right_btn.png",
};

const SkillsWrap = styled.div`
	.swiper-container { padding:0 0 6rem 0;
		.swiper-slide {
			display: flex;
			align-items: center;
			height: 200px;
			cursor: url(${images.clickCursor}), auto;
			> div {
				background: #fff;
				width: 150px;
				height: 150px;
				border-radius: 150px;
				display: flex;
				justify-content: center;
				align-items: center;
				margin: 0 auto;

				transition-property: width, height, opacity;
				transition-duration: 0.3s;
				opacity: 0.7;
				> img {
					width: 60%;
					transition-property: width;
					transition-duration: 0.3s;
				}
			}
			&.swiper-slide-active {
				> div {
					width: 200px;
					height: 100%;
					border-radius: 200px;
					opacity: 1;
				}
			}
		}
		.swiper-button-prev,
		.swiper-button-next {
			color: #fff;
			top:auto;
			bottom:0;
		}
	}
	.skills_line {
		display: block;
		width: 70%;
		height: 1px;
		background: #fff;
		border: 0;
		margin: -23px auto 3rem auto;
	}
`;

const SkillsContents = styled.div`
	width: 70%;
	margin: 0 auto;
`;

const ReactJs = () => {
	return (
		<>
			<p>
				함수형 컴포넌트로 작업하는걸 선호하며, 프론트앤드 개발로 참여한 프로젝트는 [ Homepage Renewal, TiSepX ] 입니다.
				백앤드로부터 받은 API를 이용한 계정 회원가입, 회원가입 이메일 인증, 계정생성, 로그인,
				회원정보 조회, 회원정보 수정, 비밀번호 변경, 비밀번호 초기화, 회원탈퇴 기능을 구현할 수 있으며
				react-hooks-form 모듈을 활용한 회원가입, 정보수정 validation을 적용 하였습니다,
				로그인 상태에 따라 Download 페이지의 파일 다운로드 방지 및 제공 기능을 구현하였습니다. 
				그 외 개발상황에 필요한 npm module 설치 및 활용이 가능합니다.
			</p>
		</>
	)
}

const ReactRouterDom = () => {
	return (
		<>
		react-router-dom
		</>
	)
}

const Redux = () => {
	return (
		<>
		redux
		</>
	)
}

const Sass = () => {
	return (
		<>
		sass
		</>
	)
}

const StyledComponent = () => {
	return (
		<>
		styled-component
		</>
	)
}

const Html = () => { 
	return (
		<>
html
		</>
	)
}

const Css = () => {
	return (
		<>
css
		</>
	)
}

const Javascript = () => {
	return (
		<>
			<p>ddfsfd</p>
		</>
	)
}

const Seo = () => {
	return (
		<>
			<p>
				create-react-app 을 통해 생성한 프로젝트는 CSR(Client Side Rendering)입니다.
				프로젝트를 build하면 하나의 html파일로 저장이 되는데, SEO에 좀 더 유리한 페이지로 build 하기 위해
				react-helmet과 react-snap 모듈을 이용하여 각각의 페이지별 index.html 파일을 생성해줍니다.
				현재 사용하고 있는 방법은 SSR(Server Side Rendering) 방식이 아니기 때문에
				SSR을 대신한 임시방편으로 SEO를 적용시키는게 가능합니다.				
			</p>
		</>
	)
}

const skillsContents = [
	{
		skillId: 0,
		skillContent: <ReactJs/>,
	},
	{
		skillId: 1,
		skillContent: <ReactRouterDom/>,
	},
	{
		skillId: 2,
		skillContent: <Redux/>,
	},
	{
		skillId: 3,
		skillContent: <Sass/>,
	},
	{
		skillId: 4,
		skillContent: <StyledComponent/>,
	},
	{
		skillId: 5,
		skillContent: <Html/>,
	},
	{
		skillId: 6,
		skillContent: <Css/>,
	},
	{
		skillId: 7,
		skillContent: <Javascript/>,
	},
	{
		skillId: 8,
		skillContent: <Seo/>,
	},	
];

const swiperParams = {
	slidesPerView: 5,
	centeredSlides: true,
	slideToClickedSlide: true,
	navigation: true,
	autoplay: {
		delay: 5000,
	},
};

const useSwipe = (initialSlides, allSlides) => {
	const [contentIndex, setContentIndex] = useState(initialSlides);
	return {
		contentItem: allSlides[contentIndex],
		contentChange: setContentIndex,
	};
};

const Skills = () => {
	const { contentItem, contentChange } = useSwipe(0, skillsContents);
	return (
		<Section className="skills">
			<SectionArea id="Skills"/>
			<SectionTitle className="skills">Skills</SectionTitle>
			<SkillsWrap>
				<Swiper {...swiperParams} onSlideChange={(swiper) => contentChange(swiper.activeIndex)}>
					<SwiperSlide>
						<div>
							<img src={images.react} alt="react" />
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div>
							<img src={images.router} alt="react-router-dom" />
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div>
							<img src={images.redux} alt="redux" />
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div>
							<img src={images.sass} alt="sass" />
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div>
							<img src={images.styledComponents} alt="styled-components" />
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div>
							<img src={images.html5} alt="html5" />
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div>
							<img src={images.css3} alt="css3" />
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div>
							<img src={images.javascript} alt="javascript" />
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div>
							<img src={images.seo} alt="SEO" />
						</div>
					</SwiperSlide>					
				</Swiper>
				<hr className="skills_line" />
				<SkillsContents>{contentItem.skillContent}</SkillsContents>
			</SkillsWrap>
		</Section>
	);
};

export default Skills;
