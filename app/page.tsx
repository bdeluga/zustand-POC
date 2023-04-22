import { Poppins } from "next/font/google";
import Main from "@/components/Main";

const font = Poppins({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <main
      className={`justify-center items-center flex h-full flex-grow flex-col ${font.className}`}
    >
      <Main />
    </main>
  );
}
