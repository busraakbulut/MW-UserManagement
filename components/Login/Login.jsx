"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

import Image from "next/image";
import login from "@/public/assets/login.png";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const userEmail = await fetch(`http://localhost:3004/users?email=${email}`);
    const user = await userEmail.json();
    if (user.length === 0) {
      alert("User not found");
      return;
    }
    if (user[0].password !== password) {
      alert("Password is incorrect");
      return;
    }
    if (user[0].password === password) {
      alert("Login successful");
      router.push("/userlist");
      return;
    }
  };
  return (
    <section>
      <div>
        <div className="flex">
          <p className="mb-4">Please login to continue</p>
          <form
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={handleLogin}
          >
            <h1 className="text-3xl font-semibold mb-6">Login Page</h1>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className=" items-start">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    className="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded "
                    required=""
                  />
                </div>
                <div className="text-sm ml-3 ">
                  <label
                    htmlFor="remember"
                    className="font-medium text-gray-900 "
                  >
                    Remember me
                  </label>
                </div>
              </div>
              <a
                href="/register"
                className="text-sm text-blue-700 hover:underline ml-auto "
              >
                Did you forget your password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-5"
            >
              Login to your account
            </button>
            <div className="text-sm font-medium text-gray-500 ">
              Not registered?{" "}
              <a href="/register" className="text-blue-700 hover:underline ">
                Create account
              </a>
            </div>
          </form>
          <div className="flex  w-3/4 justify-center items-center h-screen">
            <Image src={login} alt="login" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Login;
