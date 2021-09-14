import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from "../Components/Navbar";
import News from "../Components/News";

class Routes extends Component {
  constructor() {
    super()
    this.state = {
      country: "us",
      pageSize: 6,
    }
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <News key="general" pageSize={this.state.pageSize} country={this.state.country} category="general" />
            </Route>
            <Route exact path="/business">
              <News key="business" pageSize={this.state.pageSize} country={this.state.country} category="business" />
            </Route>
            <Route exact path="/entertainment">
              <News key="entertainment" pageSize={this.state.pageSize} country={this.state.country} category="entertainment" />
            </Route>
            <Route exact path="/general">
              <News key="general" pageSize={this.state.pageSize} country={this.state.country} category="general" />
            </Route>
            <Route exact path="/health">
              <News key="health" pageSize={this.state.pageSize} country={this.state.country} category="health" />
            </Route>
            <Route exact path="/science">
              <News key="science" pageSize={this.state.pageSize} country={this.state.country} category="science" />
            </Route>
            <Route exact path="/sports">
              <News key="sports" pageSize={this.state.pageSize} country={this.state.country} category="sports" />
            </Route>
            <Route exact path="/technology">
              <News key="technology" pageSize={this.state.pageSize} country={this.state.country} category="technology" />
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default Routes;
