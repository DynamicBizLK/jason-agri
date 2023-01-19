import { useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const Hero = () => {
  const scrollRef = useRef(null);
  const isInView = useInView(scrollRef);

  return (
    <section className="h-screen" ref={scrollRef}>
      <div className="relative w-screen h-screen overflow-hidden">
        <Image src="/bg.jpg" width="1080" height="800" alt="Farming" className="h-full w-full object-cover" />
        <div className="absolute top-0 left-0 w-full h-full bg-black/60" />
      </div>

      <div className="absolute bottom-10 left-1/2 right-1/2 -translate-x-1/2 container max-w-6xl w-full text-white text-center space-y-4 sm:bottom-1/3">
        <div className="mx-auto text-center">
          <h2 className="mt-3 text-5xl font-semibold sm:text-lg">
            <span className="text-8xl sm:text-3xl">Jason</span> Agri Exports (PVT) Limited
          </h2>
        </div>

        <h1 className="text-2xl leading-[1.2] font-medium sm:text-lg sm:font-normal">Your Supply. Our Responsibility.</h1>

        <button className="bg-jasonred font-medium py-3 px-5 rounded-md">
          <Link href="/#products">View Products</Link>
        </button>
      </div>
    </section>
  );
};

export default Hero;
