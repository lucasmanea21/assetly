import { Pagination, Selection } from "@nextui-org/react";
import React from "react";

const BottomContent = ({
  page,
  pages,
  setPage,
  selectedKeys,
  items,
  hasSearchFilter,
}: {
  page: number;
  pages: number;
  setPage: (page: number) => void;
  selectedKeys: Selection;
  items: any[];
  hasSearchFilter: boolean;
}) => {
  return (
    <div className="py-2 px-2 flex justify-between items-center">
      <Pagination
        showControls
        classNames={{
          cursor: "bg-foreground text-background",
        }}
        color="default"
        isDisabled={hasSearchFilter}
        page={page}
        total={pages}
        variant="light"
        onChange={setPage}
      />
      <span className="text-small text-default-400">
        {selectedKeys === "all"
          ? "All items selected"
          : `${selectedKeys.size} of ${items.length} selected`}
      </span>
    </div>
  );
};

export default BottomContent;
