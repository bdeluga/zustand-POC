import Link from "next/link";
import UserSection from "./UserSection";

const Header = () => {
  return (
    <header className="flex border-b border-b-slate-400  h-20 items-center justify-between px-10">
      <Link href="/">
        <h1 className="text-4xl font-bold ">CRYPTO NO SCAM 👀</h1>
      </Link>
      <UserSection />
    </header>
  );
};

export default Header;
