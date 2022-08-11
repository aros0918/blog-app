import React from "react";
import { Link } from "react-router-dom";
import Blogs from "../../components/Blogs/Blogs";
import "./Home.scss";

const Home = ({ blogs }) => {
  return (
    <main className="app__home-main">
      <h1 className="app__home-main_title">All blogs</h1>
      {blogs &&
        blogs.map((blog) => (
          <Link key={blog.id} to={`/blog/${blog.id}`}>
            <Blogs blog={blog} />
          </Link>
        ))}
    </main>
  );
};

export default Home;
