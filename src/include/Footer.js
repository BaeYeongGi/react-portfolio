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
				</FooterSNS>
				<FooterInfo>
          <li><a href="mailto:byg5913@gmail.com">byg5913@gmail.com</a></li>
          <li>Copyrightⓒ2020 BaeYeongGi All rights reserved</li>
        </FooterInfo>
			</FooterContents>
		</FooterWrap>
	);
};

export default Footer;
