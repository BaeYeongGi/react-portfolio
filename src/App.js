import React from "react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import Header from "include/Header";
import Footer from "include/Footer";
import Intro from "components/Intro";
import SelfInterview from "components/SelfInterview";
import Skills from "components/Skills";
import Portfolio from "components/Portfolio";
import Aside from "components/Aside";
import styled from "styled-components";
import PortfolioSlidesPop from "components/PortfolioSlidesPop";

const history = createBrowserHistory();
const SectionWrapper = styled.div`
	width: 120rem;
	margin: 0 auto;
	padding: 14rem 0 0 0;
  position:relative;
	> section {
		margin-bottom:4rem;
		margin-top:0rem;
		position:relative;
  }

`;

const App = () => {
	return (
		<Router history={history}>
			<Header />
			<SectionWrapper>
				<Intro />
				<SelfInterview />
				<Skills />
				<Portfolio />
        <PortfolioSlidesPop/>
      </SectionWrapper>
      <Aside />
			<Footer />
		</Router>
	);
};

export default App;
