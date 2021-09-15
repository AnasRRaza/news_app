import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

import Navbar from "../Components/Navbar";
import News from "../Components/News";

class Routes extends Component {
  constructor() {
    super()
    this.state = {
      country: "us",
      pageSize: 6,
      progress: 0,
    }
  }
  apiKey = "9a631ad58abc4fbbb2f69cb6a48b22ac"
  setProgress = (progress) => {
    this.setState({ progress: progress })
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            height={3}
            color="lightGray"
            progress={this.state.progress}
          />
          <Switch>
            <Route exact path="/">
              <News apiKey={this.apiKey} setProgress={this.setProgress} key="general" pageSize={this.state.pageSize} country={this.state.country} category="general" />
            </Route>
            <Route exact path="/business">
              <News setProgress={this.setProgress} key="business" pageSize={this.state.pageSize} country={this.state.country} category="business" />
            </Route>
            <Route exact path="/entertainment">
              <News apiKey={this.apiKey} setProgress={this.setProgress} key="entertainment" pageSize={this.state.pageSize} country={this.state.country} category="entertainment" />
            </Route>
            <Route exact path="/general">
              <News apiKey={this.apiKey} setProgress={this.setProgress} key="general" pageSize={this.state.pageSize} country={this.state.country} category="general" />
            </Route>
            <Route exact path="/health">
              <News apiKey={this.apiKey} setProgress={this.setProgress} key="health" pageSize={this.state.pageSize} country={this.state.country} category="health" />
            </Route>
            <Route apiKey={this.apiKey} exact path="/science">
              <News setProgress={this.setProgress} key="science" pageSize={this.state.pageSize} country={this.state.country} category="science" />
            </Route>
            <Route apiKey={this.apiKey} exact path="/sports">
              <News setProgress={this.setProgress} key="sports" pageSize={this.state.pageSize} country={this.state.country} category="sports" />
            </Route>
            <Route exact path="/technology">
              <News apiKey={this.apiKey} setProgress={this.setProgress} key="technology" pageSize={this.state.pageSize} country={this.state.country} category="technology" />
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default Routes;
