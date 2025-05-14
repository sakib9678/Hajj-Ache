import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { DarkModeProvider } from "../DakModeContext";
import ChatWidget from "../Components/ChatWidget";
import ScrollToTopButton from "../Components/ScrollToTopButton";


const Home = () => {
  return (
    <DarkModeProvider>
      <Navbar />
      <Outlet />
      <ScrollToTopButton />
      <ChatWidget />
      <Footer />
    </DarkModeProvider>
  );
};

export default Home;
