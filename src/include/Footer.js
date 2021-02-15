import React from "react";
import { FooterWrap, FooterContents, FooterSNS, FooterInfo } from "style/Footer";

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
            href="https://open.kakao.com/o/s8EADgXc"
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
          <li><a href="mailto:byg5913@gmail.com">byg5913@gmail.com</a></li>
          <li>Copyrightⓒ2020 BaeYeongGi All rights reserved</li>
        </FooterInfo>
			</FooterContents>
		</FooterWrap>
	);
};

export default Footer;
