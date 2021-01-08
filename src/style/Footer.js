import styled from "styled-components";
import { device, transitionDuration } from "style/Common";

export const FooterWrap = styled.div`
	width: 100%;
	background: #615c5a;
	margin-top: 4rem;
	padding: 4rem 0;
`;
export const FooterContents = styled.footer`
  width: 120rem;
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin: 0 auto;
  ${device.labtop} {
   width:100%;
   padding:0 3rem;
  }
  ${device.mobile} {
    flex-wrap:wrap;
    justify-content:center;
  }  
`;

export const FooterSNS = styled.ul`
	> li {
		> a {
			display: block;
			width: 18rem;
      padding:0.8rem 1.4rem;
      border: 1px solid #fff;
      color:#fff;
      font-size:1.6rem;
      transition-property:border, color;
      transition-duration:${transitionDuration.fast};
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
  ${device.mobile} {
    width:50%;
    margin: 0 auto 3rem auto;
    > li { width:100%;
      > a { width:100%; padding: 1.4rem 1.4rem;}
    }
  }
`;

export const FooterInfo = styled.ul`
  text-align:right;
  > li { color:#fff;
    > a {color:#fff; display:inline-block; border-bottom:1px solid #fff;}
    &:not(:last-child) {margin:0 0 1rem 0;}
  }
  ${device.mobile} {
    width:100%;
    text-align:center;
  }
`;