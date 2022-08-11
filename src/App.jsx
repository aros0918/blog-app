import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import BlogDetails from "./components/Blogs/BlogDetails/BlogDetails";
import Navbar from "./components/Navbar/Navbar";
import { Error, Home, NewBlog } from "./pages";

const App = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setBlogs(JSON.parse(localStorage.getItem("blogs")));
  }, []);

  useEffect(() => {
    localStorage.setItem("blogs", JSON.stringify(blogs));
  }, [blogs]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home blogs={blogs} />} />
        <Route
          path="/blog/:blogID"
          element={<BlogDetails blogs={blogs} setBlogs={setBlogs} />}
        />
        <Route
          path="/newblog"
          element={<NewBlog blogs={blogs} setBlogs={setBlogs} />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default App;
