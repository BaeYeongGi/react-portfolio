
import { NavHashLink  as Link } from "react-router-hash-link";
import { useScroll } from "include/UseScroll";
import { HeaderWrap, Head, Logo, Gnb, MobileGnb, MobileGnbWrap, MobileGnbTop, MobileGnbSns } from "style/Header";

const Header = () => {
  const { y } = useScroll();
  return (
    <>
      <HeaderWrap className={y > 190 ? 'active' : ''}>
        <Head>
          <Logo><Link to="#">WhyG</Link></Logo>
          <Gnb>
            <li><Link smooth to="#Intro">Intro</Link></li>
            <li><Link smooth to="#SelfInterview">Self Interview</Link></li>
            <li><Link smooth to="#Skills">Skills</Link></li>
            <li><Link smooth to="#Portfolio">Portfolio</Link></li>
          </Gnb>
        </Head>
      </HeaderWrap>
      <MobileGnbWrap>
        <MobileGnbTop>
          <Link to="#" className="mobile_logo">WhyG</Link>
          <Link to="#" className="mobile_close"><i class="xi-close"></i></Link>
        </MobileGnbTop>
        <MobileGnb>
          <li><Link smooth to="#Intro" className="intro">Intro</Link></li>
          <li><Link smooth to="#SelfInterview" className="self_interview">Self Interview</Link></li>
          <li><Link smooth to="#Skills" className="skills">Skills</Link></li>
          <li><Link smooth to="#Portfolio" className="portfolio">Portfolio</Link></li>         
        </MobileGnb>
        <MobileGnbSns>
          <li><a href="#" className="naver"><i className="xi-naver"></i></a></li>
          <li><a href="#" className="github"><i className="xi-github"></i></a></li>
          <li><a href="#" className="kakao"><i className="xi-kakaotalk"></i></a></li>
        </MobileGnbSns>
      </MobileGnbWrap>
    </>
  );
};

export default Header;