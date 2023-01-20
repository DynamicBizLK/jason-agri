import Head from "next/head";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper";

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
          <div className="flex gap-8 my-4">
            <p className="max-w-sm text-lg sm:max-w-full">
              Jason Agri Exports (PVT) Limited is a company offering services to our customers and manufactures to meet their needs in agri supply chain.
              <br />
              It includes cultivation of vegetables, fruits, herbs, spices and similar items and dehydration of fresh products according to accepted food & hygenic standards.
              <br />
              Jason Agri Exports provides services for sourcing of raw materials, storage, sample creation, management of dehydration process quality control, ethical & social compliances. logistics
              and management of the export process until the product reaches the end customer.
            </p>

            <div className="sm:hidden">
              <Image src="/img-grid.png" height="1500" width="1500" alt="" />
            </div>
          </div>
        </section>

        <section className="container max-w-6xl text-lg mt-16">
          <h3 className="text-jasonred font-semibold text-3xl mt-8 mb-4">Our Leadership Team</h3>
          <p>We credit our strength and endurance to a consistent approach to managing our business and pursuing a sustainable agri supply chain. Learn more about Jason Leadership Executive.</p>

          <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 mt-8">
            <div className="border p-4">
              <div className="relative w-32 h-32 block m-auto mb-4">
                <Image alt="Prasanna George Abeyratne" src="/team/prasanna-abeyratne.jpeg" className="rounded-full object-cover" quality={100} fill sizes="100vw" />
              </div>
              <h2 className="text-xl font-semibold text-center">Prasanna Abeyratne</h2>
              <h3 className="text-center mb-2">Chairman / Executive Director</h3>
              <p className="text-base">
                Prasanna Abeyratne is the Founder and Chairman of Jason group. He is responsible for the strategic planning and overall management of the Company's business development. Prasanna has
                almost 25 years of experience in the business management in both local and international markets. Currently, he is leading the transformation of Jason group to a data-centric supply
                chain management company.
                <br />
                Prasanna is a graduate of Business Administration (Special), Jayawardenapura University of Sri Lanka and MBA in USA.
              </p>
            </div>

            <div className="border p-4">
              <div className="relative w-32 h-32 block m-auto mb-4">
                <Image alt="Priyani Perera" src="/team/priyani-perera.jpeg" className="rounded-full object-cover" quality={100} fill sizes="100vw" />
              </div>
              <h2 className="text-xl font-semibold text-center">Priyani Perera</h2>
              <h3 className="text-center mb-2">Chief Finance Officer</h3>
              <p className="text-base">
                Priyanij Perera is a management accountant and the Chief Finance Officer of the group. She has 25 years of experience working as a Head of Finance in the Finance Sector. She is
                responsible for the group’s finances. Priyani obtained ACMA in the UK.
              </p>
            </div>

            <div className="border p-4">
              <div className="relative w-32 h-32 block m-auto mb-4">
                <Image alt="Prasanna George Abeyratne" src="/team/dunstan-prasad.jpg" className="rounded-full object-cover" quality={100} fill sizes="100vw" />
              </div>
              <h2 className="text-xl font-semibold text-center">Prasad Perera</h2>
              <h3 className="text-center mb-2">Director</h3>
              <p className="text-base">
                Prasad Perera is the Director of the Jason group. He is responsible for the Agri supply chain process. Prasad has 20 years of experience in the merchandising and supply chain
                management in the international market. He is currently leading Jason group to transform the traditional Agriculture into supply chain business model.
                <br />
                Prasad obtained a Diploma in Merchandising and Supply Chain Management at Moratuwa University and Polytechnic University Hong Kong.
              </p>
            </div>

            <div className="border p-4">
              <div className="relative w-32 h-32 block m-auto mb-4">
                <Image alt="Prasanna George Abeyratne" src="/team/shanthi-abesekara.jpg" className="rounded-full object-cover object-top" quality={100} fill sizes="100vw" />
              </div>
              <h2 className="text-xl font-semibold text-center">Shanthi Abeysekera</h2>
              <h3 className="text-center mb-2">Associate Director</h3>
              <p className="text-base">
                Shanthi Abeysekera is the Associate Director of Jason group.She is responsible for the sales and marketing function with expertise in local manufacturing operation.At present she is
                working as the president of Seva Vanitha Branch Sri Lanka Army Corps of Agriculture and Livestock.
              </p>
            </div>

            <div className="border p-4">
              <div className="relative w-32 h-32 block m-auto mb-4">
                <Image alt="Prasanna George Abeyratne" src="/team/shani-lamahewage.jpeg" className="rounded-full object-cover" quality={100} fill sizes="100vw" />
              </div>
              <h2 className="text-xl font-semibold text-center">Shani Lamahewage</h2>
              <h3 className="text-center mb-2">Associate Director</h3>
              <p className="text-base">
                Shani Lamahewage is the Associate Director of Jason group. She is responsible for the sales and marketing function with expertise in local manufacturing operation and development of
                new products. At present.she is working as a Consultant and Lecturer in dehydration projects in Sri Lanka.
              </p>
            </div>
          </div>

          <div className="text-center my-8 sm:overflow-scroll">
            <h2 className="mb-4 text-2xl font-medium text-jasonred">Organizational Structure</h2>
            <div className="relative w-5/6 block mx-auto sm:h-full sm:w-[800px]">
              <Image src="/team/organization.png" height={600} width={1000} alt="w-full h-full" />
            </div>
          </div>
        </section>

        <section className="container max-w-6xl text-lg mt-4">
          <h3 className="text-jasonred font-semibold text-3xl mt-8 mb-4">Objectives</h3>

          <p>The Company shall carry out exports of all types of dehydrated & fresh foods such as vegetables, fruits, spices, herbs and also similar items to international market.</p>

          <h4 className="text-3xl text-jasonred font-semibold mt-8 mb-4">Vision</h4>
          <p className="text-lg">Our stakeholders recognize us in providing creative solutions reducing vulnerabilities in every step of the Agri supply chain process. </p>

          <h4 className="text-3xl text-jasonred font-semibold mt-8 mb-4">Mission</h4>
          <p className="text-lg">To mitigates and rebalances risks for agriculture industry. </p>

          <h4 className="text-3xl text-jasonred font-semibold mt-8 mb-4">Values</h4>
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

        <section className="container max-w-6xl text-lg mt-16">
          <h4 className="text-2xl text-jasonred font-medium mt-8">Our Head Quarters and Manufacturing Plant</h4>
          <p className="my-2">Our dehydration processing plant full equipped with new technologies and highly hygienic conditions to make sure our customers get healthy and high quality foods.</p>
          <div className="w-1/2 h-fit m-auto lg:w-2/3 md:w-full">
            <Swiper
              slidesPerView={1}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="mySwiper my-8"
              loop={true}
            >
              <SwiperSlide>
                <Image src="/office/office-1.jpg" width={600} height={350} className="h-fit w-auto" alt="Office" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src="/office/office-2.jpg" width={600} height={350} className="h-fit w-auto" alt="Office" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src="/office/office-3.jpg" width={600} height={350} className="h-fit w-auto" alt="Office" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src="/office/office-4.jpg" width={600} height={350} className="h-fit w-auto" alt="Office" />
              </SwiperSlide>
            </Swiper>
          </div>

          <h4 className="text-2xl text-jasonred font-medium mt-8">Our Luxury Villa for Our Valuable Customers</h4>
          <p className="my-2">Located facing bolgoda lake where customers can relax seeing our plantation projects , production process and also natural beauty with fresh air of the island.</p>
          <div className="w-1/2 h-fit m-auto lg:w-2/3 md:w-full">
            <Swiper
              slidesPerView={1}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="mySwiper my-8"
              loop={true}
            >
              <SwiperSlide>
                <Image src="/villa/villa-1.jpg" width={600} height={350} className="h-96 w-fit" alt="Villa" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src="/villa/villa-2.jpg" width={600} height={350} className="h-96 w-fit" alt="Villa" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src="/villa/villa-3.jpg" width={600} height={350} className="h-96 w-fit" alt="Villa" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src="/villa/villa-4.jpg" width={600} height={350} className="h-96 w-fit" alt="Villa" />
              </SwiperSlide>
            </Swiper>
          </div>
        </section>

        <section className="container max-w-6xl text-lg mt-4">
          <h3 className="text-jasonred font-semibold text-3xl mt-8 mb-4">Certifications & Awards</h3>

          <p>At present out manufacturing operation is under audit progress obtain below certificates.</p>

          <div className="grid grid-cols-8 gap-4 mt-8 md:grid-cols-5 sm:grid-cols-3">
            <Image src="/iso.jpeg" width={200} height={200} />
            <Image src="/haccp.jpeg" width={200} height={200} />
            <Image src="/gmp.jpeg" width={200} height={200} />
          </div>
        </section>
      </main>
    </>
  );
};

export default AboutPage;
