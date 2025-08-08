import { Routes, Route } from "react-router-dom";
import Landing from '../layouts/landing';
import LandingPage from '../app/landing-page';
import Waitlist from '../app/waitlist/main';
import Signup from "../app/auth/sign-up";
import Signin from "../app/auth/sign-in";

// Main system
import Main from "../layouts/main";
import Dashboard from "../app/main/Dashboard/index";
import Marketplace from "../app/main/Marketplace/marketplace";
import Finance from "../app/main/Finance/finance";
import P2P from "../app/main/P2p/p2p";

const Router = () => {
  return (
    <Routes>
      {/* Landing layout */}
      <Route element={<Landing />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/waitlist" element={<Waitlist />} />
      </Route>

      {/* Auth pages */}
      <Route path="/register" element={<Signup />} />
      <Route path="/login" element={<Signin />} />

      {/* Main layout — no path on layout wrapper */}
      <Route element={<Main />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/p2p" element={<P2P />} />
      </Route>
    </Routes>
  );
};

export default Router;
