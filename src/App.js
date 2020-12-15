import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import Header from "include/Header"; 
import Footer from "include/Footer";
import Intro from "components/Intro";
import SelfInterview from "components/SelfInterview";
import Skills from "components/Skills";
import Portfolio from "components/Portfolio";
import styled from "styled-components";

const history = createBrowserHistory();
const SectionWrapper = styled.div`
  width:120rem; margin:0 auto;
  > section {margin-top:4rem;}
`

function App() {
  return (
    <Router history={history}>
      <Header />
      <SectionWrapper>
        <Intro />
        <SelfInterview />
        <Skills />
        <Portfolio />
      </SectionWrapper>
      <Footer />
    </Router>
  );
}

export default App;
