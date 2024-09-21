import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 ">
      <div>hello</div>
      <SignIn />
    </div>
  );
}
