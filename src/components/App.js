import React from "react";
import AboutPage from "./AboutPage";
import HomePage from "./HomePage";
import Header from "./common/Header";
import CoursesPage from "./CoursesPage";
import { Route, Redirect, Switch } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import ManageCoursePage from "./ManageCoursePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => (
  <div className="container-fluid px-0">
    <ToastContainer autoClose={3000} hideProgressBar />
    <Header />
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/courses" exact component={CoursesPage} />
      <Route path="/about" exact component={AboutPage} />
      <Route path="/course/:slug" component={ManageCoursePage} />
      <Route path="/course/" exact component={ManageCoursePage} />
      <Redirect from="/about-page" to="about" />
      <Route component={NotFoundPage} />
    </Switch>
  </div>
);

export default App;
