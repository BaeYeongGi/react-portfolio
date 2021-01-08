import React from "react";
import { Section, SectionTitle, Contents, SectionArea } from "style/Common";
import { IntroProfileWrap, IntroContents, images } from "style/Intro";


const Intro = () => {
	return (
		<Section className="intro">
			<SectionArea id="Intro" />
			<SectionTitle className="intro">Intro</SectionTitle>
			<Contents class="intro_contents">
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
						다양한 개발을 경험하고 문제를 해결할 준비가 되었습니다.
						<br />
						이슈와 문제를 해결한 후 가져다 주는 기쁨을 아는
						<br />
						프론트앤드 개발자 배영기 입니다.
						<br />
					</p>
					<hr className="intro_contents_line" />
					<p className="intro_contents_history_title">History</p>
					<dl className="intro_contents_history_contents">
						<dt>[ 메디컬아이피(소프트웨어) ] - 2020.06 ~ 재직중</dt>
						<dd>- 프론트앤드 개발</dd>
						<dt>[ 아이디병원(기업) ] - 2019.06 ~ 2020.04</dt>
						<dd>- 웹퍼블리싱</dd>
						<dt>[ 가온스(웹에이전시) ] - 2018.04 ~ 2019.05</dt>
						<dd>- 웹퍼블리싱</dd>
						<dt>[ 동영정보(소프트웨어) ] - 2017.03 ~ 2018.03</dt>
						<dd>- 웹퍼블리싱 & 디자인</dd>
						<dt>대구 그린컴퓨터아트학원 웹퍼블리싱 프론트앤드 디자인 수료 - 2017.02</dt>
					</dl>
				</IntroContents>
			</Contents>
		</Section>
	);
};

export default Intro;
