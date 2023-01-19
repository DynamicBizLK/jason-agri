import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Projects = () => {
  const scrollRef = useRef(null);
  const isInView = useInView(scrollRef);

  const projects = [
    {
      title: "Scotch Bonat Chile Project - Colombo",
      image: "/projects/1.jpg",
    },
    {
      title: "Mushroom Project - Colombo",
      image: "/projects/2.jpg",
    },
    {
      title: "Gerkin Project - Colombo",
      image: "/projects/3.jpg",
    },
    {
      title: "Coffee & Tea Project - Haputale",
      image: "/projects/4.jpg",
    },
    {
      title: "Peanut / Watermelon / Pomegranate & Mango Project - Wellawaya",
      image: "/projects/5.jpg",
    },
  ];

  return (
    <section id="projects" className="container max-w-6xl my-16 scroll-m-28 overflow-hidden" ref={scrollRef}>
      <h3 className="text-jasonred font-semibold text-3xl text-center">Developing Projects</h3>

      <div className="mt-8 grid grid-cols-3 gap-6 h-max md:grid-cols-2 sm:grid-cols-1 sm:w-full">
        {projects.map(({ title, image }, index) => {
          return (
            <motion.div
              whileInView={{ y: "0", opacity: 100 }}
              initial={{ y: "-100%", opacity: 0 }}
              transition={{
                duration: 0.5,
                delay: index / 100,
              }}
              viewport={{ once: true }}
              className=""
              key={index}
            >
              <div className="relative w-auto h-96">
                <Image src={image} className="w-full h-full object-cover" alt={title} fill />
              </div>
              <p className="mt-4 text-md">{title}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
