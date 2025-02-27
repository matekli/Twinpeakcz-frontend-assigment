import { Loader2 } from "lucide-react";
import CoinCard from "../components/CoinCard";
import CoinDataTable from "../components/CoinDataTable";
import { useGetMarketCoinsInfiniteQuery } from "../services/coin";
import { useEffect, useRef } from "react";

const CryptoOverwiewPage = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  const {
    data: coins,
    isLoading,
    fetchNextPage,
    isFetching,
  } = useGetMarketCoinsInfiniteQuery(
    {
      vs_currency: "usd",
      per_page: 7,
    },
    { initialPageParam: 1 }
  );

  // Automatically scrolls to the bottom when new coins are loaded with a smooth transition
  useEffect(() => {
    if (contentRef.current) {
      window.scrollTo({
        top: contentRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [coins]);

  return (
    <div ref={contentRef} className="overflow-visible">
      {!isLoading && coins ? (
        <div className="p-10 flex flex-col justify-center mx-auto my-5">
          <CoinDataTable
            coins={coins.pages.flat()}
            classname="text-[clamp(0.75rem,1vw,2rem)] hidden md:table"
          />
          <div className="md:hidden">
            {coins.pages.flat().map((coin) => (
              <CoinCard key={coin.id} coin={coin} />
            ))}
          </div>

          {!isFetching ? (
            <button
              disabled={isLoading}
              onClick={() => fetchNextPage()}
              className="bg-[#121219] hover:bg-[#1d1d23] py-4 border border-[#323238] rounded-[15px] text-beige font-bold"
            >
              Load more data
            </button>
          ) : (
            <div className="flex justify-center mt-10 w-full">
              <Loader2 className="animate-spin" size={48} />
            </div>
          )}
        </div>
      ) : (
        <div className="flex justify-center mt-10 w-full">
          <Loader2 className="animate-spin" size={48} />
        </div>
      )}
    </div>
  );
};

export default CryptoOverwiewPage;
