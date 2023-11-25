"use client";
import { useState } from "react";
import Genre from "./components/Genre";
import ProgressBar from "./components/ProgressBar";

const genres = [
  "✨ Action",
  "🎢 Adventure",
  "🔞 Adult",
  "🖍 Animation",
  "📖 Biography",
  "🛕 Bollywood",
  "😂 Comedy",
  "🕵️‍♀️ Crime",
  "🌪 Disaster",
  "🎥 Documentary",
];

export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <main className="flex justify-center w-screen">
      <div className="flex items-center flex-col min-w-56">
        <ProgressBar />
        <h1 className="text-[28px] text-white/[0.92] mt-14">
          Select your top 5 genres for movies and TV
        </h1>
        <div className="relative h-14 w-[544px] rounded-md bg-white/[.05] mt-7 flex items-center gap-[10px] pl-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 16 16"
          >
            <path
              fill="#fff"
              fillOpacity="0.6"
              d="M0 6.471C0 2.903 2.931 0 6.534 0c3.603 0 6.535 2.903 6.535 6.471 0 1.476-.5 2.83-1.343 3.917l4.004 3.99c.172.17.27.406.27.665 0 .543-.385.957-.942.957a.97.97 0 01-.696-.276l-4.028-3.998a6.52 6.52 0 01-3.8 1.217C2.931 12.943 0 10.04 0 6.47zm1.4 0c0 2.806 2.301 5.085 5.134 5.085s5.134-2.279 5.134-5.085-2.3-5.084-5.134-5.084C3.701 1.387 1.4 3.665 1.4 6.47z"
            ></path>
          </svg>
          <input
            className="absolute outline-none left-0 pl-[50px] h-full w-full font-AvenirLight text-base bg-transparent placeholder-white/[0.7] focus:placeholder:opacity-0"
            type="text"
            placeholder="Search"
          />
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2">
          {genres.map((e, i) => {
            return (
              <Genre label={e} key={i} count={count} setCount={setCount} />
            );
          })}
        </div>
        <div className="mt-6 flex items-center gap-2">
          <div className="text-white/[0.6] font-AvenirHeavy text-base">
            show more
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="6"
            fill="none"
            viewBox="0 0 13 6"
          >
            <path
              fill="#fff"
              fillOpacity="0.6"
              fillRule="evenodd"
              d="M.777.47c.37-.293.97-.293 1.34 0L6.5 3.94 10.883.47c.37-.293.97-.293 1.34 0 .37.293.37.767 0 1.06l-5.053 4c-.37.293-.97.293-1.34 0l-5.053-4c-.37-.293-.37-.767 0-1.06z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        <div className="flex mt-12 text-base gap-6">
          <div className="h-12 border-white border-2 w-64 rounded-md flex items-center justify-center font-AvenirHeavy text-white/[0.92]">
            Back
          </div>
          <div
            className={
              "font-AvenirHeavy h-12 w-64 rounded-md flex items-center justify-center " +
              (count > 0
                ? "bg-primary text-black"
                : "bg-[#6d6d6d] text-white/[0.38]")
            }
          >
            Next
          </div>
        </div>
      </div>
    </main>
  );
}
