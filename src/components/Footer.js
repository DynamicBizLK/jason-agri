import Link from "next/link";

const Footer = () => {
  return (
    <div className="container max-w-6xl my-12 scroll-m-24">
      <hr className="my-8 border-black" />
      <div className="flex items-center justify-between sm:flex-col gap-4">
        <p>Copyright &copy; {new Date().getFullYear()} Jason Agri Exports (PVT) Limited.</p>

        <p>
          Web Design by
          <a href="https://dynamicbiz.org.lk/" target="_blank" rel="noopener noreferrer">
            <span className="font-medium"> Dynamic Biz</span>.
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
