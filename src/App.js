import Home from "./routes/Home";
import Single from "./routes/Single/Single";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/single" element={<Single />}></Route>
      </Routes>
    </>
  );
}

export default App;
