import { useState, useContext } from "react";
import DataContext from "../context/DataContext";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import api from "../api/Post";

const NewPost = () => {
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const { posts, setPosts } = useContext(DataContext);
  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const dateTime = format(new Date(), "MMMM dd,yyyy pp");
    const newPost = { id, title: postTitle, dateTime, body: postBody };

    try {
      const response = await api.post("./posts", newPost);
      const allPosts = [...posts, response.data];
      setPosts(allPosts);
      setPostBody("");
      setPostTitle("");
      history("/");
    } catch (err) {
      console.log(`Error:${err.message}`);
    }
  };

  return (
    <main className="NewPost">
      <h2>New Post</h2>
      <form className="newPostForm" onSubmit={handleSubmit}>
        <label htmlFor="postTitle"> Title:</label>
        <input
          id="postTitle"
          type="text"
          required
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
        ></input>
        <label htmlFor="postBody">Post</label>
        <textarea
          id="postBody"
          required
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default NewPost;
