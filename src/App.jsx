import { useState } from "react";
import { Navigationbar, Hero } from "./components";
function App() {
  return (
    <>
      <Navigationbar />

      <Hero />
      <section>
        <div id="About"></div>
      </section>
    </>
  );
}

export default App;
