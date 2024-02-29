import Asset from "@/components/Asset";
import Footer from "@/components/Footer";
import CustomNavbar from "@/components/Navbar";
import PageWrapper from "@/components/PageWrapper";
import TradingViewWidget from "@/components/Trading/TradingViewWidget";
import React from "react";

const AssetPage = () => {
  return (
    <>
      <CustomNavbar />
      <PageWrapper>
        <Asset />
      </PageWrapper>
      <Footer />
    </>
  );
};

export default AssetPage;
