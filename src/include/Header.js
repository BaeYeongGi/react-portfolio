import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";

const Head = styled.header`
  width:100%;
  background:#7c7877;
  height:100px;
  display:flex;
  align-items:center;
`

const Header = () => {
  return (
    <Head>
      <Link to="#">WhyG</Link>
    </Head>
  );
};

export default Header;