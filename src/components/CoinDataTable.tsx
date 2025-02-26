import { ColumnDef } from "@tanstack/react-table";
import { Coin } from "../types/types";
import DataTable from "./data-table";
import { formatDate } from "../utils/converDate";
import ChangeIndicator from "./ChangeIndicator";
import { cn } from "../utils/utils";

interface CoinDataTableProps {
  coins: Coin[];
  classname?: string;
}

const CoinDataTable = ({ coins, classname }: CoinDataTableProps) => {
  const columns: ColumnDef<Coin>[] = [
    {
      accessorKey: "id",
      header: "ID",
      cell: ({ row }) => <p>{row.original.id}</p>,
    },
    {
      accessorKey: "symbol",
      header: "Symbol",
      cell: ({ row }) => (
        <div className="flex items-center">
          <img src={row.original.image} className="mr-2 w-4 h-4" />
          <p>{row.original.symbol}</p>
        </div>
      ),
    },
    {
      accessorKey: "current_price",
      header: "Current price",
      cell: ({ row }) => (
        <p className="text-white">{"$" + row.original.current_price}</p>
      ),
    },
    {
      accessorKey: "market_cap",
      header: "Market cap",
      cell: ({ row }) => <p>{row.original.market_cap}</p>,
    },
    {
      accessorKey: "total_volume",
      header: "Total volume",
      cell: ({ row }) => <p>{row.original.total_volume}</p>,
    },
    {
      accessorKey: "last_updated",
      header: "Last updated",
      cell: ({ row }) => (
        <p className="text-[#4d4d53]">
          {formatDate(row.original.last_updated)}
        </p>
      ),
    },
    {
      accessorKey: "price_change_24h",
      header: "Price change in 24 hours",
      cell: ({ row }) => (
        <ChangeIndicator change={row.original.price_change_percentage_24h} />
      ),
    },
  ];

  return (
    <>
      <DataTable classname={cn(classname)} data={coins} columns={columns} />
    </>
  );
};

export default CoinDataTable;
