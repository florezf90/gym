import Link from "next/link";
import "./globals.css";
import Image from "next/image";
import trainer from '../../public/personalTrainer.webp'

export default function Home() {
  return (
    <main>
      <section className=" mt-5 backgroundIMG flex flex-col items-start justify-center  ">
        <h1 className="text-3xl font-bold tracking-tight text-white ml-96 p-4 ">
          Welcome to florezf90 GYM!
        </h1>
        <h3 className="text-xl font-bold tracking-tight text-white ml-96 p-4 mb-48">
          Where Fitness Becomes Your Lifestyle
        </h3>
      </section>
      <section className=" flex flex-col md:flex-row justify-center align-center max-w-7xl mx-auto  my-40  ">
        <div className=" p-10 halfcontainer">
          <Image src={trainer} alt="gym" width={600} height={500} />
        </div>
        <div className=" flex flex-col p-10 text-center halfcontainer align-center justify-center">
          <h1 className="text-4xl font-bold tracking-tight text-white  my-10">About</h1>
          <p className="text-2xl  tracking-tight text-white my-8 ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam est
            eaque impedit vitae! Voluptatem ratione asperiores harum, alias qui,
            totam voluptas deserunt enim vero quisquam eius numquam aperiam,
            consequuntur fugit! Repellat voluptate provident ullam.
          </p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-9 mb-60 text-2xl "
            aria-label="learn more"
          >
            Read More
          </button>
        </div>
      </section>
    </main>
  );
}
