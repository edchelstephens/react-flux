import React from "react";
import AboutPage from "./AboutPage";
import HomePage from "./HomePage";

function App() {
  const route = window.location.pathname;

  let component = <HomePage />;
  if (route === "/about") component = <AboutPage />;

  return component;
}

export default App;
