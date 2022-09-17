import Home from "./routes/Home";
import Single from "./routes/Single/Single";
import Write from "./routes/Write/Write";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/single" element={<Single />}></Route>
        <Route path="/write" element={<Write />}></Route>
      </Routes>
    </>
  );
}

export default App;
