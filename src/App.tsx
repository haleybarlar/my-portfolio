import * as React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import styled from "styled-components";
import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";
import { Home } from "./components/home/Home";
import { About } from "./components/about/About";
import { Resume } from "./components/resume/Resume";
import { Contact } from "./components/contact/Contact";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: auto;
`;

const MainSectionLayout = styled.main`
  flex: 1;
  padding: 0 40px;
`;

function App() {
  return (
    <AppWrapper>
      <Navbar />
      <MainSectionLayout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </MainSectionLayout>
      <Footer />
    </AppWrapper>
  );
}

export default withRouter(App);
