import Link from "next/link";

export default function Home() {
return (
  <main className="container mx-auto bg-slate-50 text-black">
    <h1 className="text-5xl m-5">Home page</h1>
    <Link href="/about" className="m-5 text-2xl "><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-3">About</button></Link>
    <Link href="/services" className="m-5 text-2xl" ><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-3">Services</button></Link>
  </main>
);

}
