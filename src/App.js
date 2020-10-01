import React from "react";
import { H1, H2 } from "./Styles";
import CardContainer from "./CardContainer";

import "./App.css";

function App() {
  return (
    <div>
      <H1 initial={{ y: -100 }} animate={{ y: 0, transition: { delay: 1 } }}>
        {" "}
        Icon Shop
      </H1>
      <H2 initial={{ x: -1000 }} animate={{ x: 0, transition: { delay: 1 } }}>
        Hover over the cards to see the motion magic
      </H2>
      <CardContainer />
    </div>
  );
}

export default App;
