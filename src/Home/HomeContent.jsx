import { Link } from "react-router-dom";
import Hero from "../Components/Hero";
import Service from "../Components/service";
import Features from "../Components/Features";
import Packege from "../Components/Packege";
import Testimonial from "../Components/Testimonial";
import ChatWidget from "../Components/ChatWidget";
import About from "../Components/About";
import Consultance from "../Components/Consultance";

const App = () => {
  return (
    <div>
      <Hero />
      <About />
      <Service />
      <Packege />
      <Features />
      <Consultance />
      <Testimonial />
      <ChatWidget />
    </div>
  );
};

export default App;
