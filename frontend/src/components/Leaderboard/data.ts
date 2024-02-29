import React from "react";

const columns = [
  { name: "#", uid: "id", sortable: true },
  { name: "POOL NAME", uid: "poolName", sortable: true },
  { name: "TVL", uid: "tvl", sortable: true },
  { name: "VOLUME 24H", uid: "volume24h", sortable: true },
  { name: "VOLUME 7D", uid: "volume7d", sortable: true },
  { name: "ACTIONS", uid: "actions" },
];

const statusOptions = [
  { name: "Active", uid: "active" },
  { name: "Paused", uid: "paused" },
  { name: "Vacation", uid: "vacation" },
];

const users = [
  {
    id: 1,
    poolName: "ETH/USDT",
    tvl: 5000000,
    volume24h: 500000,
    volume7d: 3500000,
    status: "active",
  },
  {
    id: 2,
    poolName: "BTC/ETH",
    tvl: 4000000,
    volume24h: 400000,
    volume7d: 2800000,
    status: "active",
  },
  {
    id: 3,
    poolName: "DAI/USDC",
    tvl: 3000000,
    volume24h: 300000,
    volume7d: 2100000,
    status: "active",
  },
  {
    id: 4,
    poolName: "LINK/ETH",
    tvl: 2500000,
    volume24h: 250000,
    volume7d: 1750000,
    status: "active",
  },
  {
    id: 5,
    poolName: "AAVE/ETH",
    tvl: 1000000,
    volume24h: 100000,
    volume7d: 700000,
    status: "active",
  },
  // Add more pool entries as needed
];

export { columns, users, statusOptions };
