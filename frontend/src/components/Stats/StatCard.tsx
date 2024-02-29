import Image from "next/image";
import Link from "next/link";
import Star from "../../../public/images/star.svg";

type CardProps = {
  item: {
    name: string;
    number: string;
  };
  index: number;
};

const StatCard = ({ item, index }: CardProps) => {
  return (
    <div
      key={index}
      className="h-auto bg-gradient-to-tr from-slate-800 to-slate-800/25 rounded-3xl border border-slate-800 hover:border-slate-700/60 transition-colors group relative"
    >
      <div className="flex flex-col p-5 h-full justify-between">
        <div className="flex items-center space-x-3 mb-3">
          <div className="font-semibold text-white hover:text-slate-200 transition-colors">
            {item.name}
          </div>
        </div>
        <div className="text-4xl font-bold text-slate-400 mb-3">
          {item.number}
        </div>
      </div>
    </div>
  );
};

export default StatCard;
