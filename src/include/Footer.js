import React from "react";
import styled from "styled-components";

const FooterWrap = styled.div`
	width: 100%;
	background: #615c5a;
	margin-top: 4rem;
	padding: 4rem 0;
`;
const FooterContents = styled.footer`
  width: 120rem;
  display:flex;
  justify-content:space-between;
  align-items:center;
	margin: 0 auto;
`;

const FooterSNS = styled.ul`
	> li {
		> a {
			display: block;
			width: 18rem;
      padding:0.8rem 1.4rem;
      border: 1px solid #fff;
      color:#fff;
      font-size:1.6rem;
      transition-property:border, color;
      transition-duration:0.2s;
      > i {margin:0 0.4rem 0 0;}
      &:hover {
        border-right-width:8px;
      }
      &.naver {
        &:hover {color:#3ba046; border-color:#3ba046;}
      }
      &.github {
        &:hover {color:#333; border-color:#333;}
      }
      &.kakao {
        &:hover {color:#f0d94a; border-color:#f0d94a;}
      }
    }
    &:not(:last-child) {margin:0 0 0.8rem 0;}

	}
`;

const FooterInfo = styled.ul`
  text-align:right;
  > li { color:#fff;
    > a {color:#fff; display:inline-block; border-bottom:1px solid #fff;}
    &:not(:last-child) {margin:0 0 1rem 0;}
  }
`;

const Footer = () => {
	return (
		<FooterWrap>
			<FooterContents>
				<FooterSNS>
					<li>
						<a
            href="https://blog.naver.com/byk5913"
            target="_blank"
            className="naver"
            rel="noreferrer"
            >
							<i className="xi-naver"></i>Blog
						</a>
					</li>
					<li>
						<a
            href="https://github.com/BaeYeongGi"
            target="_blank"
            className="github"
            rel="noreferrer"
            >
							<i className="xi-github"></i>GitHub
						</a>
					</li>
					<li>
            <a
            href="#"
            target="_blank"
            className="kakao"
            rel="noreferrer"
            >
							<i className="xi-kakaotalk"></i>KaKao
						</a>
					</li>
				</FooterSNS>
				<FooterInfo>
          <li><a href="tel:010-5260-5913">010-5260-5913</a></li>
          <li><a href="mailto:byk5913@naver.com">byk5913@naver.com</a></li>
          <li>Copyrightⓒ2020 BaeYeongGi All rights reserved</li>
        </FooterInfo>
			</FooterContents>
		</FooterWrap>
	);
};

export default Footer;
