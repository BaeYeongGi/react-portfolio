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
    <li onClick={closeMobileGnb}><Link smooth to="#Intro" className="intro">Intro Sample</Link></li>,
    <li onClick={closeMobileGnb}><Link smooth to="#SelfInterview" className="self_interview">Tab Sample</Link></li>,
    <li onClick={closeMobileGnb}><Link smooth to="#Skills" className="skills">Slide Sample</Link></li>,
    <li onClick={closeMobileGnb}><Link smooth to="#Portfolio" className="portfolio">Album Sample</Link></li>,  
  ]
  return (
    <>
      <HeaderOpacity className={visible} onClick={closeMobileGnb}/>
      <HeaderWrap className={y > 190 ? 'active' : ''}>
        <Head>
          <Logo><Link to="#">배영기</Link></Logo>
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
          <Link to="#" className="mobile_logo">배영기</Link>
          <Link to="#hash-fragments" className="mobile_close" onClick={closeMobileGnb}><i className="xi-close"></i></Link>
        </MobileGnbTop>
        <MobileGnb>
          {GnbList}         
        </MobileGnb>
        <MobileGnbSns>
          <li><a href="https://blog.naver.com/byk5913" target="_blank" rel="noreferrer" className="naver"><i className="xi-naver"></i></a></li>
          <li><a href="https://github.com/BaeYeongGi" target="_blank" rel="noreferrer" className="github"><i className="xi-github"></i></a></li>
        </MobileGnbSns>
        <MobileGnbContact>
          <li><a href="mailto:byg5913@gmail.com"><i className="xi-mail"></i> byg5913@gmail.com</a></li>
        </MobileGnbContact>
      </MobileGnbWrap>
    </>
  );
};

export default Header;