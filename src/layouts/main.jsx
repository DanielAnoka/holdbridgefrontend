import React from 'react';
import { Outlet } from 'react-router-dom';
import MainNav from '../navs/main-nav';
import InstallAppButton from '../components/InstallAppButton'; // adjust path if needed

const Main = () => {
  return (
    <div>
      <div className='sticky top-0 z-50 w-full flex items-center justify-between  bg-[#0C0C1E]'>
        <MainNav />
        <InstallAppButton />
      </div>

      <Outlet />
    </div>
  );
};

export default Main;
