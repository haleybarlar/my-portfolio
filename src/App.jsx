import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Work from "./components/Work";
import About from "./components/About";
import "./App.css"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/work" component={Work} />
        <Route exact path="/about" component={About} />
      </Switch>
      <Footer />
    </div>
  );
}

export default withRouter(App);
