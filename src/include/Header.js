import React, { useState } from "react";
import { NavHashLink  as Link } from "react-router-hash-link";
import { useScroll } from "include/UseScroll";
import { HeaderOpacity, HeaderWrap, Head, Logo, Gnb, MobileGnb, MobileGnbWrap, MobileGnbTop, MobileGnbSns, MobileGnbContact, MobileMenu } from "style/Header";

const Header = () => {
  const { y } = useScroll();
  const [ visible, setVisible ] = useState('');
  const openMobileGnb = () => {
    setVisible('visible');
  }
  const closeMobileGnb = () => {
    setVisible('hidden');
  } 
  const GnbList = [
    <li onClick={closeMobileGnb}><Link smooth to="#Intro" className="intro">Intro</Link></li>,
    <li onClick={closeMobileGnb}><Link smooth to="#SelfInterview" className="self_interview">Self Interview</Link></li>,
    <li onClick={closeMobileGnb}><Link smooth to="#Skills" className="skills">Skills</Link></li>,
    <li onClick={closeMobileGnb}><Link smooth to="#Portfolio" className="portfolio">Portfolio</Link></li>,  
  ]
  return (
    <>
      <HeaderOpacity className={visible} onClick={closeMobileGnb}/>
      <HeaderWrap className={y > 190 ? 'active' : ''}>
        <Head>
          <Logo><Link to="#">WhyG</Link></Logo>
          <Gnb>
            {GnbList}
          </Gnb>
          <MobileMenu onClick={openMobileGnb}>
            <i className="xi-align-right"></i>
          </MobileMenu>
        </Head>
      </HeaderWrap>
      <MobileGnbWrap className={visible}>
        <MobileGnbTop>
          <Link to="#" className="mobile_logo">WhyG</Link>
          <Link to="#hash-fragments" className="mobile_close" onClick={closeMobileGnb}><i class="xi-close"></i></Link>
        </MobileGnbTop>
        <MobileGnb>
          {GnbList}         
        </MobileGnb>
        <MobileGnbSns>
          <li><a href="https://blog.naver.com/byk5913" target="_blank" rel="noreferrer" className="naver"><i className="xi-naver"></i></a></li>
          <li><a href="https://github.com/BaeYeongGi" target="_blank" rel="noreferrer" className="github"><i className="xi-github"></i></a></li>
          <li><a href="#" className="kakao"><i className="xi-kakaotalk"></i></a></li>
        </MobileGnbSns>
        <MobileGnbContact>
          <li><a href="tel:010-5260-5913"><i className="xi-mobile"></i> 010-5260-5913</a></li>
          <li><a href="mailto:byg5913@gmail.com"><i className="xi-mail"></i> byg5913@gmail.com</a></li>
        </MobileGnbContact>
        <p className="mobile_gnb_txt">react.js 라이브러리로 제작된<br/> 포트폴리오 페이지 입니다.</p>
      </MobileGnbWrap>
    </>
  );
};

export default Header;