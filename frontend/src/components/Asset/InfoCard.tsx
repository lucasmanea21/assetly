import React, { useState } from "react";
import {
  Card,
  Button,
  Input,
  Spacer,
  Text,
  Tab,
  Slider,
  Tabs,
} from "@nextui-org/react";

type AssetData = {
  name: string;
  symbol: string;
  price: number;
  volume: number;
};

const InfoCard = ({ assetData }: { assetData: AssetData }) => {
  const [quantity, setQuantity] = useState("");
  const [leverage, setLeverage] = useState(2);
  const [selectedTrade, setSelectedTrade] = useState("Long");

  // Dummy function to simulate trade execution
  const executeTrade = (type: string) => {
    console.log(`${type} ${quantity} units of ${assetData.symbol}`);
    // Here you would include the logic to call your backend service to execute the trade
  };

  return (
    <Card className="bg-opacity-50 shadow-md rounded-lg p-6 w-[35%]">
      <Tabs className="flex space-x-1 rounded-lg  p-1">
        <Tab value="market">Market</Tab>
        <Tab value="limit">Limit</Tab>
        <Tab value="stop">Stop</Tab>
      </Tabs>
      <Spacer y={1} />
      <Tabs className="w-full">
        <Tab color="success" onClick={() => setSelectedTrade("Long")}>
          Long {assetData.symbol}
        </Tab>
        <Tab color="error" onClick={() => setSelectedTrade("Short")}>
          Short {assetData.symbol}
        </Tab>
      </Tabs>
      <Spacer y={1} />
      <Input
        label="Price"
        bordered
        fullWidth
        size="lg"
        value={assetData.price.toLocaleString()}
        readOnly
      />
      <Spacer y={0.5} />
      <Input
        label="Collateral"
        bordered
        fullWidth
        size="lg"
        placeholder="0.00 USDC"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <Spacer y={1} />
      <Slider
        size="md"
        step={1}
        color="foreground"
        label="Leverage"
        showSteps={true}
        maxValue={25}
        minValue={1}
        defaultValue={1}
        className="max-w-md my-3"
      />
      <Spacer y={1} />
      <Button
        flat
        color="primary"
        size="lg"
        onClick={() => executeTrade("Long")}
      >
        {selectedTrade} {assetData.symbol}
      </Button>
    </Card>
  );
};

export default InfoCard;
