import { Input, Tab, Tabs } from "@nextui-org/react";
import React from "react";
import { SearchIcon } from "../Navbar/SearchIcon";

let tabs = [
  {
    id: "pools",
    label: "Pools",
  },
  {
    id: "users",
    label: "Users",
  },
  {
    id: "etfs",
    label: "Etfs",
  },
];

const TopContent = ({
  filterValue,
  setFilterValue,
  onSearchChange,
  users,
  onRowsPerPageChange,
}: {
  filterValue: string;
  setFilterValue: (value: string) => void;
  onSearchChange: (value: string) => void;
  users: any[];
  onRowsPerPageChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex w-full flex-col">
        <Tabs aria-label="Dynamic tabs" items={tabs}>
          {(item) => <Tab key={item.id} title={item.label} />}
        </Tabs>
      </div>
      <div className="flex justify-center py-5 gap-3 items-end">
        <Input
          isClearable
          classNames={{
            base: "w-full sm:max-w-[44%]",
            inputWrapper: "border-1",
          }}
          placeholder="Search by name..."
          size="sm"
          startContent={<SearchIcon className="text-default-300" />}
          value={filterValue}
          variant="bordered"
          onClear={() => setFilterValue("")}
          onValueChange={onSearchChange}
        />
      </div>
      <div className="flex justify-between items-center">
        <span className="text-default-400 text-small">
          Total {users.length} pools
        </span>
        <label className="flex items-center text-default-400 text-small">
          Rows per page:
          <select
            className="bg-transparent outline-none text-default-400 text-small"
            onChange={onRowsPerPageChange}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default TopContent;
