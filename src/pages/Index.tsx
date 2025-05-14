import React from "react";
import Layout from "../components/layout/Layout";
import HeroSection from "../components/home/HeroSection";
import FeaturedProperties from "../components/home/FeaturedProperties";
import HowItWorks from "../components/home/HowItWorks";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturedProperties />
      <HowItWorks />
    </Layout>
  );
};

export default Index;
