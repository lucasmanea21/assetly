import Image from "next/image";
import Link from "next/link";
import Star from "../../../public/images/star.svg";

type CardProps = {
  item: {
    category: string;
    img: string;
    name: string;
    featured: boolean;
    link: string;
    description: string;
    price: string;
    volume: string;
    change24h: string;
  };
  index: number;
};

export function AssetCard({ item, index }: CardProps) {
  return (
    <div
      key={index}
      className="swiper-slide h-auto bg-gradient-to-tr from-slate-800 to-slate-800/25 rounded-3xl border border-slate-800 hover:border-slate-700/60 transition-colors group relative"
    >
      <div className="flex flex-col p-5 h-full justify-between">
        <div className="flex items-center space-x-3 mb-3">
          <div className="relative">
            <Image src={item.img} width="40" height="40" alt={item.name} />
            {item.featured && (
              <Image
                className="absolute top-0 -right-1"
                src={Star}
                width={16}
                height={16}
                alt="Star"
                aria-hidden="true"
              />
            )}
          </div>
          <Link
            href={item.link}
            className="font-semibold text-white hover:text-slate-200 transition-colors"
          >
            {item.name}
          </Link>
        </div>
        <div className="text-sm text-slate-400 mb-3">{item.description}</div>
        <div className="flex items-center justify-between">
          <div className="text-sm font-medium text-white">
            Price: {item.price}
          </div>
          <div className="text-sm font-medium text-white">
            Volume: {item.volume}
          </div>
          <div
            className={`text-sm font-medium ${
              item.change24h.startsWith("-") ? "text-red-500" : "text-green-500"
            }`}
          >
            {item.category !== "etfs"
              ? `24h: ${item.change24h}`
              : `YTD: ${item.change24h}`}
          </div>
        </div>
      </div>
    </div>
  );
}
