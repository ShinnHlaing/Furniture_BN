import MainNav from "./MainNav";
import MobileNav from "./MobileNav";
import { siteConfig } from "@/config/site";
import { ModeToggle } from "@/components/mode-toggle";
export default function Header() {
  return (
    <header className="w-full border-b">
      <div className="container mx-auto flex h-16 items-center">
        <MainNav items={siteConfig.mainNav} />
        <MobileNav items={siteConfig.mainNav} />
        <div className="mr-4 flex flex-1 items-center justify-end space-x-4 lg:mr-0">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
