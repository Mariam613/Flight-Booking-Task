import { Card, Col, Row, Button } from "antd";
import React, { useCallback } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { Flight } from "../../models/flight";
import "./flightsCard.scss";
type FlightCardProps = {
  availableFlight: Flight;
};
export const FlightCard: React.FC<FlightCardProps> = ({
  availableFlight,
}: FlightCardProps) => {
  const { leavingFrom, goingTo, flightDate, departureTime, arrivalTime, fare } =
    availableFlight;
  const { pathname } = useLocation();
  const history = useHistory();
  //   console.log(availableFlight);

  const navigateToPurchaseTicket = useCallback(() => {
    history.push({
      pathname: "/purchasTicket",
      state: { selectedFlight: availableFlight },
    });
  }, [availableFlight, history]);
  return (
    <Card className={"flight--card pt-0 mt-3"}>
      <Row gutter={50} justify="space-between">
        <Col xs={{ span: 12, offset: 1 }}>
          <h6>{flightDate}</h6>
          <h6>
            {departureTime} - {arrivalTime}{" "}
          </h6>
          <h6>
            {leavingFrom.name} <span className="ml-4 mr-3">-</span>{" "}
            {goingTo.name}
          </h6>
        </Col>
        <Col
          xs={{ span: 9, offset: 1 }}
          xl={{ span: 6, offset: 1 }}
          className="flight--card__fare--col"
        >
          <h5 className="text-center">$ {fare}</h5>
          {pathname !== "/purchasTicket" && (
            <Button
              type="primary"
              className="mb-3"
              onClick={navigateToPurchaseTicket}
            >
              Book a Ticket
            </Button>
          )}
        </Col>
      </Row>
    </Card>
  );
};
