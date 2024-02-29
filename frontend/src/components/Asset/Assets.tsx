import { AssetCard } from "./AssetCard";
import SeeAll from "./SeeAll";
import Slide from "./Slide";
import Topbar from "./Topbar";
import { items } from "./data";

const Assets = () => {
  return (
    <section>
      <div className="max-w-8xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* <Topbar /> */}

          {/* Cards */}
          <div>
            <Slide items={items} id="Stocks" />
            <Slide
              items={items}
              id="Derivatives"
              title="Derivatives & Commodities"
            />
            <Slide items={items} id="Crypto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Assets;
