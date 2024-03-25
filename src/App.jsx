import { useState } from "react";
import { Navigationbar, Hero, About, Slider } from "./components";

function App() {
  return (
    <div className="scroll-smooth">
      <Navigationbar />
      <Hero />
      <Slider />
      <About />
    </div>
  );
}

export default App;
