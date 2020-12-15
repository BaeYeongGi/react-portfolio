import React from "react";
import { Section, SectionTitle, Contents } from "style/common";
import styled from "styled-components";

const IntroProfileWrap = styled.div`
	.intro_profile_img {
		width: 15rem;
		height: 15rem;
    border-radius: 15rem;
    margin:0 0 1.6rem 0;
		background: #d5e5ff;
  }
  > dl {text-align:center; color:#fff;
    > dt {margin:0 0 1rem 0;}
    > dd {}
    &:not(:last-child) {
      &::after {content:''; display:block; width:5px; height:5px; border-radius:5px; background:#fff; margin:1.6rem auto;}
    }
  }
`;

const IntroContents = styled.div`
	padding: 0 0 0 4rem;
	width:calc(100% - 15rem);
  .intro_contents_txt {font-size:1.6rem; color:#fff; line-height:1.3;}
  .intro_contents_line {display:block; border:0; width:100%; height:1px; background:#fff; margin:2rem 0;}
  .intro_contents_history_title {color:#fff; font-size:2rem; margin:0 0 2rem 0;}
  .intro_contents_history_contents { color:#fff; font-size:1.6rem; line-height:1.6; }
`;

const Intro = () => {
	return (
		<Section className="intro">
			<SectionTitle className="intro">Intro</SectionTitle>
			<Contents>
				<IntroProfileWrap>
					<div className="intro_profile_img"></div>
					<dl>
						<dt>Name</dt>
						<dd>bae yeong gi</dd>
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
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
						when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
						electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
						passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
					</p>
          <hr className="intro_contents_line" />
          <p className="intro_contents_history_title">History</p>
          <dl className="intro_contents_history_contents">
            <dt>[ 메디컬아이피(소프트웨어) ] - 2020.06 ~ 재직중</dt>
            <dd>- 프론트앤드 개발 & 웹퍼블리싱</dd>
            <dt>[ 아이디병원(기업) ] - 2019.06 ~ 2020.04</dt>
            <dd>- 웹퍼블리싱</dd>
            <dt>[ 가온스(웹에이전시) ] - 2018.04 ~ 2019.05</dt>
            <dd>- 웹퍼블리싱</dd>
            <dt>[ 동영정보(소프트웨어) ] - 2017.03 ~ 2018.03</dt>
            <dd>- 웹퍼블리싱 & 디자인</dd>
            <dt>대구 그린컴퓨터아트학원 웹퍼블리싱 프론트엔드 디자인 수료 - 2017.02</dt>                                  
          </dl>
				</IntroContents>
			</Contents>
		</Section>
	);
};

export default Intro;
