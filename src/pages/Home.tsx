import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import Couch from "@/data/images/couch.png";
const Home = () => {
  return (
    <div className="container mx-auto mt-16">
      <div className="flex flex-col justify-center gap-20 lg:flex-row lg:justify-between">
        {/* text content */}
        <div className="my-8 text-center lg:mt-16 lg:mb-0 lg:w-2/5 lg:text-left">
          <h1 className="mb-4 text-4xl font-extrabold text-[#3b5d50] lg:mb-8 lg:text-6xl">
            Modern Interior Design Studio
          </h1>
          <p className="mb-6 lg:mb-8">
            Furniture is an essential component of any living space, providing
            functionality, comfort, and aesthetic appeal.
          </p>
          {/* btn */}
          <div className="">
            <Button
              asChild
              className="mr-2 rounded-full bg-teal-500 px-8 py-6 text-base font-bold"
            >
              <Link to="#">Shop Now</Link>
            </Button>
            <Button
              asChild
              className="rounded-full px-8 py-6 text-base"
              variant="outline"
            >
              <Link to="#">Explore</Link>
            </Button>
          </div>
        </div>
        {/* image content */}
        <img src={Couch} alt="" className="w-full lg:w-3/5" />
      </div>
    </div>
  );
};

export default Home;
