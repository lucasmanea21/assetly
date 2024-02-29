import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, Textarea, Select } from "@nextui-org/react";
import SelectAssets from "./Select";
import AssetCard from "./AssetCard";

const CreateETFCard = () => {
  const { register, handleSubmit, watch } = useForm();
  const [selectedAssets, setSelectedAssets] = useState([]);

  const onSubmit = (data) => {
    // Send the data to the backend
    console.log(data);
  };

  // This is just an example, replace it with your actual stocks data
  const stocks = [
    { name: "Apple", value: "AAPL" },
    { name: "Google", value: "GOOGL" },
    { name: "Microsoft", value: "MSFT" },
    // ... more stocks
  ];

  return (
    <div className="p-8 max-w-3xl w-full my-16  bg-gradient-to-tr  from-slate-800 to-slate-800/25 rounded-3xl border border-slate-800 hover:border-slate-700/60 transition-colors group relative">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <h2 className="text-xl text-white font-bold">Create Your Collection</h2>

        <div>
          <Input
            clearable
            bordered
            fullWidth
            size="lg"
            placeholder="Name"
            {...register("name", { required: true })}
          />
          {/* {errors.name && (
            <span className="text-red-500">This field is required</span>
          )} */}
        </div>

        <div>
          <Textarea
            bordered
            fullWidth
            placeholder="Description"
            {...register("description", { required: true })}
          />
          {/* {errors.description && (
            <span className="text-red-500">This field is required</span>
          )} */}
        </div>

        <div>
          <SelectAssets setSelectedAssets={setSelectedAssets} />
        </div>

        <Button auto flat type="submit" className="mt-4">
          Create Collection
        </Button>
      </form>
    </div>
  );
};

export default CreateETFCard;
