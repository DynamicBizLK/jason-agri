import Head from "next/head";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";

const ProductsPage = ({ products }) => {
  const imgBuilder = imageUrlBuilder({
    projectId: "w4w76529",
    dataset: "production",
  });

  return (
    <>
      <Head>
        <title>Products | Jason Agri Exports (PVT) Limited</title>
      </Head>

      <main>
        <section className="relative h-[30rem] w-full">
          <Image alt="BG Image" src="/guava.jpg" className="object-cover" fill />
          <div className="absolute top-0 left-0 w-full h-full bg-black/60" />
          <h2 className="absolute top-1/2 left-0 w-full text-5xl text-center text-white font-bold">Products</h2>
        </section>

        <section className="product-list container max-w-6xl my-16 space-y-8">
          <h3 className="text-4xl font-semibold text-jasonred">Fresh Fruits</h3>

          {products?.map(({ title, _id, category, mainImage, description }, index) => {
            const imageSrc = imgBuilder.image(mainImage).url();

            return (
              category &&
              category.slug?.current == "fresh-fruits" && (
                <div className="flex items-start border h-96 sm:flex-col sm:h-fit" key={_id}>
                  <div className="relative h-full w-1/2 sm:h-60 sm:w-full">
                    <Image src={imageSrc} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt={title} className="flex-1 w-full h-auto object-cover sm:w-full sm:h-96" fill />
                  </div>
                  <div className="p-4 flex-1">
                    <h3 className="text-3xl font-semibold">{title}</h3>
                    <p className="mb-4 mt-2 h-60 overflow-y-auto scrollbar-hide sm:h-fit">{description}</p>

                    <p className="border border-green-700 text-jasonred py-2 px-3 w-fit mt-2">{category.title}</p>
                  </div>
                </div>
              )
            );
          })}
        </section>

        <section className="product-list container max-w-6xl my-16 space-y-8">
          <h3 className="text-4xl font-semibold text-jasonred">Fresh Vegetables</h3>

          {products?.map(({ title, _id, category, mainImage, description }, index) => {
            const imageSrc = imgBuilder.image(mainImage).url();

            return (
              category &&
              category.slug?.current == "fresh-vegetables" && (
                <div className="flex items-start border h-96 sm:flex-col sm:h-fit" key={_id}>
                  <div className="relative h-full w-1/2 sm:h-60 sm:w-full">
                    <Image src={imageSrc} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt={title} className="flex-1 w-full h-auto object-cover sm:w-full sm:h-96" fill />
                  </div>
                  <div className="p-4 flex-1">
                    <h3 className="text-3xl font-semibold">{title}</h3>
                    <p className="mb-4 mt-2 h-60 overflow-y-auto scrollbar-hide sm:h-fit">{description}</p>

                    <p className="border border-green-700 text-jasonred py-2 px-3 w-fit mt-2">{category.title}</p>
                  </div>
                </div>
              )
            );
          })}
        </section>

        <section className="product-list container max-w-6xl my-16 space-y-8">
          <h3 className="text-4xl font-semibold text-jasonred">Dehydrated Fruits</h3>

          {products?.map(({ title, _id, category, mainImage, description }, index) => {
            const imageSrc = imgBuilder.image(mainImage).url();

            return (
              category &&
              category.slug?.current == "dehydrated-fuits" && (
                <div className="flex items-start border h-96 sm:flex-col sm:h-fit" key={_id}>
                  <div className="relative h-full w-1/2 sm:h-60 sm:w-full">
                    <Image src={imageSrc} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt={title} className="flex-1 w-full h-auto object-cover sm:w-full sm:h-96" fill />
                  </div>
                  <div className="p-4 flex-1">
                    <h3 className="text-3xl font-semibold">{title}</h3>
                    <p className="mb-4 mt-2 h-60 overflow-y-auto scrollbar-hide sm:h-fit">{description}</p>

                    <p className="border border-green-700 text-jasonred py-2 px-3 w-fit mt-2">{category.title}</p>
                  </div>
                </div>
              )
            );
          })}
        </section>

        <section className="product-list container max-w-6xl my-16 space-y-8">
          <h3 className="text-4xl font-semibold text-jasonred">Dehydrated Vegetables</h3>

          {products?.map(({ title, _id, category, mainImage, description }, index) => {
            const imageSrc = imgBuilder.image(mainImage).url();

            return (
              category &&
              category.slug?.current == "dehydrated-vegetables" && (
                <div className="flex items-start border h-96 sm:flex-col sm:h-fit" key={_id}>
                  <div className="relative h-full w-1/2 sm:h-60 sm:w-full">
                    <Image src={imageSrc} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt={title} className="flex-1 w-full h-auto object-cover sm:w-full sm:h-96" fill />
                  </div>
                  <div className="p-4 flex-1">
                    <h3 className="text-3xl font-semibold">{title}</h3>
                    <p className="mb-4 mt-2 h-60 overflow-y-auto scrollbar-hide sm:h-fit">{description}</p>

                    <p className="border border-green-700 text-jasonred py-2 px-3 w-fit mt-2">{category.title}</p>
                  </div>
                </div>
              )
            );
          })}
        </section>

        <section className="product-list container max-w-6xl my-16 space-y-8">
          <h3 className="text-4xl font-semibold text-jasonred">Spices</h3>

          {products?.map(({ title, _id, category, mainImage, description }, index) => {
            const imageSrc = imgBuilder.image(mainImage).url();

            return (
              category &&
              category.slug?.current == "spices" && (
                <div className="flex items-start border h-96 sm:flex-col sm:h-fit" key={_id}>
                  <div className="relative h-full w-1/2 sm:h-60 sm:w-full">
                    <Image src={imageSrc} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt={title} className="flex-1 w-full h-auto object-cover sm:w-full sm:h-96" fill />
                  </div>
                  <div className="p-4 flex-1">
                    <h3 className="text-3xl font-semibold">{title}</h3>
                    <p className="mb-4 mt-2 h-60 overflow-y-auto scrollbar-hide sm:h-fit">{description}</p>

                    <p className="border border-green-700 text-jasonred py-2 px-3 w-fit mt-2">{category.title}</p>
                  </div>
                </div>
              )
            );
          })}
        </section>

        <section className="product-list container max-w-6xl my-16 space-y-8">
          <h3 className="text-4xl font-semibold text-jasonred">Coffee</h3>

          {products?.map(({ title, _id, category, mainImage, description }, index) => {
            const imageSrc = imgBuilder.image(mainImage).url();

            return (
              category &&
              category.slug?.current == "coffee" && (
                <div className="flex items-start border h-96 sm:flex-col sm:h-fit" key={_id}>
                  <div className="relative h-full w-1/2 sm:h-60 sm:w-full">
                    <Image src={imageSrc} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt={title} className="flex-1 w-full h-auto object-cover sm:w-full sm:h-96" fill />
                  </div>
                  <div className="p-4 flex-1">
                    <h3 className="text-3xl font-semibold">{title}</h3>
                    <p className="mb-4 mt-2 h-60 overflow-y-auto scrollbar-hide sm:h-fit">{description}</p>

                    <p className="border border-green-700 text-jasonred py-2 px-3 w-fit mt-2">{category.title}</p>
                  </div>
                </div>
              )
            );
          })}
        </section>
      </main>
    </>
  );
};

export default ProductsPage;

export async function getServerSideProps(context) {
  const query = encodeURIComponent('*[ _type == "product" ]{..., category->}');
  const url = `${process.env.SANITY_URL}/v2021-10-21/data/query/production?query=${query}`;

  const results = await fetch(url).then((res) => res.json());

  if (!results.result || !results.result.length) {
    return {
      props: {
        products: [],
      },
    };
  } else {
    return {
      props: {
        products: results.result,
      },
    };
  }
}
