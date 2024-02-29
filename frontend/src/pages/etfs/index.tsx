import Slide from "@/components/Asset/Slide";
import { items } from "@/components/Asset/data";
import Features from "@/components/ETFs/Features";
import Slider from "@/components/ETFs/Slider";
import Footer from "@/components/Footer";
import CustomNavbar from "@/components/Navbar";
import PageWrapper from "@/components/PageWrapper";
import ETFPageWrapper from "@/components/PageWrapper/ETFPageWrapper";
import { Button } from "@nextui-org/react";
import React from "react";

const ETFs = () => {
  return (
    <>
      <CustomNavbar />
      <ETFPageWrapper>
        <div className="max-w-6xl px-4 mx-auto sm:px-6">
          <div className="pt-16 pb-10 md:pt-20 md:pb-6">
            {/* Section header */}
            <div className="pb-12 text-center md:pb-20">
              <div className="inline-flex pb-3 text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-200">
                Introducing Collections
              </div>
              <h1 className="pb-4 text-transparent h1 bg-clip-text bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60">
                Trading made easy
              </h1>
              <div className="max-w-3xl mx-auto">
                <p className="text-lg text-slate-400">
                  Forget trying to beat the markets by yourself. Own collections
                  of real-world assets, created and curated by the community.
                </p>
              </div>
            </div>

            <Slider />
          </div>

          <div className="text-left pb-12 md:pb-20 justify-start">
            {/* <div className="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-3">
                Integrations & Add-ons
              </div> */}
            <h1 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">
              You can't beat the market
              <br /> by yourself.
            </h1>
            <div className="max-w-3xl">
              <p className="text-lg text-slate-400">
                Assetly brings in real world assets to the blockchain. Trade and
                invest in real estate, stocks, commodities and more, all on the
                blockchain.
              </p>
            </div>
            <div className="mt-10">
              <Features />
            </div>
          </div>

          <div>
            <Slide
              items={items}
              id="etfs"
              title="Best performing Collections"
            />
          </div>

          <div className="text-left pb-12 md:pb-20 justify-start">
            {/* <div className="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-3">
                Integrations & Add-ons
              </div> */}
            <h1 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">
              Create your own Collection,
              <br /> earn 100% of our fees.
            </h1>
            <div className="max-w-3xl">
              <p className="text-lg text-slate-400">
                With Collections, you can earn passive income by creating the
                most popular collections of assets.
              </p>
            </div>
            <div className="mt-10 gap-5 flex">
              <Button href="/etfs/create">Create Collection</Button>
              <Button>Learn More</Button>
            </div>
          </div>
        </div>
      </ETFPageWrapper>
      <Footer />
    </>
  );
};

export default ETFs;
