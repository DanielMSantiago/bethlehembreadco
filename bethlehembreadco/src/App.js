// COMMENT: Package imports
import React from "react";
import { Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

// COMMENT: File Imports
import About from "./Components/NavBar/About/About";
import Blog from "./Components/NavBar/Blog/Blog";
import Home from "./Components/NavBar/Home/Home";
import Store from "./Components/NavBar/Store/Store";
import NavBar from "./Components/NavBar/NavBar";

// COMMENT: Destructuring styles from styles.ts
import { AppContainer, NavMenu } from "./App.ts";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
  }
`;

export const App = () => {
  return (
    <AppContainer>
      <GlobalStyles />
      <NavMenu>
        <NavBar />
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/store" element={<Store />} />
        </Routes>
      </NavMenu>
    </AppContainer>
  );
};

export default App;
