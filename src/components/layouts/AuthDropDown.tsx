import { Icons } from "@/components/icons";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import type { User } from "@/types";
interface UserProps {
  user: User;
}
function AuthDropDown({ user }: UserProps) {
  if (!user) {
    return (
      <Button size="sm" asChild>
        <Link to="/signIn">Sign In</Link>
        <span className="sr-only">Sign In</span>
      </Button>
    );
  }
  return <div>AuthDropDown</div>;
}

export default AuthDropDown;
