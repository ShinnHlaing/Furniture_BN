import { Link } from "react-router";
import { Icons } from "@/components/icons";
import BannerImg from "@/data/images/house.webp";

function Login() {
  return (
    <div className="relative">
      <Link to="/" className="fixed top-1.5 left-8 flex items-center">
        <Icons.logo className="mr-2 size-6" aria-hidden="true" />
        <span className="text-foreground/80 hover:text-foreground text-lg font-bold tracking-tight transition-colors">
          Furniture Shop
        </span>
      </Link>
      <div className=""></div>
      {/* banner image */}
      <div className="">
        <img src={BannerImg} alt="Bannger Image" className="" />
      </div>
    </div>
  );
}

export default Login;
