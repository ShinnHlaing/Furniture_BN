import MainNav from "@/components/layouts/MainNav";
import { siteConfig } from "@/config/site";
const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="container flex h-16 items-center justify-center">
        <MainNav items={siteConfig.mainNav} />
      </div>
    </header>
  );
};

export default Header;
