import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NewBlog.scss";

const NewBlog = ({ blogs, setBlogs }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    body: "",
    author: "",
  });

  const handleFormData = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmitFormData = (e) => {
    e.preventDefault();
    if (formData.title && formData.body && formData.author) {
      if (blogs) {
        const ID = blogs.length ? blogs[blogs.length - 1].id + 1 : 1;
        const newBlog = { ...formData, id: ID };
        const newBlogs = [...blogs, newBlog];
        setBlogs(newBlogs);
        localStorage.setItem("blogs", JSON.stringify(newBlog));
        navigate("/");
      } else {
        const ID = 1;
        const newBlog = { ...formData, id: ID };
        setBlogs(newBlog);
        localStorage.setItem("blogs", JSON.stringify(newBlog));
        navigate("/");
      }
    }
  };

  return (
    <section className="app__newblog">
      <h1 className="app__newblog-title">Add new blog</h1>
      <form className="app__newblog-form" onSubmit={handleSubmitFormData}>
        <div className="form-group">
          <label htmlFor="title">Blog Title:</label>
          <input
            type="text"
            name="title"
            id="title"
            value={formData.title}
            onChange={handleFormData}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="body">Blog Body:</label>
          <textarea
            name="body"
            id="body"
            value={formData.body}
            onChange={handleFormData}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="author">Blog Author:</label>
          <select
            name="author"
            id="author"
            value={formData.author}
            onChange={handleFormData}
          >
            <option value="">Select author</option>
            <option value="Erys">Erys</option>
            <option value="Jack">Jack</option>
            <option value="Dianne">Dianne</option>
            <option value="Mike">Mike</option>
          </select>
        </div>
        <button onClick={handleSubmitFormData} type="submit">
          Add Blog
        </button>
      </form>
    </section>
  );
};

export default NewBlog;
