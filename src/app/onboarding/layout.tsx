"use client";
import ProgressBar from "../_components/ProgressBar";
import { Provider } from "react-redux";
import { store } from "../_state/store";

export type mediaType = {
  src: string;
  label: string;
};

export default function OnBoardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <main className="flex justify-center w-screen">
        <div className="flex items-center flex-col min-w-56">
          <ProgressBar />
          {children}
        </div>
      </main>
    </Provider>
  );
}
