import React from "react";

const AssetCard = ({ name }: { name: string }) => {
  return (
    <div className="bg-gradient-to-tr  from-slate-800 to-slate-800/25 rounded-3xl border border-slate-800 hover:border-slate-700/60 transition-colors group relative">
      {name}
    </div>
  );
};

export default AssetCard;
