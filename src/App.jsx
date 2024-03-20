import { useState } from "react";
import { Navigationbar, Hero, About } from "./components";
function App() {
  return (
    <>
      <Navigationbar />

      <Hero />
      <About />
    </>
  );
}

export default App;
