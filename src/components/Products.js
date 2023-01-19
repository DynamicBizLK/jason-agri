import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import imageUrlBuilder from "@sanity/image-url";

const Products = ({ products }) => {
  const scrollRef = useRef(null);
  const isInView = useInView(scrollRef);

  const imgBuilder = imageUrlBuilder({
    projectId: "w4w76529",
    dataset: "production",
  });

  const truncate = (string, n) => {
    return string?.length > n ? `${string.substr(0, n - 1)}...` : string;
  };

  return (
    <section id="products" className="container max-w-6xl my-16 scroll-m-28 overflow-hidden" ref={scrollRef}>
      <h3 className="text-jasonred font-semibold text-3xl text-center">Products</h3>

      <div className="grid grid-cols-5 gap-2 md:grid-cols-4 sm:grid-cols-3">
        {Array(19)
          .fill(0)
          .map((_, i) => {
            const image = `/products/product-${i + 1}.jpg`;

            return (
              <motion.div
                initial={i % 2 == 0 ? { y: "-100vw" } : { y: "100vw" }}
                transition={{
                  duration: 0.5,
                }}
                animate={isInView && { y: "0%" }}
                key={i}
                className="relative h-64 w-full"
              >
                <Image src={image} alt="" className="w-full object-cover hover:scale-110 transition-transform duration-200 ease-in-out" fill />
              </motion.div>
            );
          })}
      </div>
    </section>
  );
};

export default Products;
