import Image from "next/image";
import Link from "next/link";
import Star from "../../../public/images/star.svg";

type CardProps = {
  item: {
    img: string;
    name: string;
    link: string;
  };
  index: number;
};

const WalletCard = ({ item, index }: CardProps) => {
  return (
    <div
      key={index}
      className="swiper-slide h-auto bg-gradient-to-tr from-slate-800 to-slate-800/25 rounded-xl border border-slate-800 hover:border-slate-700/60 transition-colors group relative"
    >
      <div className="flex  p-2 h-full justify-between">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Image src={item.img} width="40" height="40" alt={item.name} />
          </div>
          <Link
            href={item.link}
            className="font-semibold text-white hover:text-slate-200 transition-colors"
          >
            {item.name}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WalletCard;
