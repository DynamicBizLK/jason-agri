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
      <h3 className="text-green-700 font-semibold text-3xl text-center">Products</h3>

      <div className="mt-8 grid grid-cols-3 gap-6 h-max md:grid-cols-2 sm:grid-cols-1 sm:w-full">
        {products?.slice(0, 3).map(({ title, _id, mainImage, description }, index) => {
          const imageSrc = imgBuilder.image(mainImage).url();

          return (
            <motion.div
              initial={index % 2 == 0 ? { y: "-100vw" } : { y: "100vw" }}
              transition={{
                duration: 0.5,
              }}
              animate={isInView && { y: "0%" }}
              className=""
              key={_id}
            >
              <div className="relative h-80">
                <Image src={imageSrc} alt="" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover sm:w-full sm:h-96" fill />
              </div>
              <div className="border border-t-0 p-4">
                <h3 className="text-3xl font-semibold mb-2">{title}</h3>
                <p className="max-w-sm">{truncate(description, 200)}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      <Link href="/products">
        <button className="bg-green-700 font-medium py-3 px-5 rounded-md mt-8 text-white block mx-auto">View All Products</button>
      </Link>
    </section>
  );
};

export default Products;
