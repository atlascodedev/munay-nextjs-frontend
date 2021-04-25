import React from "react";
import PromotionSectionLayout, { PromotionSectionLayoutProps } from "./styles";

interface PromotionSectionProps extends PromotionSectionLayoutProps {}

const PromotionSection = ({ action }: PromotionSectionProps) => {
  return <PromotionSectionLayout action={action}></PromotionSectionLayout>;
};

export default PromotionSection;
