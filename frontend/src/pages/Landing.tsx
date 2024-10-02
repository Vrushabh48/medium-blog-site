import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";

export const Landingpage = () => {
    //transition hook
  const [isTransitioning, setIsTransitioning] = useState(false); 
  const navigate = useNavigate();

  //handles transition
  const handleSignupClick = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      navigate("/signup");
    }, 300);
  };

  //handles transition
  const handleSigninClick = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      navigate("/signin");
    }, 300);
  };

  return (
    <div className={`bg-slate-100 transition-opacity duration-300 ${isTransitioning ? "opacity-0" : "opacity-100"}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="flex justify-between items-center mb-8 py-5 bg-white shadow-md rounded-lg">
          <div className="flex items-center">
            <div className="text-3xl font-bold text-black font-serif mr-8">
              <span className="text-gray-800">M</span>edium
            </div>
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

      <div className="bg-slate-100 text-center px-4">
        <div className="text-3xl md:text-6xl lg:text-8xl font-extrabold py-8 border-b-4">
          <h1 className="font-sans">We Help Writers Succeed in the Creator Economy</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 lg:px-36 py-8 border-b-2">
        <div className="flex justify-center">
          <img
            className="rounded-lg hover:scale-110 transition-transform w-full max-w-xs md:max-w-md"
            src="https://www.searchenginejournal.com/wp-content/uploads/2021/12/seo-copywriting-61ded65aa6f8e-sej.png"
            alt="Writing"
          />
        </div>
        <div className="flex items-center justify-center">
          <p className="text-xl md:text-3xl font-bold font-sans text-center hover:text-blue-800 transition duration-150">
            Write your own blogs and share your experiences and information with other people.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 lg:px-36 py-8 border-b-2">
        <div className="flex items-center justify-center order-last md:order-first">
          <p className="text-xl md:text-3xl font-bold font-sans text-center hover:text-blue-800 transition duration-150">
            Read Blogs written by different people and get better every day.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            className="rounded-lg hover:scale-110 transition-transform w-full max-w-xs md:max-w-md"
            src="https://www.hubspot.com/hs-fs/hubfs/202_Reasons-Consumers-Read-Blogs.png?width=893&height=600&name=202_Reasons-Consumers-Read-Blogs.png"
            alt="Reading"
          />
        </div>
      </div>

      <div className="text-center py-10">
        <h1 className="text-4xl md:text-7xl font-bold hover:scale-105 transition-transform">Read. Learn. Grow.</h1>
      </div>

      <div className="flex justify-center space-x-4 py-4">
        <button
          onClick={handleSignupClick}
          className="font-sans font-bold text-white py-3 px-6 rounded-lg bg-blue-500 hover:bg-indigo-500 transition-transform transform hover:-translate-y-1 hover:scale-110"
        >
          Signup
        </button>
        <Link
          to="/signin"
          className="font-sans font-bold text-white py-3 px-6 rounded-lg bg-blue-500 hover:bg-indigo-500 transition-transform transform hover:-translate-y-1 hover:scale-110"
        >
          Signin
        </Link>
      </div>

      <Footer />
    </div>
  );
};
