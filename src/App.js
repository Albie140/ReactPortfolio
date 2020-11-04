import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import NavTabs from "./components/NavTabs";


function App() {
  return (
    <Router>
      <div>
        <Header />
        <NavTabs />
        <Route exact path="/" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/portfolio" component={Portfolio} />
        
        <Footer />
      </div>
      </Router>

    );
}

export default App;
