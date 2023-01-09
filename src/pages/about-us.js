import Head from "next/head";
import Image from "next/image";

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About | Jason Agri Exports (PVT) Limited</title>
      </Head>

      <main>
        <section className="relative h-[30rem] w-full">
          <Image alt="BG Image" src="/guava.jpg" className="object-cover" fill />
          <div className="absolute top-0 left-0 w-full h-full bg-black/60" />
          <h2 className="absolute top-1/2 left-0 w-full text-5xl text-center text-white font-bold">About Us</h2>
        </section>

        <section className="container max-w-6xl text-lg mt-16">
          <div className="flex gap-8">
            <p className="max-w-sm text-lg text-justify sm:max-w-full">
              Jason Agri Exports (PVT) Limited is more than a one-stop solution provider. We offer wide range of services to our customers and manufactures to meet their needs along the agri supply
              chain including production of Vegetables, Fruits, Herbs, Spices and similar items. Our agri chain management services sourcing of raw materials, sample creation, product design and
              development, production management, merchandising, quality control, logistics management, social compliance, manufacturing and third party manufactures services.
            </p>

            <div className="sm:hidden">
              <Image src="/img-grid.png" height="1500" width="1500" alt="" />
            </div>
          </div>

          <h3 className="text-green-700 font-semibold text-3xl mt-8 mb-4">Our Leadership Team</h3>

          <p>We credit our strength and endurance to a consistent approach to managing our business and pursuing a sustainable agri supply chain. Learn more about Jason Leadership Executive.</p>
          <p>
            Dr. Prasanna George Abeyratne is the Founder and Chairman of Jason Group. He is responsible for the strategic planning and overall management of the Company’s business development. Dr.
            Prasanna has almost 25 years of experience in business management in both local and international markets. Currently, he is leading the transformation of Jason to a data-centric supply
            chain management company.
          </p>

          <h3 className="text-green-700 font-semibold text-3xl mt-8 mb-4">Objectives</h3>

          <p>
            The Company shall carry out exports of all types of dehydrated & fresh foods such as vegetables, fruits, spices, herbs and fish„ and also similar items to international market, and all
            kinds of business transactions allowed under the law of the Land also in accordance with the companies Act.{" "}
          </p>

          <h4 className="text-3xl text-green-700 font-semibold mt-8 mb-4">Vision</h4>
          <p className="text-lg">Our stakeholders recognize us in creative solutions reducing vulnerabilities in every step of the Agri supply chain process. </p>

          <h4 className="text-3xl text-green-700 font-semibold mt-8 mb-4">Mission</h4>
          <p className="text-lg">Who are Agri supply chain risk managers who mitigates and rebalances risk for agriculture industry. </p>

          <h4 className="text-3xl text-green-700 font-semibold mt-8 mb-4">Values</h4>
          <ol className="text-lg ml-5 list-decimal">
            <li>
              <span className="font-medium">Value Talents: </span> People are our assets.
            </li>
            <li>
              <span className="font-medium">Integrity:</span> Utmost honesty and trustworthiness.
            </li>
            <li>
              <span className="font-medium">Passion:</span> Burning desire to be the best in business.
            </li>
            <li>
              <span className="font-medium">Performance:</span> Exceed customers&apos; expectations.
            </li>
            <li>
              <span className="font-medium">Innovation:</span> Every problem has many unique solution.
            </li>
          </ol>
        </section>
      </main>
    </>
  );
};

export default AboutPage;
