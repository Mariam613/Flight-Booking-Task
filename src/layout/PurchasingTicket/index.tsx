import React from "react";
import { Layout } from "antd";
import { Content } from "antd/lib/layout/layout";
import "./index.scss";
import { Flight } from "../../models/flight";
import { PurchasingTicketForm } from "../../components/PurchasingTicketForm/purchasingTicketForm";
import { Nav } from "../Navbar/navbar";

type SearchResultProps = {
  location: {
    state: {
      selectedFlight: Flight;
    };
  };
};
export const PurchasingTicket = ({ location }: SearchResultProps) => {
  const {
    state: { selectedFlight },
  } = location;

  return (
    <Layout>
      <Nav />
      <Content className="purchase--ticket">
        <PurchasingTicketForm availableFlight={selectedFlight} />
      </Content>
    </Layout>
  );
};
