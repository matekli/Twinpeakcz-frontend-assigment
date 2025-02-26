// DataTable component is responsible for rendering a table with dynamic columns and data.
// It uses `@tanstack/react-table` for managing table data and rendering.

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { cn } from "../utils/utils";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  classname?: string;
}
const DataTable = <TData, TValue>({
  columns,
  data,
  classname,
}: DataTableProps<TData, TValue>) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table
      className={cn(
        "whitespace-nowrap border-separate border-spacing-x-0 border-spacing-y-1",
        classname
      )}
    >
      <thead>
        {table.getHeaderGroups().map((headerGroup) => {
          return (
            <tr
              key={headerGroup.id}
              className="bg-gradient-to-b from-[#17171c] to-[#111118] text-[#4d4d53]"
            >
              {headerGroup.headers.map((header) => {
                return (
                  <th
                    key={header.id}
                    colSpan={header.colSpan}
                    className="first:rounded-tl-3xl last:rounded-tr-3xl px-[1%] py-2 text-left border-t border-b first:border-l last:border-r border-[#323238]"
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                );
              })}
            </tr>
          );
        })}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr
            key={row.id}
            className="bg-[#160f13] hover:bg-[#1d1d23] text-[#847164]"
          >
            {row.getVisibleCells().map((cell) => {
              return (
                <td
                  key={cell.id}
                  className="first:rounded-bl-2xl last:rounded-br-2xl px-[1%] py-2 text-left"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
