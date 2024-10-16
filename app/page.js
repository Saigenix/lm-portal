import Image from "next/image";
import Login from "@/components/Login";
import toast, { Toaster } from "react-hot-toast";
export default function Home() {
  return (
    <>
      <>
        <div className="flex w-[100%] flex-col">
          <Toaster />
          <Login />
        </div>
      </>
    </>
  );
}
