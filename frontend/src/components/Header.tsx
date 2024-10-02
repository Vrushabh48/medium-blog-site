import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  const handleclick = () => {
    navigate("/create");
  };

  const handlelogout = () => {
    // Clear the token from localStorage
    localStorage.setItem("token", ""); // OR localStorage.setItem("token", ""); to empty the token
    
    // Optionally, clear other user-related data from localStorage here

    // Redirect the user to the landing page
    navigate('/');
};

  return (
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
        onClick={handleclick}
        className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 transition"
      >
        Create New
      </button>
      <button onClick={handlelogout} type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Logout</button>
    </div>
  </header>
</div>

  );
};
