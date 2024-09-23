import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
      <div>
        <Image src={"/signin.jpg"} alt={"signin"} width={800} height={400} />
      </div>
      <div className="pt-10 mt-10 pl-10">
        <SignIn />
      </div>
    </div>
  );
}
