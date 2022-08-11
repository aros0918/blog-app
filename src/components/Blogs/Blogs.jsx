import React from "react";
import "./Blogs.scss";

const Blogs = ({ blog }) => {
  const { title, body, author } = blog;

  return (
    <article className="app__article-blog">
      <h2 className="app__article-blog_title">{title}</h2>
      <p>{body}</p>
      <p>{author}</p>
    </article>
  );
};

export default Blogs;
