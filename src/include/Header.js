import styled from "styled-components";
import { Link } from "react-router-dom";
import { useScroll } from "include/UseScroll";

const HeaderWrap = styled.div`
  width:100%;
  height:100px;
  background:#7c7877;
  position:fixed;
  z-index:2;
  transition-property:background;
  transition-duration:0.3s;
  &.active {background:#615c5a;}
`

const Head = styled.header`
  width:120rem;
  height:100%;
  margin:0 auto;
  display:flex;
  align-items:center;
  justify-content:space-between;
`

const Logo = styled.h1`
  > a {display:inline-block; color:#fff; font-size:30px; font-weight:600;
    &::after {content:''; display:block; width:100%; height:4px; background:#fff; margin:3px 0 0 0;}
  }
`

const Gnb = styled.ul`
  display:flex;
  > li {
    > a {color:#fff; font-size:1.6rem; position:relative;
      &::after {content:''; display:block; width:0%; height:1px; background:#fff; position:absolute; left:0; bottom:-0.2rem; transition:width 0.2s;}
    }
    &:not(:last-child) {margin:0 4rem 0 0;}
    &:hover {
      > a {
        &::after {width:100%;}
      }
    }
  }
`

const Header = () => {
  const { y } = useScroll();
  return (
    <HeaderWrap className={y > 190 ? 'active' : ''}>
      <Head>
        <Logo><Link to="#">WhyG</Link></Logo>
        <Gnb>
          <li><Link to="#">Intro</Link></li>
          <li><Link to="#">Self Interview</Link></li>
          <li><Link to="#">Skills</Link></li>
          <li><Link to="#">Portfolio</Link></li>
        </Gnb>
      </Head>
    </HeaderWrap>
  );
};

export default Header;