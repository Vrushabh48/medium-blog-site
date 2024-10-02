import { useState, useEffect } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Label } from "../components/Label";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false); //hook for fade-out effect
  const navigate = useNavigate();

  // Handle sign-in form submission
  const handleSignin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);

    try {
      const response = await axios.post(
        "https://backend.vrushabhpatil4801.workers.dev/api/v1/user/signin",
        {
          email: email,
          password: password,
        }
      );

      if (response.data.jwt) {
        localStorage.setItem("token", response.data.jwt);
        alert("Signin successful!");
        navigate("/blogs");
      }
    } catch (error) {
      console.error(error);
      alert(error);
    }
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 h-screen transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex justify-center items-center bg-gray-100 p-6 sm:p-8">
        <div className="w-full max-w-md space-y-6 p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
            Signin to your account
          </h2>
          <h3 className="font-light text-center text-sm sm:text-base md:text-lg">
            Don't have an account? Signup
          </h3>
          <form className="space-y-4">
            <div>
              <Label label="Email" />
              <Input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="text"
                placeholder="Enter Your Email"
              />
            </div>
            <div>
              <Label label="Password" />
              <Input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder="Enter Your Password"
              />
            </div>
            <Button onClick={handleSignin} btnname="Signin" />
          </form>
        </div>
      </div>

      <div className="hidden md:flex items-center bg-slate-200 p-6 sm:p-8">
        <div className="text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold p-3">
            "Write. Rewrite. When not writing or rewriting, read. I know of no
            shortcuts."
          </h1>
          <h3 className="font-light p-3 text-base sm:text-lg">
            Lary King, American Author
          </h3>
        </div>
      </div>
    </div>
  );
};
