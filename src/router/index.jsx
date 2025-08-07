
import { Navigate, Route, Routes } from "react-router-dom";
import Landing from '../layouts/landing';
import LandingPage from '../app/landing-page';
import Waitlist from '../app/waitlist/main';
import Signup from "../app/auth/sign-up"
import Signin from "../app/auth/sign-in";

// Main system
import Main from "../layouts/main"
import Dashboard from "../app/main/Dashboard/index"


const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Landing />}>
                <Route index element={<LandingPage />} />
                <Route path="waitlist" element={<Waitlist />} />
            </Route>
            <Route path="/register" element={<Signup />} />
            <Route path="/login" element={<Signin />} />

            <Route path="/dashboard" element={<Main />}>
                <Route index element={<Dashboard />} />
            </Route>
        </Routes>
    )
}

export default Router