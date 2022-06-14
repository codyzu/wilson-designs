import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./Home";

function App() {
  console.log("base:", import.meta.env.BASE_URL);
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
