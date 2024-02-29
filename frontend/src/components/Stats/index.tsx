import React from "react";
import StatCard from "./StatCard";
import { Button } from "@nextui-org/react";

const Stats = () => {
  return (
    <div>
      {/* Section header */}
      <div className="text-left pb-12 md:pb-20 justify-start">
        {/* <div className="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-3">
                Integrations & Add-ons
              </div> */}
        <h1 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">
          Buy and trade any asset,
          <br /> fully onchain.
        </h1>
        <div className="max-w-3xl">
          <p className="text-lg text-slate-400">
            Assetly brings in real world assets to the blockchain. Trade and
            invest in real estate, stocks, commodities and more, all on the
            blockchain.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
        <StatCard
          item={{ name: "Total Value Locked", number: "2.3B" }}
          index={0}
        />

        <StatCard item={{ name: "Total Users", number: "12.3M" }} index={1} />

        <StatCard item={{ name: "Total Volume", number: "2.3B" }} index={2} />

        <StatCard
          item={{ name: "Total Transactions", number: "12.3M" }}
          index={3}
        />
      </div>
    </div>
  );
};

export default Stats;
