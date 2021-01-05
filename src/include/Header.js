
import { NavHashLink  as Link } from "react-router-hash-link";
import { useScroll } from "include/UseScroll";
import { HeaderWrap, Head, Logo, Gnb } from "style/Header";

const Header = () => {
  const { y } = useScroll();
  return (
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
  );
};

export default Header;