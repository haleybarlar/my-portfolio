import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { Navbar } from "./components/Navbar.tsx";
import { Footer } from "./components/Footer.tsx";
import { Home } from "./components/Home.tsx";
import { About } from "./components/About.tsx";
import "./App.css"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </Switch>
      <Footer />
    </div>
  );
}

export default withRouter(App);
