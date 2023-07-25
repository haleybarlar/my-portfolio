import * as React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { Navbar } from "./pages/navbar/Navbar";
import { Footer } from "./pages/footer/Footer";
import { Home } from "./pages/home/Home";
import { About } from "./pages/about/About";
import { Resume } from "./pages/resume/Resume";
import { Contact } from "./pages/contact/Contact";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: auto;
  padding-bottom: env(safe-area-inset-bottom);
`;

const MainSectionLayout = styled.main`
  flex: 1;
  padding: 0 40px;

  @media (max-width: 768px) {
    margin-bottom: ;
  }
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
