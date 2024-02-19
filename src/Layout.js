import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { DataProvider } from "./context/DataContext";

const Layout = ({ search, setSearch }) => {
  return (
    <div className="App">
      <Header title={"React JS blog"}></Header>
      <DataProvider>
        <Nav search={search} setSearch={setSearch}></Nav>
        <Outlet></Outlet>
        <Footer></Footer>
      </DataProvider>
    </div>
  );
};

export default Layout;
