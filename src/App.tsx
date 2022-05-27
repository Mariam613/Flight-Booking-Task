import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/css/bootstrap-reboot.min.css";
import "antd/dist/antd.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./layout/Home";
import { SearchResult } from "./layout/SearchResult";
import { SuceesPurchase } from "./components/PurchasingTicketForm/successPurchase";
import { PurchasingTicket } from "./layout/PurchasingTicket";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/searchResult" component={SearchResult} />
        <Route exact path="/purchasTicket" component={PurchasingTicket} />
        <Route exact path="/sucess" component={SuceesPurchase} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
