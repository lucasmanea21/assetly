import Image from "next/image";
import { Inter } from "next/font/google";
import CustomNavbar from "@/components/Navbar";
import PageWrapper from "@/components/PageWrapper";
import Footer from "@/components/Footer";
import Assets from "@/components/Asset/Assets";
import Stats from "@/components/Stats";
import { Button } from "@nextui-org/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <CustomNavbar />

      <PageWrapper>
        <div className="max-w-5xl mx-auto px-4 sm:px-5">
          <div className="pt-16 md:pt-20">
            {/* Section header */}
            <div className="text-center pb-12 md:pb-20">
              {/* <div className="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-3">
                Integrations & Add-ons
              </div> */}
              <h1 className="h1 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">
                Buy and trade any asset,
                <br /> fully onchain.
              </h1>
              <div className="max-w-3xl mx-auto">
                <p className="text-lg text-slate-400">
                  Assetly brings in real world assets to the blockchain. Trade
                  and invest in real estate, stocks, commodities and more, all
                  on the blockchain.
                </p>
              </div>

              <div className="flex mt-10 justify-center items-center gap-3">
                <Button>Learn more</Button>
                <Button>Get Started</Button>
              </div>
            </div>
            <Assets />
            <Stats />
          </div>
        </div>
      </PageWrapper>
      <Footer />
    </>
  );
}
