import React from "react";
import { Section, SectionTitle, Contents, SectionArea } from "style/common";
import { IntroProfileWrap, IntroContents, images } from "style/Intro";


const Intro = () => {
	return (
		<Section className="intro">
			<SectionArea id="Intro" />
			<SectionTitle className="intro">Intro Sample</SectionTitle>
			<Contents className="intro_contents">
				<IntroProfileWrap>
					<img src={images.profile} alt="배영기" className="intro_profile_img" />
					<dl>
						<dt>Name</dt>
						<dd>Bae yeong gi</dd>
					</dl>
					<dl>
						<dt>Birth</dt>
						<dd>1995.04.22</dd>
					</dl>
					<dl>
						<dt>Live in</dt>
						<dd>Seoul</dd>
					</dl>
				</IntroProfileWrap>
				<IntroContents>
					<p className="intro_contents_txt">
						Responsive WEB
					</p>
					<hr className="intro_contents_line" />
					<p className="intro_contents_history_title">History</p>
					<dl className="intro_contents_history_contents">
						<dt>[ SK커뮤니케이션즈 ] - 2021.03 ~ 재직중</dt>
						<dd>- 프론트앤드 개발</dd>						
						<dt>[ 아이디병원(기업) ] - 2019.06 ~ 2020.04</dt>
						<dd>- 웹퍼블리싱</dd>
						<dt>[ 가온스(웹에이전시) ] - 2018.04 ~ 2019.05</dt>
					</dl>
				</IntroContents>
			</Contents>
		</Section>
	);
};

export default Intro;
