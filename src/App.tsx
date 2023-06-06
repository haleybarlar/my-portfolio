import * as React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { Work } from "./components/Work";
import { About } from "./components/About";
import "./App.css";
import styled from "styled-components";

const MainSectionLayout = styled.main`
  padding: 24px;
`;

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainSectionLayout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/work" component={Work} />
          <Route exact path="/about" component={About} />
        </Switch>
      </MainSectionLayout>
      <Footer />
    </div>
  );
}

export default withRouter(App);
