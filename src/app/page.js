import "./globals.css";
import Carousel from "../components/carousel";


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
      <section className=" flex flex-col lg:flex-row justify-center align-center max-w-7xl mx-auto  my-40  ">
        <div className=" mx-auto  halfcontainer" aria-description="gymImg">
          <div className="sideImg mx-auto "></div>
        </div>
        <div className=" flex flex-col p-10 text-center halfcontainer   align-center justify-center">
          <h1 className="text-4xl font-bold tracking-tight text-white ml-40 my-10">
            About us
          </h1>
          <p className="text-2xl  tracking-tight text-white ml-40  my-8 ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam est
            eaque impedit vitae! Voluptatem ratione asperiores harum, alias qui,
            totam voluptas deserunt enim vero quisquam eius numquam aperiam,
            consequuntur fugit! Repellat voluptate provident ullam.
          </p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-9 mb-60 text-2xl ml-40  "
            aria-label="learn more"
          >
            Learn More
          </button>
        </div>
      </section>
      <section className=" flex flex-col max-w-7xl mx-auto ">
        <div className=" text-center py-5 mt-20 mb-40 title">
          <h1 className="text-5xl text-white">Join us and transform your life</h1>
        </div>
        <Carousel />
      </section>
    </main>
  );
}
