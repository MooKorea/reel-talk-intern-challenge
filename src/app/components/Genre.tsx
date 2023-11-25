"use client";
import { useState } from "react";

interface Genre {
  label: string;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

export default function Genre({ label, count, setCount }: Genre) {
  const [checked, setChecked] = useState(false);

  const handleChecked = () => {
    setChecked(!checked);
    setCount((prev) => prev + (checked ? -1 : 1));
  };

  return (
    <div
      className={
        "cursor-pointer hover:border-primary flex items-center w-[160px] px-2 h-[46px] text-black rounded-lg " +
        (checked ? "bg-primary border-2 border-primary " : "bg-white border-2 border-[#6d6d6d] ") +
        (count >= 5 && !checked
          ? "pointer-events-none opacity-50"
          : "pointer-events-auto")
      }
      onClick={() => handleChecked()}
    >
      <div className="font-AvenirHeavy grow">{label}</div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="none"
        viewBox="0 0 20 20"
      >
        <rect
          width="18.75"
          height="18.75"
          x="0.625"
          y="0.625"
          fill="#fff"
          stroke="#222"
          strokeWidth="1.25"
          rx="4.375"
        ></rect>
        {checked && (
          <path
            fill="#222"
            fillRule="evenodd"
            d="M15.579 6.194a.632.632 0 010 .936l-6.6 6.176a.742.742 0 01-1 0l-3.772-3.53a.632.632 0 010-.935.742.742 0 011 0l3.272 3.061 6.1-5.708a.742.742 0 011 0z"
            clipRule="evenodd"
          ></path>
        )}
      </svg>
    </div>
  );
}
