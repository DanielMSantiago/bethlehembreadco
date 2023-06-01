import React from "react";
import { Route, Routes } from "react-router-dom";

import About from "./Components/NavBar/About/About";
import Blog from "./Components/NavBar/Blog/Blog";
import Home from "./Components/NavBar/Home/Home";
import NavBar from "./Components/NavBar/NavBar";

import { AppContainer, NavMenu } from "./App.ts";

export const App = () => {
  return (
    <AppContainer>
      <NavMenu>
        <NavBar />
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </NavMenu>
    </AppContainer>
  );
};

export default App;
