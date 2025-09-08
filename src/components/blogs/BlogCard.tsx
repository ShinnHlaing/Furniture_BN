import type { Post } from "@/types";
import { Link } from "react-router";
interface PostProps {
  posts: Post[];
}
function BlogCard({ posts }: PostProps) {
  return (
    <div className="my-8 grid grid-cols-1 gap-8 px-4 md:grid-cols-2 md:px-0 lg:grid-cols-3">
      {posts.map((post) => (
        <Link to={`/blog/${post.id}`} key={post.id}>
          <img
            src={post.image}
            alt={post.title}
            className="mb-4 w-full rounded-2xl"
          />
          <h3 className="ml-4 line-clamp-1 text-2xl font-semibold">
            {post.title}
          </h3>
          <div className="mt-2 ml-4 text-sm">
            <span className="">
              by &nbsp;
              <span className="font-semibold">{post.author}</span> on &nbsp;
              <span className="font-semibold">{post.updated_at}</span>
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default BlogCard;
