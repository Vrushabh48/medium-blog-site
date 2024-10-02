import { useNavigate, Link } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/create");
  };

  //this cleares the token in localstorage
  const handleLogout = () => {
    localStorage.setItem("token", ""); 
    navigate('/');
  };

  return (
    <header className="flex flex-col md:flex-row justify-between items-center mb-8 p-5 bg-white shadow-md rounded-lg mx-4 md:mx-36">
      <div className="flex items-center mb-4 md:mb-0">
        <div className="text-3xl font-bold text-black font-serif mr-8">
          <span className="text-gray-800">M</span>edium
        </div>
        <nav className="flex space-x-4 md:space-x-6">
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
          onClick={handleClick}
          className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 transition"
        >
          Create New
        </button>
        <button 
          onClick={handleLogout} 
          type="button" 
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5"
        >
          Logout
        </button>
      </div>
    </header>
  );
};
