import "./App.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { Helmet } from "react-helmet";
import logo from "./assets/img/logo.svg";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      
      <Helmet>
        <link rel="icon" type="image/x-icon" href={logo}></link>
        <title>Mynfix</title>
      </Helmet>
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
