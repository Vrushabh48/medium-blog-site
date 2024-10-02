import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

// Structure of blog
interface Blog {
  id: string;
  title: string;
  content: string;
  category: string;
  authorId: string;
}

//skeleton
const BlogSkeleton = () => (
  <div className="bg-white rounded-lg shadow-md mb-6 w-full md:w-3/4 lg:w-1/2">
    <div className="p-4">
      <div className="h-6 bg-gray-200 rounded-full w-48 mb-4"></div>
      <div className="h-4 bg-gray-200 rounded-full max-w-[480px] mb-2.5"></div>
      <div className="h-4 bg-gray-200 rounded-full max-w-[440px] mb-2.5"></div>
      <div className="h-4 bg-gray-200 rounded-full max-w-[460px] mb-2.5"></div>
    </div>
  </div>
);

export const Blog = () => {
  const { id } = useParams<{ id: string }>();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  //get a blog by its id and render only when id gets changed
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          console.error("No token found");
          return;
        }

        //axios get request to backend
        const response = await axios.get(
          `https://backend.vrushabhpatil4801.workers.dev/api/v1/blog/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setBlog(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blog:", error);
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  //skeleton
  if (loading) {
    return (
      <div className="p-8 flex flex-col items-center min-h-screen">
        <BlogSkeleton />
        <BlogSkeleton />
        <BlogSkeleton />
      </div>
    );
  }

  //if no blog is present in the database
  if (!blog) {
    return <div className="text-center p-8">No blog found</div>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="mb-6 border-b">
        <Header />
      </div>

      <div className="flex flex-col items-center p-4 sm:p-8 w-full flex-grow">
        <div className="w-full max-w-full md:max-w-3/4 lg:max-w-1/2 bg-white rounded-lg shadow-lg p-6 md:p-8">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-gray-800 mb-4 leading-tight break-words">
            {blog.title}
          </h1>
          <p className="text-black w-fit rounded-full p-2 font-medium mb-2 tracking-wide">
            By Anonymous
          </p>
          <p className="text-sm text-white bg-blue-500 w-fit rounded-full p-2 font-semibold mb-6 tracking-wide uppercase">
            Category: {blog.category}
          </p>
          <div className="text-base sm:text-lg text-gray-700 leading-relaxed break-words font-medium">
            {blog.content}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
