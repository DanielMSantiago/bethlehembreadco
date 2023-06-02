import React from "react";

import Jumbotron from "../../Jumbotron/Jumbotron";
import BusinessLogo from "../../../Images/BethlehemBreadCo.jpeg";

import { HomeContainer, CompanyLogo } from "./styles.ts";

const Home = () => {
  return (
    <HomeContainer>
      <Jumbotron />
      <CompanyLogo
        src={BusinessLogo}
        alt="Business Logo for BehtlehemBreadCo."
      />
    </HomeContainer>
  );
};

export default Home;
