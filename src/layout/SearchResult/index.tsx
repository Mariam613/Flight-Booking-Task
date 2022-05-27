import React, { useCallback, useEffect, useState } from "react";
import { Card, Empty, Layout, Row, Skeleton } from "antd";
import { Content } from "antd/lib/layout/layout";
import { Flight } from "../../models/flight";
import { FlightCard } from "../../components/Card/flightsCard";
import { Nav } from "../Navbar/navbar";
import { flights } from "../../db.json";
import "./index.scss";

type SearchValues = {
  leavingFrom: string;
  goingTo: string;
  flightDate: string;
};
type SearchResultProps = {
  location: {
    state: {
      searchValues: SearchValues;
    };
  };
};
export const SearchResult = ({ location }: SearchResultProps) => {
  const {
    state: { searchValues },
  } = location;
  const [availableFlights, setAvailableFlights] = useState<Flight[]>();
  const [loading, setLoading] = useState<boolean>();
  const filterFlights = useCallback(
    async (flights: Flight[]) => {
      let searchResult: Flight[] = flights.filter(
        ({ goingTo, leavingFrom, flightDate }) =>
          leavingFrom.name === searchValues.leavingFrom &&
          goingTo.name === searchValues.goingTo &&
          flightDate === searchValues.flightDate
      );
      await setAvailableFlights(searchResult);
      setLoading(false);
    },
    [searchValues]
  );
  useEffect(() => {
    setLoading(true);
    filterFlights(flights);
  }, [searchValues, filterFlights]);

  return (
    <Layout>
      <Nav />
      <Content className={"search--result"}>
        <Card className={"pt-0 mt-3 pb-0"}>
          <Row gutter={50} className="pl-4 pb-0" justify="space-between">
            <h4>Available Flights</h4>
          </Row>
          <p>Compare Prices for nearby days</p>
        </Card>
        <Skeleton loading={loading}>
          <div className="search--result__content">
            {availableFlights?.length === 0 ? (
              <div className="search--result__no--content">
                <Empty
                  className="flex-column"
                  description={
                    <span className="h4">
                      No available Flights in this date
                    </span>
                  }
                ></Empty>
              </div>
            ) : (
              availableFlights?.map((availableFlight, index) => (
                <FlightCard key={index} availableFlight={availableFlight} />
              ))
            )}
          </div>
        </Skeleton>
      </Content>
    </Layout>
  );
};
