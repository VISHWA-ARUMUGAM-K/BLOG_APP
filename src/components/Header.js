import { FaLaptop, FaTabletAlt, FaMobileAlt } from "react-icons/fa";
import useWindowSize from "../Hooks/useWindowSize";

const Header = ({ title }) => {
  const { width } = useWindowSize();

  return (
    <header className="Header">
      <h1>{title}</h1>
      {width < 768 ? (
        <FaMobileAlt></FaMobileAlt>
      ) : width < 992 ? (
        <FaTabletAlt></FaTabletAlt>
      ) : (
        <FaLaptop></FaLaptop>
      )}
    </header>
  );
};

export default Header;
