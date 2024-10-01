import { useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Label } from "../components/Label";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';

export const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [info, setInfo] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    // Handle form submission
    const handleSignup = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault(); // Prevent default form submission behavior
    
        console.log("Name:", name);
        console.log("Info:", info);
        console.log("Email:", email);
        console.log("Password:", password);
    
        try {
            const response = await axios.post("https://backend.vrushabhpatil4801.workers.dev/api/v1/user/signup", {
                name: name,
                info: info,
                email: email,
                password: password
            });
    
            // Assuming the response contains a JWT token
            if (response.data.jwt) {
                // Store the token in localStorage
                localStorage.setItem("token", response.data.jwt);
                toast.success("Signup successful! You are now logged in.");
                navigate('/blogs')
                // Optionally redirect or perform other actions here
            } else {
                toast.error("Signup successful, but no token received.");
            }
        } catch (error) {
            // Handle error based on error response
            if (axios.isAxiosError(error)) {
                const errorMessage = error.response?.data?.error || "Signup failed. Please try again.";
                console.error("Signup Error:", errorMessage);
                toast.error(errorMessage); // Use toast instead of alert
 // Show the specific error message to the user
            } else {
                console.error("Unexpected Error:", error);
                toast.error("An unexpected error occurred. Please try again later.");
            }
        }
    };

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
        {/* Left Section - Signup Form */}
        <div className="flex justify-center items-center bg-gray-100 p-8">
          <div className="w-full max-w-md space-y-6 p-8">
            <h2 className="text-4xl font-bold text-center">Create an account</h2>
            <h3 className="font-light text-center">Already have an account? Sign in</h3>
            <form className="space-y-4">
              <div>
                <Label label="Name"/>
                <Input 
                  type="text" 
                  placeholder="Enter Your name" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                />
              </div>
              <div>
                <Label label="Info"/>
                <Input 
                  type="text" 
                  placeholder="Enter Your Info" 
                  value={info} 
                  onChange={(e) => setInfo(e.target.value)} 
                />
              </div>
              <div>
                <Label label="Email"/>
                <Input 
                  type="email" 
                  placeholder="Enter Your Email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                />
              </div>
              <div>
                <Label label="Password"/>
                <Input 
                  type="password" 
                  placeholder="Enter Your Password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                />
              </div>
              <Button onClick={handleSignup} btnname="Signup"/>
            </form>
            <ToastContainer position="top-right" autoClose={5000} hideProgressBar />
          </div>
        </div>

        {/* Right Section - Quote */}
        <div className="flex items-center bg-slate-200 p-8">
          <div className="text-left">
            <h1 className="text-4xl font-extrabold p-3">
              "Write. Rewrite. When not writing or rewriting, read. I know of no shortcuts."
            </h1>
            <h3 className="font-light p-3 text-lg">Lary King, American Author</h3>
          </div>
        </div>
      </div>
    );
};
