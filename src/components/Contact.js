import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Contact = () => {
  const scrollRef = useRef(null);
  const isInView = useInView(scrollRef);

  return (
    <section id="contact" className="container max-w-6xl my-16 scroll-m-28 overflow-hidden" ref={scrollRef}>
      <h3 className="text-jasonred font-semibold text-3xl text-center">Contact</h3>

      <div className="grid grid-cols-2 mt-8 gap-8 sm:grid-cols-1">
        <motion.div
          initial={{ x: "-100vw" }}
          transition={{
            duration: 0.5,
          }}
          animate={isInView && { x: "0%" }}
          className="space-y-8"
        >
          <div className="flex items-start gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 -3 24 24" className="w-7 mt-1">
              <path
                className="fill-jasonred"
                fillRule="evenodd"
                d="M23.4 1.2 13.148 8.977a2 2 0 0 1-2.294 0L.6 1.2A2.995 2.995 0 0 1 3 0h18c.982 0 1.853.472 2.4 1.2zm.6 2.054V15a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3.254l9.706 7.361a4 4 0 0 0 4.588 0L24 3.255z"
                clipRule="evenodd"
              />
            </svg>

            <div className="space-y-1">
              <p className="text-xl font-medium uppercase">Email Us</p>
              <p className="text-lg text-neutral-700">Our friendly team is here to help.</p>
              <p className="text-lg underline underline-offset-2 font-medium">
                <a href="mailto:prasadperera77@icloud.com">prasadperera77@icloud.com</a>
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-3 0 24 24" className="w-7 mt-1">
              <path
                className="fill-jasonred"
                fillRule="evenodd"
                d="M9.768 23.087a1.002 1.002 0 0 1-1.537 0C2.745 16.496 0 11.68 0 8.638 0 3.868 4.23 0 9 0s9 3.867 9 8.638c0 3.042-2.744 7.858-8.232 14.449zM9 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
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

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.169118983935!2d79.93016911477191!3d6.749218495121142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc4fa91c06333887a!2zNsKwNDQnNTcuMiJOIDc5wrA1NSc1Ni41IkU!5e0!3m2!1sen!2slk!4v1673257767826!5m2!1sen!2slk"
            width="100%"
            height="200"
            className=" pl-11 border-none"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <div className="flex items-start gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-7 mt-1">
              <path
                className="fill-jasonred"
                fillRule="evenodd"
                d="M7.457 16.537c3.88 3.878 6.807 5.7 8.986 6.48 2.23.798 3.634.489 4.368.241.42-.141.747-.427.979-.675a5.78 5.78 0 0 0 .653-.872c.38-.606.703-1.292.922-1.797.415-.957.013-2.015-.825-2.518L18.5 14.973a2.059 2.059 0 0 0-2.515.31l-.754.753c-.774-.39-2.29-1.296-4.135-3.14-1.844-1.844-2.751-3.36-3.14-4.135l.754-.754a2.059 2.059 0 0 0 .31-2.515L6.592 1.45C6.091.612 5.033.21 4.076.625c-.505.22-1.191.543-1.797.922-.302.19-.61.408-.872.653-.248.232-.534.56-.675.979-.248.734-.557 2.139.241 4.368.78 2.18 2.602 5.107 6.48 8.986l.004.004Z"
                clipRule="evenodd"
              />
            </svg>

            <div className="space-y-1">
              <p className="text-xl font-medium uppercase">Call Us</p>
              <p className="text-lg underline underline-offset-2 font-medium">
                <a href="tel:+94762630661">+94 11 270 6386</a>
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 308 308" className="w-7 fill-jasonred">
              <path d="M227.904 176.981c-.6-.288-23.054-11.345-27.044-12.781-1.629-.585-3.374-1.156-5.23-1.156-3.032 0-5.579 1.511-7.563 4.479-2.243 3.334-9.033 11.271-11.131 13.642-.274.313-.648.687-.872.687-.201 0-3.676-1.431-4.728-1.888-24.087-10.463-42.37-35.624-44.877-39.867-.358-.61-.373-.887-.376-.887.088-.323.898-1.135 1.316-1.554 1.223-1.21 2.548-2.805 3.83-4.348a140.77 140.77 0 0 1 1.812-2.153c1.86-2.164 2.688-3.844 3.648-5.79l.503-1.011c2.344-4.657.342-8.587-.305-9.856-.531-1.062-10.012-23.944-11.02-26.348-2.424-5.801-5.627-8.502-10.078-8.502-.413 0 0 0-1.732.073-2.109.089-13.594 1.601-18.672 4.802C90 87.918 80.89 98.74 80.89 117.772c0 17.129 10.87 33.302 15.537 39.453.116.155.329.47.638.922 17.873 26.102 40.154 45.446 62.741 54.469 21.745 8.686 32.042 9.69 37.896 9.69h.001c2.46 0 4.429-.193 6.166-.364l1.102-.105c7.512-.666 24.02-9.22 27.775-19.655 2.958-8.219 3.738-17.199 1.77-20.458-1.348-2.216-3.671-3.331-6.612-4.743z" />
              <path d="M156.734 0C73.318 0 5.454 67.354 5.454 150.143c0 26.777 7.166 52.988 20.741 75.928L.212 302.716a3.998 3.998 0 0 0 4.999 5.096l79.92-25.396c21.87 11.685 46.588 17.853 71.604 17.853C240.143 300.27 308 232.923 308 150.143 308 67.354 240.143 0 156.734 0zm0 268.994c-23.539 0-46.338-6.797-65.936-19.657a3.996 3.996 0 0 0-3.406-.467l-40.035 12.726 12.924-38.129a4.002 4.002 0 0 0-.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677 0-65.543 53.754-118.867 119.826-118.867 66.064 0 119.812 53.324 119.812 118.867.001 65.535-53.746 118.851-119.811 118.851z" />
            </svg>

            <div className="space-y-1">
              <p className="text-xl font-medium uppercase">Whatsapp</p>
              <p className="text-lg underline underline-offset-2 font-medium">
                <a href="https://wa.me/94762630661" target="_blank" rel="noopener noreferrer">
                  +94 76 263 0661
                </a>
              </p>
            </div>
          </div>
        </motion.div>

        <motion.form
          className="sm:w-full"
          action=""
          method="POST"
          initial={{ x: "100vw" }}
          transition={{
            duration: 0.5,
          }}
          animate={isInView && { x: "0%" }}
        >
          <div className="flex mb-6 space-x-3">
            <div className="w-full md:w-1/2 md:mb-0">
              <label className="block tracking-wide text-black mb-2" htmlFor="firstName">
                First Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 border rounded p-3 leading-tight focus:outline-none focus:bg-gray-100"
                id="grid-first-name"
                type="text"
                name="firstName"
                placeholder="John"
                required
              />
            </div>
            <div className="w-full md:w-1/2">
              <label className="block tracking-wide text-black mb-2" htmlFor="lastName">
                Last Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 border border-gray-200 rounded p-3 leading-tight focus:outline-none focus:bg-gray-100"
                id="grid-last-name"
                type="text"
                name="lastName"
                placeholder="Doe"
                required
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full px-3">
              <label className="block tracking-wide text-black mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 border border-gray-200 rounded p-3 leading-tight focus:outline-none focus:bg-gray-100"
                id="email"
                type="email"
                name="mail"
                placeholder="johndoe@cool.mail"
                required
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full px-3">
              <label className="block tracking-wide text-black mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="appearance-none block w-full bg-gray-200 border border-gray-200 rounded p-3 mb-3 leading-tight focus:outline-none focus:bg-gray-100 h-48 resize-none"
                id="message"
                name="message"
                placeholder="I would like to ask you..."
                required
              ></textarea>
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3">
              <button
                className="shadow bg-jasonred text-white outline-none text-xl font-medium py-2 px-6 rounded"
                type="submit"
              >
                Send
              </button>
            </div>
            <div className="md:w-2/3"></div>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
