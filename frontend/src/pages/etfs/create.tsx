import CreateETF from "@/components/CreateETF";
import Footer from "@/components/Footer";
import CustomNavbar from "@/components/Navbar";
import PageWrapper from "@/components/PageWrapper";
import React from "react";

const Create = () => {
  return (
    <>
      <CustomNavbar />
      <PageWrapper>
        <CreateETF />
      </PageWrapper>
      <Footer />
    </>
  );
};

export default Create;
