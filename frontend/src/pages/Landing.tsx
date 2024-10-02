import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";

export const Landingpage = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navigate = useNavigate();

  const handleSignupClick = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      navigate("/signup");
    }, 300); // Wait for the animation to complete before navigation
  };

  const handleSigninClick = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      navigate("/signin");
    }, 300); // Wait for the animation to complete before navigation
  };

  return (
    <div className={`bg-slate-100 transition-opacity duration-300 ${isTransitioning ? "opacity-0" : "opacity-100"}`}>
      <div className="ml-36 mr-36">
        <header className="flex justify-between items-center mb-8 p-5 bg-white shadow-md rounded-lg">
          <div className="flex items-center">
            {/* Medium Logo */}
            <div className="text-3xl font-bold text-black font-serif mr-8">
              <span className="text-gray-800">M</span>edium
            </div>
            {/* Navigation Links */}
            <nav className="flex space-x-6">
              <Link
                to="/blogs"
                className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-normal font-mono"
              >
                Blogs
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-normal font-mono"
              >
                About
              </Link>
            </nav>
          </div>
          {/* Sign Up and Sign In Buttons */}
          <div className="flex space-x-4">
            <button
              onClick={handleSignupClick}
              className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 transition"
            >
              Sign Up
            </button>
            <button
              onClick={handleSigninClick}
              className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 transition"
            >
              Sign In
            </button>
          </div>
        </header>
      </div>

      <div className="bg-slate-100">
        <div className="text-8xl p-3 ml-36 mr-36 border-b-4">
          <h1 className="font-sans font-extrabold p-6 w-fit flex justify-center">
            We Help Writers Succeed in the Creator Economy
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-2 ml-36 mr-36 border-b-2">
        <div className="w-fit flex justify-center mt-3">
          <img
            className="rounded hover:scale-110 w-96 mt-11 m-20"
            src="https://www.searchenginejournal.com/wp-content/uploads/2021/12/seo-copywriting-61ded65aa6f8e-sej.png"
            alt=""
          />
        </div>
        <div className="text-3xl items-center flex justify-center">
          <p className="font-bold font-sans p-3 hover:text-blue-800 transition ease-in-out delay-150">
            Write your own blogs and share your experiences and information with other people.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 ml-36 mr-36 border-b-2">
        <div className="text-3xl items-center flex justify-center">
          <p className="font-bold font-sans p-3 hover:text-blue-800 transition ease-in-out delay-150">
            Read Blogs written by different people and get better every day.
          </p>
        </div>
        <div className="w-fit flex justify-center mt-3">
          <img
            className="rounded hover:scale-110 w-96 mt-11 m-20"
            src="https://www.hubspot.com/hs-fs/hubfs/202_Reasons-Consumers-Read-Blogs.png?width=893&height=600&name=202_Reasons-Consumers-Read-Blogs.png"
            alt=""
          />
        </div>
      </div>
      <div className="flex justify-center m-4">
        <h1 className="text-7xl font-bold hover:scale-105">Read. Learn. Grow.</h1>
      </div>
      <div className="flex justify-center">
        <div className="p-2">
          <button
            onClick={handleSignupClick}
            className="m-5 font-sans font-bold text-white p-3 rounded-lg transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
          >
            Signup
          </button>
          <Link
            to="/signin"
            className="font-sans font-bold text-white p-3 rounded-lg transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
          >
            Signin
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};
