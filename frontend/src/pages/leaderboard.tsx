import LeaderboardTable from "@/components/Leaderboard/Table";
import CustomNavbar from "@/components/Navbar";
import PageWrapper from "@/components/PageWrapper";
import React from "react";

const Leaderboard = () => {
  return (
    <>
      <CustomNavbar />
      <PageWrapper>
        <div className="w-full flex justify-center">
          <div className="w-[80%] mb-20 mt-12 bg-gray-800 bg-opacity-40 justify-self-center">
            <LeaderboardTable />
          </div>
        </div>
      </PageWrapper>
    </>
  );
};

export default Leaderboard;
