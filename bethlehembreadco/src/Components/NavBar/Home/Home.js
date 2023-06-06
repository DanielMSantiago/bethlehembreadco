// COMMENT: Package Imports
import React from "react";

// COMMENT: File Imports
import Jumbotron from "../../Jumbotron/Jumbotron";
import MidSection from "./MidSection/MidSection";

// COMMENT: Image Imports
import BusinessLogo from "../../../Images/BethlehemBreadCo.jpeg";

// COMMENT: Destructuring styles from styles.ts
import { HomeContainer, CompanyLogo } from "./styles.ts";

const Home = () => {
  return (
    <HomeContainer>
      <Jumbotron />
      <CompanyLogo
        src={BusinessLogo}
        alt="Business Logo for BehtlehemBreadCo."
      />
      <MidSection />
    </HomeContainer>
  );
};

export default Home;
