import Layout from "./Layout";
import Home from "./pages/Home";
import NewPost from "./pages/NewPost";
import PostPage from "./pages/PostPage";
import EditPost from "./pages/EditPost";
import About from "./pages/About";
import Missing from "./pages/Missing";
import { Route, Routes, useNavigate } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout></Layout>}>
        <Route index element={<Home></Home>}></Route>
        <Route path="post">
          <Route index element={<NewPost></NewPost>}></Route>
          <Route path="/post/:id" element={<PostPage></PostPage>}></Route>
        </Route>

        <Route path="/edit/:id" element={<EditPost></EditPost>}></Route>

        <Route path="about" element={<About></About>}></Route>
        <Route path="*" element={<Missing></Missing>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
