import { Link } from "react-router";
import { Icons } from "@/components/icons";
import BannerImg from "@/data/images/house.webp";
import LoginForm from "@/components/auth/LoginForm";
function Login() {
  return (
    <div className="relative">
      <Link to="/" className="fixed top-1.5 left-8 flex items-center">
        <Icons.logo className="mr-2 size-6" aria-hidden="true" />
        <span className="text-foreground/80 hover:text-foreground text-lg font-bold tracking-tight transition-colors">
          Furniture Shop
        </span>
      </Link>
      <main className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
        <div className="flex w-full place-items-center px-4 lg:px-0">
          <LoginForm />
        </div>
        {/* banner image */}
        <div className="relative hidden size-full lg:block">
          <img
            src={BannerImg}
            alt="Bannger Image"
            className="absolute inset-0 object-cover"
          />
        </div>
      </main>
    </div>
  );
}

export default Login;
