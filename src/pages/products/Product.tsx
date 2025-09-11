import ProductCard from "@/components/products/ProductCard";
import { products, filterList } from "@/data/products";
import { Pagination } from "@/components/ui/pagination";
import ProductFilter from "@/components/products/ProductFilter";
function Product() {
  return (
    <div className="">
      <section className="">
        <section className="">
          <ProductFilter
            title="Furnitures Made By"
            filterList={filterList.categories}
          />
          <ProductFilter
            title="Furnitures Types"
            filterList={filterList.types}
          />
        </section>
        <section className="">
          <h1 className="">All Products</h1>
          <div className="">
            {products.map((product) => (
              <ProductCard products={product} key={product.id} />
            ))}
          </div>
          <Pagination />
        </section>
      </section>
    </div>
  );
}

export default Product;
