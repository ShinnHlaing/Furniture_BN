import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import Couch from "@/data/images/couch.png";
const Home = () => {
  return (
    <div className="container mx-auto my-16">
      <div className="flex flex-col items-center justify-between gap-20 lg:flex-row">
        {/* text content */}
        <div className="text-center lg:text-left">
          <h1 className="">Modern Interior Design Studio</h1>
          <p className="">
            Furniture is an essential component of any living space, providing
            functionality, comfort, and aesthetic appeal.
          </p>
          <div className="">
            <Button>
              <Link to="#">Shop Now</Link>
            </Button>
            <Button>
              <Link to="#">Explore</Link>
            </Button>
          </div>
        </div>
        {/* image content */}
        <img src={Couch} alt="" className="" />
      </div>
    </div>
  );
};

export default Home;
