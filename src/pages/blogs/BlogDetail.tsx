import { useParams, Link } from "react-router";
import { posts } from "@/data/posts";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import RichTExtRenderer from "@/components/blogs/RichTExtRenderer";
function BlogDetail() {
  const { postId } = useParams();
  const post = posts.find((post) => post.id === postId);
  return (
    <div className="container mx-auto px-4 lg:px-0">
      <section className="flex flex-col lg:flex-row">
        {/* 1st section */}
        <section className="w-full lg:w-3/4 lg:pr-16">
          <Button variant="outline" className="mt-8 mb-6" asChild>
            <Link to="/blogs">
              <Icons.arrowLeft />
              All Posts
            </Link>
          </Button>
          {post ? (
            <>
              <h2 className="mb-3 text-3xl font-extrabold">{post.title}</h2>
              <div className="text-sm">
                <span className="">
                  by &nbsp;
                  <span className="font-[600]">{post.author}</span> on &nbsp;
                  <span className="font-[600]">{post.updated_at}</span>
                </span>
              </div>
              <h3 className="my-6 text-base font-[400]">{post.content}</h3>
              <img
                src={post.image}
                alt={post.title}
                className="w-full rounded-xl"
              />
              <RichTExtRenderer content={post.body} className="my-8" />
              <div className="mt-4 mb-12 space-x-2">
                {post.tags.map((tag) => (
                  <Button variant="secondary">{tag}</Button>
                ))}
              </div>
            </>
          ) : (
            <p className="text-muted-foreground mt-8 mb-16 text-center text-xl font-bold">
              No post found!
            </p>
          )}
        </section>
        {/* 2nd section */}
        <section className="mt-24 w-full lg:w-1/4">
          <div className="mb-8 flex items-center gap-2 text-base font-semibold">
            <Icons.layer />
            <h3 className="">Other Blog Posts</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1">
            {posts.map((post) => (
              <Link
                to={`/blogs/${post.id}`}
                className="mb-6 flex items-start gap-2"
                key={post.id}
              >
                <img
                  src={post.image}
                  alt="blog post"
                  className="w-1/4 rounded"
                />
                <div className="text-muted-foreground w-3/4 text-sm font-[400]">
                  <p className="line-clamp-2">{post.content}</p>
                  <i>...see more</i>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
}

export default BlogDetail;
