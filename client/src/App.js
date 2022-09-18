import Home from "./routes/Home";
import Single from "./routes/Single/Single";
import Write from "./routes/Write/Write";
import Settings from "./routes/Settings/Settings";
import Login from "./routes/Login/Login";
import Register from "./routes/Register/Register";

import { Route, Routes } from "react-router-dom";

function App() {
  const user = false;
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/post:postId" element={<Single />}></Route>
        <Route path="/write" element={user ? <Write /> : <Login />}></Route>
        <Route
          path="/settings"
          element={user ? <Settings /> : <Login />}
        ></Route>
        <Route path="/login" element={user ? <Home /> : <Login />}></Route>
        <Route
          path="/register"
          element={user ? <Home /> : <Register />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
