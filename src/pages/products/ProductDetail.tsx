import React from "react";
import { useParams, Link } from "react-router";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import ProductCard from "@/components/products/ProductCard";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Autoplay from "embla-carousel-autoplay";
import Rating from "@/pages/products/Rating";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { formatPrice } from "@/lib/utils";
//
function ProductDetail() {
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true }),
  );
  return (
    <div className="container mx-auto px-4 md:px-0">
      <Button variant="outline" className="mt-8">
        <Link to="/products" className="flex items-center">
          <Icons.arrowLeft />
          All Products
        </Link>
      </Button>
      <section className="my-6 flex flex-col gap-16 md:flex-row md:gap-16">
        <Carousel plugins={[plugin.current]} className="w-full md:w-1/2">
          <CarouselContent>
            {product?.images.map((image) => (
              <CarouselItem key={image}>
                <div className="p-1">
                  <img
                    src={image}
                    alt={product.name}
                    className="size-full rounded-md object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="flex w-full flex-col gap-4 md:w-1/2">
          <div className="space-y-0.5">
            <h2 className="mb-2 line-clamp-1 text-2xl font-bold">
              {product?.name}
            </h2>
            <p className="text-muted-foreground text-base">
              {formatPrice(Number(product?.price))}
            </p>
          </div>

          <Separator className="my-1.5" />
          <p className="text-muted-foreground text-base">
            {product?.inventory} in stock
          </p>
          <div className="flex items-center justify-between">
            <Rating rating={Number(product?.rating)} />
          </div>
        </div>
      </section>
      <Separator className="my-4 md:hidden" />
      {/*  */}
      <section className="space-y-6 overflow-hidden">
        <h2 className="line-clamp-1 text-2xl font-bold">
          More Products from Furniture Shop
        </h2>
        <ScrollArea className="pb-8">
          <div className="flex gap-4">
            {products.slice(0, 4).map((item) => (
              <ProductCard
                products={item}
                key={item.id}
                className="min-w-[260px]"
              />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </section>
    </div>
  );
}

export default ProductDetail;
