import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Home from "../Pages/Home";
import Demo from "../Pages/Demo";
import KeyFeatures from "../Pages/KeyFeature";
import Pricing from "../Pages/Pricing";
import Testimonials from "../Pages/Testimonials";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/features" exact component={KeyFeatures} />
          <Route path="/pricing" exact component={Pricing} />
          <Route path="/testimonials" exact component={Testimonials} />
          <Route path="/demo" exact component={Demo} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
