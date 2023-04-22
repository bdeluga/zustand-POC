"use client";
import { userStore } from "@/useStore";
import { shallow } from "zustand/shallow";
import Image from "next/image";

const UserSection = () => {
  // get only needed values from store, use shallow to prevent rerendering
  const { user, logOut } = userStore(
    (state) => ({ user: state.user, logOut: state.logOut }),
    shallow
  );

  if (!user) {
    return null;
  }

  return (
    <div className=" flex justify-center items-center gap-x-4">
      <span className="font-bold text-lg">{user.name}</span>
      <button className="w-16 h-16 relative" onClick={logOut}>
        <Image
          src={user.image}
          alt="user's avatar"
          fill
          sizes="100%"
          className="rounded-full"
        />
      </button>
    </div>
  );
};

export default UserSection;
