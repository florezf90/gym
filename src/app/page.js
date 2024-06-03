import Link from "next/link";

export default function Home() {
return (
  <main>
    <Link href="/about" className="m-5 ">About</Link>
    <Link href="/services" className="m-5">Services</Link>
  </main>
);

}
