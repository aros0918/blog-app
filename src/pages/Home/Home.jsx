import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Blogs from "../../components/Blogs/Blogs";
import "./Home.scss";

const Home = ({ blogs }) => {
  const navigate = useNavigate();

  return (
    <main className="app__home-main">
      <h1 className="app__home-main_title">All blogs</h1>
      {blogs < 1 && (
        <div className="app__home-main_navigate">
          <button onClick={() => navigate("/newblog")}>
            Click here to add a blog
          </button>
        </div>
      )}
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
