import { formatPrice } from "@/lib/utils";
import type { Cart } from "@/types";
import { Separator } from "@/components/ui/separator";

import Editable from "@/components/carts/Editable";
interface CartItemsProps {
  cart: Cart;
}

function CartItems({ cart }: CartItemsProps) {
  return (
    <div className="mt-4 space-y-3">
      <div className="mt-4 mb-2 flex gap-4">
        <img
          src={cart.image.url}
          alt="cart item"
          className="w-16 object-cover"
        />
        <div className="flex flex-col space-y-1">
          <span className="line-clamp-1 text-sm font-medium">{cart.name}</span>
          <span className="text-muted-foreground text-xs">
            {formatPrice(cart.price)} x {cart.quantity} =
            {formatPrice((cart.price * cart.quantity).toFixed(2))}
          </span>
          <span className="text-muted-foreground line-clamp-1 text-xs capitalize">
            {` ${cart.category} / ${cart.subcategory}`}
          </span>
        </div>
      </div>
      <Editable />
      <Separator />
    </div>
  );
}

export default CartItems;
