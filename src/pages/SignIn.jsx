import React, { useEffect, useState } from "react";
import { LoginCard } from "../components/SignInCard";
import logo from "../assets/logo-red.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation, useNavigate } from "react-router-dom";

const SignIn = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const message = location.state?.message;
  const [isToastShown, setIsToastShown] = useState(false);

  console.log(message);

  useEffect(() => {
    if (message !== "") {
      toast.success(message);
      setIsToastShown(true);
      navigate("/signin", { replace: true, state: {} });
    }
  }, [message, isToastShown, navigate]);
  return (
    <div className="h-screen bg-auth-hero bg-no-repeat flex justify-center items-center relative">
      <div className="absolute inset-0 bg-auth-hero bg-no-repeat bg-cover brightness-50 z-0"></div>
      <img
        src={logo}
        alt="logo"
        className="w-32 md:w- lg:w-44 absolute left-0 md:left-2 lg:left-12 -top-2"
      />
      <LoginCard />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default SignIn;

