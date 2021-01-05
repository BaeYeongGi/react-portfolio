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
	position:relative; z-index:1;
	> dl { color:#fff;
		> dt {font-size:2rem; text-align:center; margin:0 0 1rem 0;}
		> dd {font-size:1.6rem; line-height:1.5;
			> a {border-bottom:1px solid #fff; color:#fff; margin:0 0.6rem;}
		}
	}
`;

const ReactJs = () => {
	return (
		<>
			<dl>
				<dt>react.js</dt>
				<dd>
					함수형 컴포넌트로 작업하는걸 선호하며, 프론트앤드 개발로 참여한 프로젝트는 [ Homepage Renewal, TiSepX ] 입니다.
					백앤드로부터 받은 API를 이용한 계정 회원가입, 회원가입 이메일 인증, 계정생성, 로그인,
					회원정보 조회, 회원정보 수정, 비밀번호 변경, 비밀번호 초기화, 회원탈퇴 기능을 구현할 수 있으며
					<a href="https://react-hook-form.com/" target="_blank" rel="noreferrer">react-hooks-form</a> 모듈을 활용한 회원가입, 정보수정 validation을 적용 하였습니다,
					로그인 상태에 따라 Download 페이지의 파일 다운로드 방지 및 제공 기능을 구현하였습니다. 
					그 외 개발상황에 필요한 npm module 설치 및 활용이 가능합니다.					
				</dd>
			</dl>
		</>
	)
}

const ReactRouterDom = () => {
	return (
		<>
		<dl>
			<dt>react-router-dom</dt>
			<dd>
				SPA에서 사용자에게 페이지 전환을 원활하게 제공하기 위해 사용되는 모듈의 기능을 다양하게 다룰 수 있습니다.<br/>
				요청 경로와 렌더링할 컴포넌트를 설정하기 위해 사용되는 Route 컴포넌트,
				요청 경로를 다른 경로로 리다이렉션 하기 위해 필요한 Redirect 컴포넌트,
				요청에 의해 매칭되는 Route 컴포넌트 들이 다수 있을 때에 제일 처음 매칭되는 Route만 선별하여 실행해주며 충돌 오류를 방지해주는 Switch 컴포넌트,
				그외 기본적으로 링크를 생성해주는 Link 컴포넌트, 필요에 따라 router props를 통해 history, match, location 객체에 접근하여
				부모 컴포넌트로부터 페이지의 상태와 정보를 가져와 활용하는 프론트앤드 개발을 할 수 있습니다.				
			</dd>
		</dl>
		</>
	)
}

const Redux = () => {
	return (
		<>
			<dl>
				<dt>react-redux</dt>
				<dd>
					전역 상태를 관리하기 위해 필요한 모듈을 사용할 수 있습니다.
					클라이언트의 로그인 API를 호출 시 로그인 상태, 회원 정보를 dispatch 하여 필요한 정보를 redux에 저장 할 수 있으며,
					로그인 상태에 따라 제공되는 GNB 메뉴, 다운로드 권한, 마이페이지 접근 권한 등을 제어할 수 있습니다.
					필요에 따라 로그인 상태를 유지하기 위해 session storage혹은 local storage에 클라이언트의 상태값을 브라우저에 저장하여 페이지 이동 혹은
					새로고침시에도 회원계정 유지가 가능합니다. 					
				</dd>
			</dl>		
		</>
	)
}

const Sass = () => {
	return (
		<>
			<dl>
				<dt>sass(scss)</dt>
				<dd>
					Homepage Renewal 프로젝트에 사용한 scss 입니다.
					프로젝트 초기에는 기존에 사용해왔던 css 만 사용해오다가 각각의 중복되는 선택자를 일일이 수정해줘야 된다는 유지보수의 단점,
					수십개의 이미지를 순차적으로 넣어야 할때에 번거로움 등을 해소하고자 scss 를 도입하고 프로젝트에 적용하였습니다.
					기본적인 scss 사용방법과 변수활용, 반복문활용, 재사용등을 다룰 수 있으며 확장자에 modules를 추가해
					외부 라이브러리와 css 클래스가 중첩되는 현상을 방지할 수 있습니다. 
				</dd>
			</dl>
		</>
	)
}

const StyledComponent = () => {
	return (
		<>		
			<dl>
				<dt>styled-components</dt>
				<dd>
					TiSepX 프로젝트에 본격적으로 도입하고 사용한 모듈입니다. css와 scss의 단점을 보완하고자 사용하였습니다.
					외부 라이브러리와 css 클래스가 중첩되는 현상도 막을 수 있을 뿐만 아니라, 기존의 컴포넌트의 element class 들을 한 scss 파일에서 관리하기 번거로운점을 개선하였습니다.
					컴포넌트 기반의 스타일링이라 간단하고 개별적이고 직관적으로 관리할 수 있다는점이 큰 장점으로 느껴졌습니다. scss와 마찬가지로 사용가능하며 다양하게 스타일링 할 수 있습니다.
				</dd>
			</dl>
		</>
	)
}

const Html = () => { 
	return (
		<>
			<dl>
				<dt>HTML</dt>
				<dd>
					페이지의 뼈대를 장식하는 html 태그를 사용할 수 있습니다.
					시맨틱태그를 활용한 마크업이 가능하며 각 용도에 따라 사용 가능한 meta 태그,
					입력시 필요에 따라 사용되는 입력태그,
					ie 크로스 브라우징을 고려한 다양한 마크업이 가능합니다.					
				</dd>
			</dl>
			
		</>
	)
}

const Css = () => {
	return (
		<>
			<dl>
				<dt>CSS</dt>
				<dd>
					페이지의 레이아웃을 디자인 시안과 동일하게 퍼블리싱하고 animation과 transition을 이용한
					동적인 효과를 자유롭게 구현할 수 있습니다. css 또한 ie 크로스 브라우징을 고려한 스타일링 작업이 가능하며,
					PC 디자인 시안이 있다면 별도의 Mobile 시안 없이 반응형 페이지를 제작 할 수 있습니다. 
				</dd>
			</dl>
		</>
	)
}

const Javascript = () => {
	return (
		<>
			<dl>
				<dt>Javascript</dt>
				<dd>
					기본적인 javascript 문법과 반복문, 제어문, dom에 접근하여 page와 element에 동적인 이벤트와 효과를 줄 수 있습니다.
					초반 퍼블리싱 업무를 진행할땐 주로 jQuery를 활용하였으나, vanilla javascript를 적극 활용하여 Web Publishing Portfolio를 완성하였습니다.
					react.js를 도입 후 ES6문법과 javascript만을 이용한 프론트앤드개발을 진행하고 있습니다.    				
				</dd>
			</dl>
		</>
	)
}

const Seo = () => {
	return (
		<>
			<dl>
				<dt>SEO(Search Engine Optimization)</dt>
				<dd>
					create-react-app 을 통해 생성한 프로젝트는 CSR(Client Side Rendering)입니다.
					프로젝트를 build하면 하나의 html파일로 저장이 되는데, SEO에 좀 더 유리한 페이지로 build 하기 위해
					react-helmet과 react-snap 모듈을 이용하여 각각의 페이지별 index.html 파일을 생성해줍니다.
					현재 사용하고 있는 방법은 SSR(Server Side Rendering) 방식이 아니기 때문에
					SSR을 대신한 임시방편으로 SEO를 적용시키는게 가능합니다.							
				</dd>
			</dl>
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
