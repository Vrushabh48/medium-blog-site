import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";

export const Createblog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        console.error("No token found");
        return;
      }

      //axios post request to publish a blog
      const response = await axios.post(
        "https://backend.vrushabhpatil4801.workers.dev/api/v1/blog",
        {
          title: title,
          content: content,
          category: category,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      //after successful response, everything is set to empty
      console.log(response.data);
      setTitle("");
      setContent("");
      setCategory("");
      alert("Blog published successfully!");
      navigate("/blogs");
    } catch (error) {
      console.error("Error publishing the blog:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 p-4 sm:p-8">
      <header className="flex justify-between items-center mb-6">
        <div className="text-xl font-bold text-gray-700 font-serif">Medium</div>
        <button
          onClick={handleClick}
          className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 transition"
        >
          Publish
        </button>
      </header>

      <main className="flex flex-col max-w-3xl mx-auto space-y-4 sm:space-y-6">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="text-4xl font-extrabold w-full h-20 bg-transparent border-b-2 border-gray-200 focus:border-indigo-600 focus:outline-none p-3 placeholder-gray-400"
        />

        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="text-2xl font-semibold w-full h-12 bg-transparent border-b-2 border-gray-200 focus:border-indigo-600 focus:outline-none p-3 placeholder-gray-400"
        />
        <textarea
          placeholder="Tell your story..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="text-lg w-full bg-transparent border-b-2 border-gray-200 focus:border-indigo-600 focus:outline-none h-96 p-3 placeholder-gray-400"
        />
      </main>

      <Footer />
    </div>
  );
};
