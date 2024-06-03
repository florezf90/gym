import Link from "next/link";

export default function Services() {
    return (
        <main className="container mx-auto bg-slate-50 text-black">
            <h1 className="text-5xl mt-5 p-6">Services</h1>
            <Link href="/" className="m-5"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-3 text-2xl ">Home</button></Link>
            <Link href="/about" className="m-5"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-3 text-2xl ">About</button></Link>
        </main>
    );
}