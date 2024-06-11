"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <div className="h-screen bg-black flex flex-col items-center justify-center p-4">
        <div className="relative w-full max-w-2xl">
          <div className="flex flex-col sm:flex-row mt-10">
            <button
              className="bg-white p-3 px-5 text-black rounded-md m-3 mb-10"
              onClick={() => {
                router.push("/login");
              }}
            >
              Login
            </button>
            <button
              className="bg-white p-3 px-5 text-black rounded-md m-3 mb-10"
              onClick={() => {
                router.push("/signup");
              }}
            >
              Signup
            </button>
          </div>
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-full max-w-2xl h-28 bg-pink-600 rounded-xl filter blur-3xl"></div>
        </div>
        <div className="rounded-2xl z-50 bg-black p-8 text-5xl text-center text-white">
            FMC PROJECT ASSIGNMENT
          </div>
      </div>
    </>
  );
}
