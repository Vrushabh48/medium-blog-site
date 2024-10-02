import { useState, useEffect } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Label } from "../components/Label";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Signin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isVisible, setIsVisible] = useState(false); // State to control visibility for the fade-in effect
    const navigate = useNavigate();

    // Handle sign-in form submission
    const handleSignin = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault(); // Prevent default form submission behavior
        console.log("Email:", email);
        console.log("Password:", password);

        try {
            const response = await axios.post("https://backend.vrushabhpatil4801.workers.dev/api/v1/user/signin", {
                email: email,
                password: password
            });

            if (response.data.jwt) {
              // Store the token in localStorage
              localStorage.setItem("token", response.data.jwt);
            // Handle success (e.g., show a message, redirect, etc.)
            alert("Signin successful!");
            navigate("/blogs");
            }
        } catch (error) {
            console.error(error);
            // Handle error (e.g., show an error message to the user)
            alert(error);
        }
    };

    useEffect(() => {
        // Trigger the fade-in effect after component mounts
        setIsVisible(true);
    }, []);

    return (
        <div className={`grid grid-cols-1 md:grid-cols-2 h-screen transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            {/* Left Section - Signin Form */}
            <div className="flex justify-center items-center bg-gray-100 p-8">
                <div className="w-full max-w-md space-y-6 p-8">
                    <h2 className="text-4xl font-bold text-center">Signin to your account</h2>
                    <h3 className="font-light text-center">Don't have an account? Signup</h3>
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
