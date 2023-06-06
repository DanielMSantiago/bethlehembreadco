import React from "react";

//COMMENT: Image Imports
import BreadVintage from "../../../../Images/BreadVintage.jpeg";

//COMMENT: Destructuring styles from styles.ts
import {
  MidSectionContainer,
  MidSizeImage,
  MidSizeAboutSection,
  MidSizeAboutSectionText,
} from "./styles.ts";

export const MidSection = () => {
  return (
    <MidSectionContainer>
      <MidSizeImage src={BreadVintage} alt="Vintage style bread" />
      <MidSizeAboutSection>
        <MidSizeAboutSectionText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam,
        </MidSizeAboutSectionText>
      </MidSizeAboutSection>
    </MidSectionContainer>
  );
};

export default MidSection;
