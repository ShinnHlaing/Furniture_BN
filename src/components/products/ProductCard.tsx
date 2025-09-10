import type { Product } from "@/types";
import { Icons } from "@/components/icons";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { formatPrice } from "@/lib/utils";
interface ProductProps {
  products: Product;
}
function ProductCard({ products }: ProductProps) {
  return (
    <Card className="size-full overflow-hidden rounded-lg">
      <Link to={`/products/${products.id}`} aria-label={products.name}>
        <CardHeader className="border-b p-0">
          <AspectRatio ratio={1 / 1} className="bg-muted">
            <img
              src={products.images[0]}
              alt={products.name}
              className="size-full object-cover"
              loading="lazy"
            />
          </AspectRatio>
        </CardHeader>
        <CardContent className="space-y-1.5 p-4">
          <CardTitle className="line-clamp-1 font-bold">
            {products.name}
          </CardTitle>
          <CardDescription className="line-clamp-1">
            {formatPrice(products.price)}
            {products.discount > 0 && (
              <span className="ml-2 font-extralight line-through">
                {formatPrice(products.discount)}
              </span>
            )}
          </CardDescription>
        </CardContent>
      </Link>

      <CardFooter className="p-4 pt-1">
        {products.status === "sold" ? (
          <Button
            disabled={true}
            size="sm"
            className="h-8 w-full rounded-sm font-bold"
            aria-label="sold out"
          >
            Sold Out
          </Button>
        ) : (
          <Button
            size="sm"
            className="h-8 w-full rounded-sm bg-teal-600 font-bold"
          >
            <Icons.plus />
            Add to cart
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

export default ProductCard;
