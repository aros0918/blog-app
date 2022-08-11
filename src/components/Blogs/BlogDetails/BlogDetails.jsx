import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../Blogs.scss";

const BlogDetails = ({ blogs, setBlogs }) => {
  const navigate = useNavigate();

  const { blogID } = useParams();

  const blog = blogs.find((blog) => blog.id.toString() === blogID);

  const { title, body, author } = blog || {};

  const deleteBlog = () => {
    const currentBlogs = blogs.filter((blog) => blog.id.toString() !== blogID);
    setBlogs(currentBlogs);
    localStorage.setItem("blogs", JSON.stringify(currentBlogs));
    navigate("/");
  };

  return (
    <>
      {blogs && (
        <>
          <article className="app__article-blog">
            <h2 className="app__article-blog_title">{title}</h2>
            <p>{body}</p>
            <p>{author}</p>
            <button onClick={deleteBlog} className="app__article-blog_delete">
              Delete
            </button>
          </article>
          <div style={{ textAlign: "center" }}>
            <button
              onClick={() => navigate("/")}
              className="app__article-blog_backbutton"
            >
              Back to blogs
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default BlogDetails;
