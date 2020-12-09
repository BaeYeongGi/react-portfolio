import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import Header from "include/Header"; 

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Header/>
      24342343242423424234
    </Router>
  );
}

export default App;
