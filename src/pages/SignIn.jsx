import React from "react";
import {LoginCard} from '../components/SignInCard'
import logo from '../assets/logo-red.svg'

const SignIn = () => {
  return (
    <div className="h-screen bg-auth-hero bg-no-repeat flex justify-center items-center relative">
        <div className="absolute inset-0 bg-auth-hero bg-no-repeat bg-cover brightness-50 z-0"></div>
        <img src={logo} alt="logo" className="w-32 md:w- lg:w-44 absolute left-0 md:left-2 lg:left-12 -top-2"/>
      <LoginCard/>
    </div>
  );
};

export default SignIn;


// w-48 h-44 absolute left-40 -top-9