import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const scrollRef = useRef(null);

  return (
    <section ref={scrollRef} id="about-us" className="container max-w-6xl my-14 scroll-m-32 overflow-hidden">
      <div className="flex gap-8 md:flex-col">
        <motion.div
          whileInView={{ x: "0" }}
          initial={{ x: "-100%" }}
          transition={{
            duration: 0.5,
          }}
          viewport={{ once: true }}
          className="max-w-sm md:max-w-full"
        >
          <h3 className="text-jasonred font-semibold text-3xl">About Us</h3>
          <p className="mt-4 text-lg">
            Jason Agri Exports (Pvt) Limited is a company offering services to our customers and manufactures to meet their needs in agri supply chain.
            <br />
            It includes cultivation of vegetables, fruits, herbs, spices and similar items and dehydration of fresh products according to accepted food & hygenic standards.
            <br />
            Jason Agri Exports provides services for sourcing of raw materials, storage, sample creation, management of dehydration process quality control, ethical & social compliances. logistics and
            management of the export process until the product reaches the end customer.
          </p>

          <Link href="/about-us">
            <button className="bg-jasonred font-medium py-3 px-5 rounded-md mt-4 text-white">Learn More</button>
          </Link>
        </motion.div>
        <motion.div
          whileInView={{ x: "0" }}
          initial={{ x: "100%" }}
          transition={{
            duration: 0.5,
          }}
          viewport={{ once: true }}
        >
          <Image src="/img-grid.png" height="1500" width="1500" alt="" />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
