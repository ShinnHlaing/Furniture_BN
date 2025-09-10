import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import Couch from "@/data/images/couch.png";
import CarouselCard from "@/components/products/CarouselCard";
import ProductCard from "@/components/products/ProductCard";
import { products } from "@/data/products";
import BlogCard from "@/components/blogs/BlogCard";
import { posts } from "@/data/posts";
const samplePosts = posts.slice(0, 3); //limit number of posts displayed on home page
const sampleProducts = products.slice(0, 4);
const Home = () => {
  const Title = ({
    title,
    href,
    sideText,
  }: {
    title: string;
    href: string;
    sideText: string;
  }) => (
    <div className="mt-28 mb-10 flex flex-col items-center md:flex-row md:justify-between md:px-0">
      <h2 className="mb-4 text-2xl font-bold md:mb-0">{title}</h2>
      <Link to={href} className="text-muted-foreground font-semibold underline">
        {sideText}
      </Link>
    </div>
  );
  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-center gap-20 lg:flex-row lg:justify-between">
        {/* text content */}
        <div className="my-8 text-center lg:mt-16 lg:mb-0 lg:w-2/5 lg:text-left">
          <h1 className="mb-4 text-4xl font-extrabold text-[#3b5d50] lg:mb-8 lg:text-6xl">
            Modern Interior Design Studio
          </h1>
          <p className="mb-6 lg:mb-8">
            Furniture is an essential component of any living space, providing
            functionality, comfort, and aesthetic appeal.
          </p>
          {/* btn */}
          <div className="">
            <Button
              asChild
              className="mr-2 rounded-full bg-teal-500 px-8 py-6 text-base font-bold"
            >
              <Link to="#">Shop Now</Link>
            </Button>
            <Button
              asChild
              className="rounded-full px-8 py-6 text-base"
              variant="outline"
            >
              <Link to="#">Explore</Link>
            </Button>
          </div>
        </div>
        {/* image content */}
        <img src={Couch} alt="" className="w-full lg:w-3/5" />
      </div>
      <CarouselCard products={products} />
      <Title
        title="Featured Products"
        href="/products"
        sideText="View All Products"
      />
      <div className="grid grid-cols-1 gap-6 px-4 md:grid-cols-2 md:px-0 lg:grid-cols-4">
        {sampleProducts.map((product) => (
          <ProductCard products={product} key={product.id} />
        ))}
      </div>

      <Title title="Recent Blog" href="/blogs" sideText="View All Blogs" />
      <BlogCard posts={samplePosts} />
    </div>
  );
};

export default Home;
