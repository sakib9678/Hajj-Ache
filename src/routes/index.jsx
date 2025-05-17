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
import AffiliateLogin from "../Affiliate/AffiliateLogin";
import AffiliateRegistration from "../Affiliate/AffiliateRegistration";
import AffiliateDashboard from "../Affiliate/AffiliateDashboard";
import EditProfile from "../Affiliate/EditProfile";
import HajjGuideLine from "../GuidLine/HajjGuideLine";


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
          <Route element={<UmrahGuideLine />} path="guide/umrah-guideline" />
          <Route element={<HajjGuideLine />} path="guide/hajj-guideline" />
          <Route element={<Contact />} path="/contact" />
          <Route element={<AffilteHome />} path="/affiliate" />
          <Route element={<AffiliateRegistration />} path="/affiliate-registrater" />
          <Route element={<AffiliateLogin />} path="/affiliate-login" />
          <Route element={<AffiliateDashboard />} path="/affiliate-dashboard" />
          <Route element={<EditProfile />} path="/affiliate-dashboard/edit-profile" />

        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
