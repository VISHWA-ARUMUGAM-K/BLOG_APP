import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
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
