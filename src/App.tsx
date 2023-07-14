import * as React from "react";
import { Route, Routes } from "react-router-dom";
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

export const App = () => {
  return (
    <AppWrapper>
      <Navbar />
      <MainSectionLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </MainSectionLayout>
      <Footer />
    </AppWrapper>
  );
};
