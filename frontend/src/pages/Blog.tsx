import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// Define the structure for the blog data
interface Blog {
  id: string;
  title: string;
  content: string;
  category: string;
  authorId: string;
}

export const Blog = () => {
  const { id } = useParams<{ id: string }>(); // Get the blog id from the URL
  const [blog, setBlog] = useState<Blog | null>(null); // State to hold the blog data

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          console.error("No token found");
          return;
        }

        const response = await axios.get(
          `https://backend.vrushabhpatil4801.workers.dev/api/v1/blog/${id}`, // Update with the correct endpoint for a single blog
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setBlog(response.data); // Set the fetched blog data
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    };

    fetchBlog();
  }, [id]);

  if (!blog) {
    return <div>Loading...</div>; // Loading state
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-500">Category: {blog.category}</p>
      <div className="mt-4">{blog.content}</div>
    </div>
  );
};
