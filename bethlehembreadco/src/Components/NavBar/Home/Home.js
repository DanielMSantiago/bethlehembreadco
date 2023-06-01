import React from "react";

import BusinessLogo from "../../../Images/BethlehemBreadCo.jpeg";

import { HomeContainer, CompanyLogo } from "./styles.ts";

const Home = () => {
  return (
    <HomeContainer>
      <CompanyLogo
        src={BusinessLogo}
        alt="Business Logo for BehtlehemBreadCo."
      />
    </HomeContainer>
  );
};

export default Home;
