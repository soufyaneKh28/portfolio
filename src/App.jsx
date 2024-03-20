import { useState } from "react";
import { Navigationbar, Hero, About } from "./components";
function App() {
  return (
    <div className="scroll-smooth">
      <Navigationbar />

      <Hero />
      <About />
    </div>
  );
}

export default App;
