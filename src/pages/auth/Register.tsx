import RegisterForm from "@/components/auth/RegisterForm";
import { Link } from "react-router";
import { Icons } from "@/components/icons";
function Register() {
  return (
    <div className="flex min-h-screen place-items-center">
      <Link to="/" className="fixed top-1.5 left-8 flex items-center">
        <Icons.logo className="mr-2 size-6" aria-hidden="true" />
        <span className="text-foreground/80 hover:text-foreground text-lg font-bold tracking-tight transition-colors">
          Furniture Shop
        </span>
      </Link>
      <RegisterForm />
    </div>
  );
}

export default Register;
