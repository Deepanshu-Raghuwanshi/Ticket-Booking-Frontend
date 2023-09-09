import React from 'react';
import { Outlet } from "react-router-dom";
import SignupHeader from '../Headers/SignupHeader';


const SignupLayout = () => {
  return (
    <>
      <SignupHeader />
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default SignupLayout;
