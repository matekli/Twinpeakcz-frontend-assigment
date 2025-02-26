export type Coin = {
  id: string;
  symbol: string;
  current_price: number;
  market_cap: number;
  total_volume: number;
  last_updated: Date;
  price_change_percentage_24h: number;
  image: string;
};
