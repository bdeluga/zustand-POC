"use client";

import { userStore } from "@/useStore";
import Gamble from "./Gamble";
import History from "./History";
import { shallow } from "zustand/shallow";

const Main = () => {
  // get only needed values from store, use shallow to prevent rerendering
  const { user, logIn } = userStore(
    (state) => ({
      user: state.user,
      logIn: state.logIn,
    }),
    shallow
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    logIn();
  };
  if (user) {
    return (
      <div className="flex flex-col">
        <History />
        <Gamble />
      </div>
    );
  }

  return (
    <form
      className="flex justify-start items-center flex-col gap-y-4 border w-96 h-[450px] p-10 rounded-lg shadow-md shadow-slate-400"
      onSubmit={handleSubmit}
    >
      <h1 className="py-10 font-semibold text-lg ">
        DON&apos;T YOU <u className="underline-offset-4">WORRY</u>, LOG IN{" "}
        <u className="underline-offset-4">HURRY</u>
      </h1>
      <input
        className="bg-transparent border rounded-md p-4 w-full"
        type="text"
        placeholder="PESEL/LOGIN"
      />
      <input
        className="bg-transparent border rounded-md p-4 w-full"
        type="text"
        placeholder="PASSWORD"
      />
      <button className="border border-green-500 px-8 hover:bg-green-500 self-end mt-4 hover:text-slate-900 py-4 rounded-md">
        Submit
      </button>
    </form>
  );
};

export default Main;
