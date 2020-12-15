import React, { useState } from "react";
import { Section, SectionTitle } from "style/common";
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

const skillsContents = [
	{
		skillId: 0,
		skillContent: "ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ",
	},
	{
		skillId: 1,
		skillContent: "ㅇㅇㅇㅇ222",
	},
	{
		skillId: 2,
		skillContent: "ㅇㅇㅇㅇ3333",
	},
	{
		skillId: 3,
		skillContent: "ㅇㅇㅇㅇ44444",
	},
	{
		skillId: 4,
		skillContent: "ㅇㅇㅇㅇ5555",
	},
	{
		skillId: 5,
		skillContent: "ㅇㅇㅇㅇ66666",
	},
	{
		skillId: 6,
		skillContent: "ㅇㅇㅇㅇ77777",
	},
	{
		skillId: 7,
		skillContent: "98888888",
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
				</Swiper>
				<hr className="skills_line" />
				<SkillsContents>{contentItem.skillContent}</SkillsContents>
			</SkillsWrap>
		</Section>
	);
};

export default Skills;
