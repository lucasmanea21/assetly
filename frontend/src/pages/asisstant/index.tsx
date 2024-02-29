import Footer from "@/components/Footer";
import CustomNavbar from "@/components/Navbar";
import PageWrapper from "@/components/PageWrapper";
import React from "react";

const AssistantPage = () => {
  return (
    <>
      <CustomNavbar />
      <PageWrapper>
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-4xl font-bold text-center text-white">
            Assistant Page
          </h1>
        </div>
      </PageWrapper>
      <Footer />
    </>
  );
};

export default AssistantPage;
