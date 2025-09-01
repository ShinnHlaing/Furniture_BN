import { Link } from "react-router";
import type { MainNavItem } from "@/types";
import { Icons } from "@/components/icons";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
interface MainNavProps {
  items?: MainNavItem[];
}
export default function MobileNav({ items }: MainNavProps) {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="ml-4 size-5">
            <Icons.menu aria-hidden="true" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="px-4 pt-9">
          <SheetClose asChild>
            <Link to="" className="flex items-center">
              <Icons.logo className="mr-2 size-4" />
              <span className="font-bold">{siteConfig.name}</span>
              <span className="sr-only">Home</span>
            </Link>
          </SheetClose>
          <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-8">
            <Accordion type="multiple" className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>{items?.[0].title}</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  {items?.[0].card.map((item) => (
                    <SheetClose asChild key={item.title}>
                      <Link
                        to={String(item.href)}
                        className="text-foreground/70"
                      >
                        {item.title}
                      </Link>
                    </SheetClose>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <div className="flex flex-col space-y-2">
              {items?.[0].menu.map((item) => (
                <SheetClose asChild key={item.title}>
                  <Link to={String(item.href)} className="">
                    {item.title}
                  </Link>
                </SheetClose>
              ))}
            </div>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </div>
  );
}
