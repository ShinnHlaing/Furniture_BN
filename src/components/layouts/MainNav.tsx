import React from "react";
import { Link } from "react-router";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import type { MainNavItem } from "@/types";
import { Icons } from "@/components/icons";
import { siteConfig } from "@/config/site";
interface MainNavProps {
  items?: MainNavItem[];
}
//
const MainNav = ({ items }: MainNavProps) => {
  return (
    <div className="hidden gap-6 lg:flex">
      <Link to="/" className="flex items-center space-x-2">
        <Icons.logo className="size-7" aria-hidden="true" />
        <span className="inline-block font-bold">{siteConfig.name}</span>
        <span className="sr-only">Home</span>
      </Link>
      <NavigationMenu>
        <NavigationMenuList>
          {items?.[0]?.card ? (
            <NavigationMenuItem>
              <NavigationMenuTrigger>{items[0].title}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        to="/about"
                        className="from-muted/50 to-muted flex size-full flex-col justify-end rounded-md bg-gradient-to-b p-6 no-underline outline-none select-none focus:shadow-md"
                      >
                        <Icons.logo className="size-6" aria-hidden="true" />
                        <div className="mt-4 mb-2 text-lg font-medium">
                          Furniture Shop
                        </div>
                        <p className="text-muted-foreground text-sm leading-tight">
                          {siteConfig.description}
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  {items[0].card.map((item) => (
                    <ListItem
                      key={item.title}
                      href={item.href}
                      title={item.title}
                    >
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ) : null}

          {/*  */}
          {items?.[0]?.menu &&
            items[0].menu.map((item) => (
              <NavigationMenuItem key={item.href}>
                <Link to={item.href}>
                  <NavigationMenuLink>{item.title}</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
// custom list item component made by shadcn
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          to={String(href)}
          className={cn(
            "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline outline-hidden transition-colors select-none",
            className,
          )}
          {...props}
        >
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
export default MainNav;
