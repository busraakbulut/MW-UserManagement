"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

import Image from "next/image";
import login from "@/public/assets/login.png";
import InputField from "../Input/Input";

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
    <div className="container m-auto">
      <div>
        <div className="flex sm:flex-col justify-center md:flex-row-reverse pt-44">
          <div className="flex w-full md:w-3/6 justify-center items-center p-32 ">
            <form
              className="p-6 w-full  bg-white shadow-2xl shadow-blue-700 rounded-md "
              onSubmit={handleLogin}
            >
              <h2 className="text-3xl font-semibold mb-6">Login Page</h2>
              <InputField
                label="Email"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <InputField
                label="Password"
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <div className="flex items-center justify-between">
                <div className="flex items-center h-5 ">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    className="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded-sm "
                  />

                  <div className="text-sm p-2">
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
                  className="text-sm text-blue-700 hover:underline "
                >
                  Did you forget your password?
                </a>
              </div>
              <button
                type="submit"
                className=" bg-blue-500 text-white py-2 px-4 my-2 rounded-md hover:bg-blue-700"
              >
                Login to your account
              </button>
              <div className="text-sm font-medium  text-gray-500 ">
                Not registered?
                <a
                  href="/register"
                  className="text-blue-700 hover:underline px-1 "
                >
                  Create account
                </a>
              </div>
            </form>
          </div>
          <div className=" flex sm:felx-col w-full md:w-3/6 justify-center items-center p-32 md:p-20">
            <Image src={login} alt="login image" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
