import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Services = () => {
  const services = [
    "Sourcing Of Raw Materials",
    "Sample Creation",
    "Product Design And Development",
    "Production Management",
    "Merchandising",
    "Quality Control",
    "Logistics Management",
    "Social Compliance",
    "Manufacturing",
    "Third Party Manufactures Services",
  ];

  return (
    <section className="container max-w-6xl my-14 scroll-m-32 overflow-hidden" id="services">
      <h3 className="text-jasonred font-semibold text-3xl text-center">Services</h3>

      <div className="grid grid-cols-5 text-lg gap-4 mt-8 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        {services.map((service, index) => {
          return (
            <motion.div
              whileInView={{ y: "0", opacity: 100 }}
              initial={{ y: "-100%", opacity: 0 }}
              transition={{
                duration: 0.5,
                delay: index / 100,
              }}
              viewport={{ once: true }}
              className="border p-4 h-28 bg-gradient-to-tr from-jasonred to-red-900 shadow-green-700 text-white"
              key={index}
            >
              <p>{service}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
