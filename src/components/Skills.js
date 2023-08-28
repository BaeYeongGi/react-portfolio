import React, { useState } from "react";
import { Section, SectionTitle, SectionArea } from "style/common";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import { images, SkillsWrap, SkillsContents } from "style/Skills";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const ReactJs = () => {
	return (
		<>
			<dl>
				<dt>react.js</dt>
				<dd>
					react-contents
				</dd>
			</dl>
		</>
	);
};

const ReactRouterDom = () => {
	return (
		<>
			<dl>
				<dt>react-router-dom</dt>
				<dd>
					react-router-dom-contents
				</dd>
			</dl>
		</>
	);
};

const Redux = () => {
	return (
		<>
			<dl>
				<dt>react-redux</dt>
				<dd>
					react-redux-contents
				</dd>
			</dl>
		</>
	);
};

const Sass = () => {
	return (
		<>
			<dl>
				<dt>sass(scss)</dt>
				<dd>
					scss-contents
				</dd>
			</dl>
		</>
	);
};

const StyledComponent = () => {
	return (
		<>
			<dl>
				<dt>styled-components</dt>
				<dd>
					styled-components-contents
				</dd>
			</dl>
		</>
	);
};

const Html = () => {
	return (
		<>
			<dl>
				<dt>HTML</dt>
				<dd>
					HTML-contents
				</dd>
			</dl>
		</>
	);
};

const Css = () => {
	return (
		<>
			<dl>
				<dt>CSS</dt>
				<dd>
					CSS-contents
				</dd>
			</dl>
		</>
	);
};

const Javascript = () => {
	return (
		<>
			<dl>
				<dt>Javascript</dt>
				<dd>
					Javascript-contents
				</dd>
			</dl>
		</>
	);
};

const Seo = () => {
	return (
		<>
			<dl>
				<dt>SEO(Search Engine Optimization)</dt>
				<dd>
					SEO-contents
				</dd>
			</dl>
		</>
	);
};

const skillsContents = [
	{
		skillId: 0,
		skillContent: <ReactJs />,
	},
	{
		skillId: 1,
		skillContent: <ReactRouterDom />,
	},
	{
		skillId: 2,
		skillContent: <Redux />,
	},
	{
		skillId: 3,
		skillContent: <Sass />,
	},
	{
		skillId: 4,
		skillContent: <StyledComponent />,
	},
	{
		skillId: 5,
		skillContent: <Html />,
	},
	{
		skillId: 6,
		skillContent: <Css />,
	},
	{
		skillId: 7,
		skillContent: <Javascript />,
	},
	{
		skillId: 8,
		skillContent: <Seo />,
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
	breakpoints: {
		1280: {
			slidesPerView:5,
		},
		1024: {
			slidesPerView:4,
		},
		720: {
			slidesPerView:3,
		},
		480: {
			slidesPerView:2
		},
		0: {
			slidesPerView:1.6
		}
	}

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
			<SectionArea id="Skills" />
			<SectionTitle className="skills">Slide Sample</SectionTitle>
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
