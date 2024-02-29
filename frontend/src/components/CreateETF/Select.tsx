import React, { useState } from "react";
import {
  Select,
  SelectItem,
  Avatar,
  Chip,
  SelectedItems,
} from "@nextui-org/react";
import { items as assets } from "../Asset/data";

type Asset = {
  id: string;
  name: string;
  symbol: string;
  img: any;
};

const SelectAssets = ({ setSelectedAssets }: any) => {
  return (
    <Select
      items={assets}
      label="Selected Assets"
      variant="bordered"
      isMultiline={true}
      selectionMode="multiple"
      placeholder="Choose an asset to add"
      labelPlacement="outside"
      classNames={{
        base: "max-w-xs",
        trigger: "min-h-unit-12 py-2",
      }}
      onSelectionChange={(items: SelectedItems<Asset>) => {
        setSelectedAssets(items);
      }}
      renderValue={(items: SelectedItems<Asset>) => {
        return (
          <div className="flex flex-wrap gap-2 ">
            {items.map((item) => (
              <Chip key={item.key}>{item.data.name}</Chip>
            ))}
          </div>
        );
      }}
    >
      {(asset: Asset) => (
        <SelectItem key={asset.name} textValue={asset.name}>
          <div className="flex gap-2 items-center">
            <Avatar
              alt={asset.name}
              className="flex-shrink-0"
              size="sm"
              //   icon={asset.img}
            />
            <div className="flex flex-col">
              <span className="text-small">{asset.name}</span>
            </div>
          </div>
        </SelectItem>
      )}
    </Select>
  );
};

export default SelectAssets;
