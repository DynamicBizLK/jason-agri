import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const scrollRef = useRef(null);

  return (
    <>
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
            <h3 className="text-green-700 font-semibold text-3xl">About Us</h3>
            <p className="mt-4 text-lg text-justify">
              Jason Agri Exports (PVT) Limited is more than a one-stop solution provider. We offer wide range of services to our customers and manufactures to meet their needs along the agri supply
              chain including production of Vegetables, Fruits, Herbs, Spices and similar items. Our agri chain management services sourcing of raw materials, sample creation, product design and
              development, production management, merchandising, quality control, logistics management, social compliance, manufacturing and third party manufactures services.
            </p>

            <Link href="/about-us">
              <button className="bg-green-700 font-medium py-3 px-5 rounded-md mt-4 text-white">Learn More</button>
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
    </>
  );
};

export default About;
