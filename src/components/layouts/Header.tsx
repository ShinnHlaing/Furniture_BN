import MainNav from "./MainNav";
import MobileNav from "./MobileNav";
import { siteConfig } from "@/config/site";

export default function Header() {
  return (
    <header className="w-full border-b">
      <div className="container mx-auto flex h-16 items-center">
        <MainNav items={siteConfig.mainNav} />
        <MobileNav items={siteConfig.mainNav} />
      </div>
    </header>
  );
}
