import { useParams, Link } from "react-router";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import ProductCard from "@/components/products/ProductCard";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
function ProductDetail() {
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);
  return (
    <div className="container mx-auto px-4 md:px-0">
      <Button variant="outline" className="mt-8">
        <Link to="/products" className="flex items-center">
          <Icons.arrowLeft />
          All Products
        </Link>
      </Button>
      <section className=""></section>
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
