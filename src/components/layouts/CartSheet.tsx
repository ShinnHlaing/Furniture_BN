import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
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
import CartItems from "@/components/carts/CartItems";
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
        <SheetHeader className="">
          <SheetTitle>Cart - {itemCount}</SheetTitle>
        </SheetHeader>
        <Separator className="my-2" />
        {cartItems.length > 0 ? (
          <ScrollArea className="my-4 h-[calc(100vh-16rem)] pb-8">
            {cartItems.map((cart) => (
              <CartItems key={cart.id} />
            ))}
            <SheetFooter>
              <Button type="submit" asChild>
                <Link to="/checkout" aria-label="checkout" className="">
                  Continue to checkout
                </Link>
              </Button>
              <SheetClose asChild>
                <Button variant="outline">Close</Button>
              </SheetClose>
            </SheetFooter>
          </ScrollArea>
        ) : (
          <div className="flex h-full flex-col items-center justify-center space-y-1">
            <Icons.cart className="text-muted-foreground mb-4 size-16" />
            <div className="text-muted-foreground text-xl font-medium">
              Your cart is empty!
            </div>
          </div>
        )}
        <Separator />
      </SheetContent>
    </Sheet>
  );
}
