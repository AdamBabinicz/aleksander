import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Demo from "./components/Demo";
import Footer from "./components/Footer";
import CookieConsent from "react-cookie-consent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        {/* <Route path="/strateg" component={About} exact>
          <About />
        </Route>
        <Route path="/podboje" component={Testimonials} exact>
          <Testimonials />
        </Route>
        <Route path="/dziedzictwo" component={Demo} exact>
          <Demo />
        </Route> */}
      </Switch>
      <CookieConsent
        debug={true}
        location="bottom"
        style={{
          background: "#333",
          textAlign: "left",
          paddingBottom: "1rem",
          fontSize: "16px",
          fontFamily: "Gideon Roman",
        }}
        buttonStyle={{
          color: "#333",
          background: "#fff",
          fontSize: "18px",
          fontFamily: "Gideon Roman",
          marginRight: "1rem",
        }}
        buttonText="OK, rozumiem"
        expires={365}
      >
        "W ramach naszej witryny stosujemy pliki cookies w celu świadczenia
        Państwu usług na najwyższym poziomie, w tym w sposób dostosowany do
        indywidualnych potrzeb. Korzystanie z witryny bez zmiany ustawień
        dotyczących cookies oznacza, że będą one zamieszczane w Państwa
        urządzeniu końcowym. Możecie Państwo dokonać w każdym czasie zmiany
        ustawień dotyczących cookies."
      </CookieConsent>
    </Router>
  );
}

export default App;
