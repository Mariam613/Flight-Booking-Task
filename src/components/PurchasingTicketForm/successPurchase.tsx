import React from "react";
import { Result, Button } from "antd";

export const SuceesPurchase: React.FC = () => (
  <Result
    status="success"
    title="Successfully Purchased a Ticket"
    extra={[
      <Button key="buy">
        <a href="/">Go to Search Flights Page</a>
      </Button>,
    ]}
  />
);
