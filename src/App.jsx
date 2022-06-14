import { useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
