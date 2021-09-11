import React from "react";
import AboutPage from "./AboutPage";
import HomePage from "./HomePage";
import Header from "./common/Header";
import CoursesPage from "./CoursesPage";
import { Switch, Route } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";

const App = () => (
  <div className="container-fluid">
    <Header />
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/courses" exact component={CoursesPage} />
      <Route path="/about" exact component={AboutPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </div>
);

export default App;
