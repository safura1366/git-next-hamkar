import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   <div>
    <h1>this is home page</h1>
    <Link href="/about">go to about</Link>
   </div>
  );
}
