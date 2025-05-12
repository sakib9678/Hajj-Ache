import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import HomeContent from "../Home/HomeContent";
import About from "../About/About";
import Package from "../Package/Package";
import Services from "../Services/Services";
import UmrahPackage from "../Package/UmrahPackage";


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
          <Route element={<Services />} path="service" />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
