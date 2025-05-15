import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import HomeContent from "../Home/HomeContent";
import Services from "../Services/Services";
import UmrahPackage from "../Package/UmrahPackage";
import HajjPackage from "../Package/HajjPackage";
import About from "../About/about";
import UmrahGuideLine from "../GuidLine/UmrahGuideLine";
import VisaProccessing from "../Services/VisaProccessing";
import Airticketing from "../Services/Airticketing";
import Contact from "../Contact";
import AffilteHome from "../Affiliate/AffilteHome";


const AppRouter = () => {
  return (
    <Suspense
      fallback={
        <div className="grid place-content-center h-screen w-screen"></div>
      }
    >
      <Routes>
        <Route element={<Home />} path="/">
          <Route element={<HomeContent />} path="/" />
          <Route element={<UmrahPackage />} path="umrah-packages" />
          <Route element={<HajjPackage />} path="hajj-packages" />
          <Route element={<Services />} path="service" />
          <Route element={<VisaProccessing />} path="service/visa-processing" />
          <Route element={<Airticketing />} path="service/air-ticketing" />
          <Route element={<About />} path="about" />
          <Route element={<UmrahGuideLine />} path="/umrah-guideline" />
          <Route element={<Contact />} path="/contact" />
          <Route element={<AffilteHome />} path="/affiliate" />
          

        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
