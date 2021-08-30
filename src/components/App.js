import React from "react";
import AboutPage from "./AboutPage";
import HomePage from "./HomePage";
import Header from "./common/Header";
import CoursesPage from "./CoursesPage";

function App() {
  function getPage() {
    const route = window.location.pathname;
    console.log(route);
    let component = <HomePage />;
    if (route === "/courses") component = <CoursesPage />;
    if (route === "/about") component = <AboutPage />;

    return component;
  }
  return (
    <div className="container-fluid">
      <Header />
      {getPage()}
    </div>
  );
}

export default App;
