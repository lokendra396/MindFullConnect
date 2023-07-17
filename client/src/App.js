import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import "./App.css";
import Home from "./Pages/Home";
import Community from "./Pages/Community";
import Education from "./Pages/Education";
import Music from "./Pages/Music";
import Contact from "./Pages/Contact";
import Helplines from "./Pages/Helplines";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { Toaster } from "react-hot-toast";
import PrivateRoute from "./components/Routes/Private";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/community" element={<PrivateRoute />}>
          <Route path="" element={<Community />} />
        </Route>
        <Route path="/music" element={<PrivateRoute />}>
          <Route path="" element={<Music />} />
        </Route>
        <Route path="/helplines" element={<PrivateRoute />}>
          <Route path="" element={<Helplines />} />
        </Route>
        <Route path="/contact" element={<PrivateRoute />}>
          <Route path="" element={<Contact />} />
        </Route>
        <Route path="/education" element={<PrivateRoute />}>
          <Route path="" element={<Education />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
