import Link from "next/link";
import React from "react";

const SeeAll = () => {
  return (
    <Link
      href="/exchange"
      className="text-slate-500 hover:text-slate-400 transition-colors font-medium flex text-sm items-center space-x-1 justify-center "
    >
      <span>See all</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-4 h-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </Link>
  );
};

export default SeeAll;
