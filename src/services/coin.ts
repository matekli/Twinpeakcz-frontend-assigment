import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Coin } from "../types/types";

interface MarketCoinsParams {
  vs_currency: string;
  per_page: number;
}

export const coinApi = createApi({
  reducerPath: "coins",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.coingecko.com/api/v3/" }),
  endpoints: (build) => ({
    getMarketCoins: build.infiniteQuery<Coin[], MarketCoinsParams, number>({
      infiniteQueryOptions: {
        initialPageParam: 1,
        getNextPageParam: (
          lastPage,
          allPages,
          lastPageParam,
          allPageParams
        ) => {
          return lastPageParam + 1;
        },
      },
      query: ({ queryArg, pageParam }) => {
        return `/coins/markets?vs_currency=${queryArg.vs_currency}&per_page=${queryArg.per_page}&page=${pageParam}`;
      },
    }),
  }),
});

export const { useGetMarketCoinsInfiniteQuery } = coinApi;
