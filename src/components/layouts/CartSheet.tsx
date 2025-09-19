import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { cartItems } from "@/data/carts";
import { Icons } from "@/components/icons";
export default function CartSheet() {
  const itemCount = 4;
  const amountTotal = 190;
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="relative"
          aria-label="open cart"
        >
          <Badge
            variant="destructive"
            className="absolute -top-2 -right-2 size-6 justify-center rounded-full p-2.5"
          >
            {itemCount}
          </Badge>
          <Icons.cart className="size-4" aria-hidden="true" />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full md:max-w-lg">
        <SheetHeader className="mb-2">
          <SheetTitle>Cart - {itemCount}</SheetTitle>
        </SheetHeader>
        <Separator />
        {cartItems.length > 0 ? (
          <div className=""></div>
        ) : (
          <div className="flex h-full flex-col items-center justify-center space-y-1">
            <Icons.cart className="text-muted-foreground mb-4 size-16" />
            <div className="text-muted-foreground text-xl font-medium">
              Your cart is empty!
            </div>
          </div>
        )}
        <Separator />
        <SheetFooter>
          <Button type="submit">Save changes</Button>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
