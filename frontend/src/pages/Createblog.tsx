import { useState } from "react";

export const Createblog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <div className="h-screen flex flex-col bg-gray-50 p-8">
      {/* Top Bar */}
      <header className="flex justify-between items-center mb-8">
        <div className="text-xl font-bold text-gray-700">Draft in Kings</div>
        <button className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 transition">
          Publish
        </button>
      </header>

      {/* Main Content */}
      <main className="flex flex-col max-w-4xl mx-auto space-y-6">
        {/* Title Input */}
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="text-4xl font-extrabold w-full h-20 bg-transparent border-b-2 border-gray-200 focus:border-indigo-600 focus:outline-none p-3 placeholder-gray-400"
        />

        {/* Story Input */}
        <textarea
          placeholder="Tell your story..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="text-lg w-full bg-transparent border-b-2 border-gray-200 focus:border-indigo-600 focus:outline-none h-96 p-3 placeholder-gray-400"
        />
      </main>
    </div>
  );
};
