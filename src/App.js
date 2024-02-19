import Layout from "./Layout";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import EditPost from "./EditPost";
import About from "./About";
import Missing from "./Missing";
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
