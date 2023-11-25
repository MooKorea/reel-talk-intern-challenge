"use client";
import { useState } from "react";
import ProgressBar from "../_components/ProgressBar";

export default function OnBoardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <main className="flex justify-center w-screen">
        <div className="flex items-center flex-col min-w-56">
          <ProgressBar />
          {children}
        </div>
      </main>
  );
}
