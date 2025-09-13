import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
interface FavProp extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  productId: string;
  rating: number;
  //   isFav: boolean;
}

function AddToFav({ productId, rating, className, ...props }: FavProp) {
  return (
    <Button
      variant="secondary"
      size="icon"
      className={cn("size-8 shrink-0", className)}
      {...props}
    >
      <Icons.heart className="size-4" />
    </Button>
  );
}

export default AddToFav;
