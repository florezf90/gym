import Link from "next/link";


export default function About() {
    return (
      <main className="container bg-white text-black mx-auto">
        <h1 className="text-5xl m-5 pt-6">About</h1>
        <Link href="/" className="m-5"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-3 text-2xl ">Home</button></Link>
        <Link href="/services" className="m-5"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  rounded my-3 text-2xl ">Services</button></Link>
      </main>
    ); 
}