import React from "react";
import HeroLayout from "./styles";

export interface HeroProps {}

const Hero: React.FC<HeroProps> = ({ children }) => {
  return <HeroLayout></HeroLayout>;
};

export default Hero;
