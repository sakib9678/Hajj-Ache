import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { DarkModeProvider } from "../DakModeContext";


const Home = () => {
  return (
    <DarkModeProvider>
      <Navbar />
      <Outlet />
      <Footer />
    </DarkModeProvider>
  );
};

export default Home;
