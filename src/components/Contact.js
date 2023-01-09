import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Contact = () => {
  const scrollRef = useRef(null);
  const isInView = useInView(scrollRef);

  return (
    <section id="contact" className="container max-w-6xl my-16 scroll-m-28 overflow-hidden" ref={scrollRef}>
      <h3 className="text-green-700 font-semibold text-3xl text-center">Contact</h3>

      <div className="grid grid-cols-2 mt-8 gap-8 sm:grid-cols-1">
        <motion.div
          initial={{ x: "-100vw" }}
          transition={{
            duration: 0.5,
          }}
          animate={isInView && { x: "0%" }}
          className="space-y-8"
        >
          <h2 className="text-4xl">We&apos;d Love to Hear From You!</h2>

          <div className="flex items-start gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-3 0 24 24" className="w-7 mt-1">
              <path
                className="fill-green-700"
                fillRule="evenodd"
                d="M9.768 23.087a1.002 1.002 0 0 1-1.537 0C2.745 16.496 0 11.68 0 8.638 0 3.868 4.23 0 9 0s9 3.867 9 8.638c0 3.042-2.744 7.858-8.232 14.449zM9 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                clipRule="evenodd"
              />
            </svg>

            <div className="space-y-1">
              <p className="text-xl font-medium uppercase">Office</p>
              <p className="text-lg text-neutral-700">Our friendly team is here to help.</p>
              <p className="text-lg underline underline-offset-2 font-medium">
                <a href="mailto:jasonagriexports@gmail.com">jasonagriexports@gmail.com</a>
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-7 mt-1">
              <path
                className="fill-green-700"
                fillRule="evenodd"
                d="M7.457 16.537c3.88 3.878 6.807 5.7 8.986 6.48 2.23.798 3.634.489 4.368.241.42-.141.747-.427.979-.675a5.78 5.78 0 0 0 .653-.872c.38-.606.703-1.292.922-1.797.415-.957.013-2.015-.825-2.518L18.5 14.973a2.059 2.059 0 0 0-2.515.31l-.754.753c-.774-.39-2.29-1.296-4.135-3.14-1.844-1.844-2.751-3.36-3.14-4.135l.754-.754a2.059 2.059 0 0 0 .31-2.515L6.592 1.45C6.091.612 5.033.21 4.076.625c-.505.22-1.191.543-1.797.922-.302.19-.61.408-.872.653-.248.232-.534.56-.675.979-.248.734-.557 2.139.241 4.368.78 2.18 2.602 5.107 6.48 8.986l.004.004Z"
                clipRule="evenodd"
              />
            </svg>

            <div className="space-y-1">
              <p className="text-xl font-medium uppercase">Office</p>
              <p className="text-lg text-neutral-700">Come say hello at our office HQ.</p>
              <p className="text-lg  font-medium">
                2/50, Henathotupola Road, <br />
                Off Pangnananda Mawatha, Kahapola.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 -3 24 24" className="w-7 mt-1">
              <path
                className="fill-green-700"
                fillRule="evenodd"
                d="M23.4 1.2 13.148 8.977a2 2 0 0 1-2.294 0L.6 1.2A2.995 2.995 0 0 1 3 0h18c.982 0 1.853.472 2.4 1.2zm.6 2.054V15a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3.254l9.706 7.361a4 4 0 0 0 4.588 0L24 3.255z"
                clipRule="evenodd"
              />
            </svg>

            <div className="space-y-1">
              <p className="text-xl font-medium uppercase">Office</p>
              <p className="text-lg text-neutral-700">Mon-Fri from 8am to 4pm</p>
              <p className="text-lg underline underline-offset-2 font-medium">
                <a href="tel:+94762630661">+94 76 263 0661</a>
              </p>
            </div>
          </div>
        </motion.div>

        <motion.iframe
          initial={{ x: "100vw" }}
          transition={{
            duration: 0.5,
          }}
          animate={isInView && { x: "0%" }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.169118983935!2d79.93016911477191!3d6.749218495121142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc4fa91c06333887a!2zNsKwNDQnNTcuMiJOIDc5wrA1NSc1Ni41IkU!5e0!3m2!1sen!2slk!4v1673257767826!5m2!1sen!2slk"
          width="100%"
          height="425"
          className=" border-none"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></motion.iframe>
      </div>
    </section>
  );
};

export default Contact;
