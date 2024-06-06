import "./globals.css";
import testing from "../../public/gymgirl.webp";


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


<div id="default-carousel" className="relative w-full" data-carousel="slide">

    <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
         
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={testing} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={testing} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={testing} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={testing} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
    </div>
    
    <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    </div>

    <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span className="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span className="sr-only">Next</span>
        </span>
    </button>
</div>
      </section>
    </main>
  );
}
