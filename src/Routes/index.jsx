import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

import Navbar from "../Components/Navbar";
import News from "../Components/News";

const Routes = () => {

  const country = "";
  const pageSize = 5;
  const apiKey = "b0f34e66f5bc44b098c1ff50655cd375"

  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar
          height={3}
          color="lightGray"
          progress={progress}
        />
        <Switch>
          <Route exact path="/">
            <News apiKey={apiKey} setProgress={setProgress} key="general" pageSize={pageSize} country={country} category="general" />
          </Route>
          <Route exact path="/business">
            <News apiKey={apiKey} setProgress={setProgress} key="business" pageSize={pageSize} country={country} category="business" />
          </Route>
          <Route exact path="/entertainment">
            <News apiKey={apiKey} setProgress={setProgress} key="entertainment" pageSize={pageSize} country={country} category="entertainment" />
          </Route>
          <Route exact path="/general">
            <News apiKey={apiKey} setProgress={setProgress} key="general" pageSize={pageSize} country={country} category="general" />
          </Route>
          <Route exact path="/health">
            <News apiKey={apiKey} setProgress={setProgress} key="health" pageSize={pageSize} country={country} category="health" />
          </Route>
          <Route exact path="/science">
            <News apiKey={apiKey} setProgress={setProgress} key="science" pageSize={pageSize} country={country} category="science" />
          </Route>
          <Route exact path="/sports">
            <News apiKey={apiKey} setProgress={setProgress} key="sports" pageSize={pageSize} country={country} category="sports" />
          </Route>
          <Route exact path="/technology">
            <News apiKey={apiKey} setProgress={setProgress} key="technology" pageSize={pageSize} country={country} category="technology" />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default Routes;
