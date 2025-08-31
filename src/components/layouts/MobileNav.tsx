import type { MainNavItem } from "@/types";
import { Icons } from "@/components/icons";
import { siteConfig } from "@/config/site";
interface MainNavProps {
  items?: MainNavItem[];
}
export default function MobileNav({ items }: MainNavProps) {
  return <div>MobileNav</div>;
}
