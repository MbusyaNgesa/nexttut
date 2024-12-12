"use client";
import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();
  return (
    <div>
      <h1
        className="flex items-center justify-center
   text-xl mt-2"
      >
        About Us
      </h1>
      <button
        onClick={() => router.push("/")}
        className="bg-lime-700 text-white p-2 rounded-lg m-2"
      >
        Homepage
      </button>
    </div>
  );
};

export default About;
