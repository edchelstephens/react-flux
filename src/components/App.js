import React from "react";
import AboutPage from "./AboutPage";
import HomePage from "./HomePage";
import Header from "./common/Header";

function App() {
  function getPage() {
    const route = window.location.pathname;
    let component = <HomePage />;
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
