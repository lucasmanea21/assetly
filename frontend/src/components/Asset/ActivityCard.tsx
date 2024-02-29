import React from "react";
import {
  Card,
  Table,
  Avatar,
  Link,
  TableColumn,
  TableHeader,
  TableBody,
  TableCell,
  TableRow,
} from "@nextui-org/react";

// Dummy data for past trades
const trades = [
  {
    username: "user1",
    avatar: "https://i.pravatar.cc/150?u=user1",
    asset: "BTC",
    type: "long",
    price: "40,000",
    amount: "0.5",
  },
  {
    username: "user2",
    avatar: "https://i.pravatar.cc/150?u=user2",
    asset: "BTC",
    type: "short",
    price: "42,000",
    amount: "1.0",
  },
  {
    username: "user3",
    avatar: "https://i.pravatar.cc/150?u=user3",
    asset: "BTC",
    type: "long",
    price: "41,500",
    amount: "0.25",
  },
  // Add more trades as needed
];

const ActivityCard = () => {
  return (
    <Card className="bg-opacity-50 shadow rounded-lg p-4">
      <h3 className="mb-4">Trade Activity</h3>
      <Table
        aria-label="Example table with static content"
        css={{
          height: "auto",
          minWidth: "100%",
        }}
      >
        <TableHeader>
          <TableColumn>USER</TableColumn>
          <TableColumn>ASSET</TableColumn>
          <TableColumn>TYPE</TableColumn>
          <TableColumn>PRICE</TableColumn>
          <TableColumn>AMOUNT</TableColumn>
        </TableHeader>
        <TableBody>
          {trades.map((trade, index) => (
            <TableRow key={index}>
              <TableCell>
                <Link
                  href={`/profile/${trade.username}`}
                  color="primary"
                  css={{ d: "flex", alignItems: "center" }}
                >
                  <Avatar src={trade.avatar} size="sm" />
                  <p b css={{ ml: "$5" }}>
                    {trade.username}
                  </p>
                </Link>
              </TableCell>
              <TableCell>{trade.asset}</TableCell>
              <TableCell
                css={{ color: trade.type === "long" ? "$success" : "$error" }}
              >
                {trade.type.toUpperCase()}
              </TableCell>
              <TableCell>${trade.price}</TableCell>
              <TableCell>
                {trade.amount} {trade.asset}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default ActivityCard;
