import React from "react";
import "./App.css";
import CounterDemo from "./components/ErrorBoundaries/CounterDemo";
import ErrorBoundaries from "./components/ErrorBoundaries/ErrorBoundaries";
import ErrorDemo from "./components/ErrorBoundaries/ErrorDemo";

function App() {
  return (
    <div className="App">
      <ErrorBoundaries>
        <CounterDemo />
      </ErrorBoundaries>
      <ErrorBoundaries>
        <ErrorDemo name="Error Boundary" />
      </ErrorBoundaries>
    </div>
  );
}

export default App;
