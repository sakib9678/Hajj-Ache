import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import HomeContent from "../Home/HomeContent";
import Services from "../Services/Services";
import UmrahPackage from "../Package/UmrahPackage";
import HajjPackage from "../Package/HajjPackage";
import About from "../About/about";
import UmrahGuideLine from "../GuidLine/UmrahGuideLine";


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
          <Route element={<About />} path="about" />
          <Route element={<UmrahGuideLine />} path="/umrah-guideline" />

        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
