/* eslint-disable no-unused-vars */
import React from "react";
// eslint-disable-next-line no-unused-vars
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import { logo } from "./assets";
import { Home, CreatePost } from "./pages";

const App = () => (
  <BrowserRouter>
    <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
      <Link to="/">
        <img src={logo} alt="logo" className="w-28 object-contain" />
      </Link>

      <Link
        to="/create-post"
        className="font-inter font-medium bg-[#836FFF] text-white px-4 py-2 rounded-md"
      >
        Create
      </Link>
    </header>
    <main className="sm:p-8 px-4 py-8 w-full bg-[#F0F3FF] min-h-[calc(100vh-73px)]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </main>
  </BrowserRouter>
);

export default App;
