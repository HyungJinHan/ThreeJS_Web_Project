import React from "react";
import * as Component from "./components";

const App = () => {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Component.Navbar />
        <Component.Hero />
      </div>

      <Component.About />
      <Component.Experience />
      <Component.Tech />
      <Component.Works />
      {/* <Component.Feedbacks /> */}

      <div className="relative z-0">
        <Component.Contact />
        <Component.StarsCanvas />
      </div>
    </div>
  );
};

export default App;
