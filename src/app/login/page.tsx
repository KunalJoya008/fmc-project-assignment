"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";


export default function LoginPage() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });

  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  const onLogin = async () => {
    try {
      setLoading(true);
      
      router.push("/");
    } catch (error: any) {
      console.log("loginfailed");
    }
  };
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gradient-radial from-gray-900 via-gray-900 to-black bg-opacity-100">
      <div className="relative w-full max-w-lg">
        <div className="absolute top-20 left-10 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-purple-500 rounded-full filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute top-10 right-10 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-yellow-500 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute top-36 left-32 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-pink-500 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
      </div>
      <div className="flex flex-col items-center justify-center  w-3/4 md:w-1/2 lg:w-1/4 h-1/2 bg-dark-grey-opacity rounded-2xl  p-6 z-50">
        <h1 className="text-lg md:text-xl lg:text-2xl font-bold mb-6">
          {loading ? "Processing" : "Login"}
        </h1>
        <div className="w-full mb-4">
          <label
            htmlFor="username"
            className="block text-start mb-2 text-sm md:text-base lg:text-lg"
          >
            Username
          </label>
          <input
            className="w-full rounded-md p-2 bg-custom-dark text-sm md:text-base lg:text-lg"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            placeholder="Username"
            type="text"
          />
        </div>
        <div className="w-full mb-4">
          <label
            htmlFor="password"
            className="block text-start mb-2 text-sm md:text-base lg:text-lg"
          >
            Password
          </label>
          <input
            className="w-full rounded-md p-2 bg-custom-dark text-sm md:text-base lg:text-lg"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder="Password"
            type="password"
          />
        </div>
        <div className="w-full flex flex-col items-center mt-2">
          <button className="bg-custom-dark p-2 rounded-xl w-3/4 text-sm md:text-base lg:text-lg"
          onClick={onLogin}>
            Login
          </button>
          <br />
          <Link href="/signup" className="text-sm md:text-base lg:text-lg">
            New user? Please sign up
          </Link>
          <Link href="/" className="text-sm">
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}
