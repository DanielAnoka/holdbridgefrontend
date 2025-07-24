
import { Navigate, Route, Routes } from "react-router-dom";
import Landing from '../layouts/landing';
import LandingPage from '../app/landing-page';
import Waitlist from '../app/waitlist/main';
import Signup from "../app/auth/sign-up"
import Signin from "../app/auth/sign-in";
import ComingSoon from "../app/404";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Landing />}>
                <Route index element={<LandingPage />} />
                <Route path="waitlist" element={<Waitlist />} />
            </Route>
            <Route path="/register" element={<Signup />} />
            <Route path="/login" element={<Signin />} />
        </Routes>
    )
}

export default Router