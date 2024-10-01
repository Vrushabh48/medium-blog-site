import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Import Link from React Router

interface Blog {
  id: string;
  title: string;
  content: string;
  category: string;
  authorId: string;
}

export const Blogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          console.error("No token found");
          return;
        }

        const response = await axios.get(
          "https://backend.vrushabhpatil4801.workers.dev/api/v1/blog/api/v1/blog/bulk",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">All the blogs here</h1>
      <div className="grid gap-4">
        {blogs.map((blog) => (
          <Link to={`/blog/${blog.id}`} key={blog.id} className="border p-4 rounded shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold">{blog.title}</h2>
            <p className="text-gray-500">Category: {blog.category}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};
