import React from "react";
import { SearchForm } from "../../components/FlightsSearchingForm/searchForm";
import "./index.scss";

export const Home = () => {
  return (
    <div className="home--container">
      <h4 className="home--container_title">Online Flight Booking</h4>
      <div className="home--container__search--container">
        <h1 className="mb-5 text-white">Best Day To Book Flights</h1>
        <div className="home--container__search--container__Search--form">
          <SearchForm />
        </div>
      </div>
    </div>
  );
};
