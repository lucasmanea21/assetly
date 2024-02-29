import React from "react";
import TradingViewWidget from "../Trading/TradingViewWidget";
import { Card } from "@nextui-org/react";
import InfoCard from "./InfoCard";
import ActivityCard from "./ActivityCard";

const assetData = {
  name: "Bitcoin",
  symbol: "BTC",
  price: "10,000",
  volume: "5,000",
};

const Asset = () => {
  return (
    <div className="w-full justify-self-center flex items-center justify-center">
      <div className="flex flex-col gap-8 justify-self-center w-[90%] mt-10">
        <div className="flex w-full gap-8">
          <Card className="w-[65%] bg-opacity-50 flex items-center justify-center p-10">
            <TradingViewWidget />
          </Card>
          <InfoCard assetData={assetData} />
        </div>

        <ActivityCard />
      </div>
    </div>
  );
};

export default Asset;
