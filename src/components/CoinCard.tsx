import { useState } from "react";
import { Coin } from "../types/types";
import { formatDate } from "../utils/converDate";
import { faSort } from "@fortawesome/free-solid-svg-icons/faSort";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ChangeIndicator from "./ChangeIndicator";

interface CoinCardProps {
  coin: Coin;
}
const CoinCard = ({ coin }: CoinCardProps) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  return (
    <div className="w-auto bg-gradient-to-b from-[#17171c] to-[#111118] mb-4 py-2 rounded-3xl border border-[#323238]">
      <div className="py-4">
        <div className="px-4">
          <div className="flex justify-between w-full">
            <p className="text-lg font-semibold">{"$" + coin.current_price}</p>
            <button
              className={`${
                isExpanded ? "bg-[#ed1d49]" : "bg-[#4d4d53]"
              } py-1 px-2 rounded-lg`}
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <FontAwesomeIcon icon={faSort} />
            </button>
          </div>

          <p className="text-[#4d4d53]">{formatDate(coin.last_updated)}</p>
        </div>
      </div>

      {isExpanded && (
        <div className="border-t border-[#323238] px-0 grid grid-cols-[auto,1fr] py-4 gap-y-4">
          <div className="pl-4">
            <p className="text-[#4d4d53] pb-2">ID</p>
            <p className="text-[#847164]">{coin.id}</p>
          </div>
          <div className="pl-4">
            <p className="text-[#4d4d53] pb-2">Symbol</p>
            <div className="flex items-center">
              <img src={coin.image} className="mr-2 w-4 h-4" />
              <p className="text-[#847164]">{coin.symbol}</p>
            </div>
          </div>
          <div className="pl-4">
            <p className="text-[#4d4d53] pb-2">Market cap</p>
            <p className="text-[#847164]">{coin.market_cap}</p>
          </div>
          <div className="pl-4">
            <p className="text-[#4d4d53] pb-2">Price change in 24h</p>
            <p className="text-[#847164]">
              <ChangeIndicator change={coin.price_change_percentage_24h} />
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoinCard;
