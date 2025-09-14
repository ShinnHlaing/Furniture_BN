import { createBrowserRouter } from "react-router";
import { lazy, Suspense } from "react";
import RootLayout from "@/pages/RootLayout";
import Home from "@/pages/Home";
import Erro from "@/pages/Erro";
import About from "@/pages/About";
// import BlogRootLayout from "@/pages/blogs/BlogRootLayout";
// import Blog from "@/pages/blogs/Blog";
// import BlogDetail from "@/pages/blogs/BlogDetail";
/*** set lazy loading and wrap with suspense componet for blog related pages! ***/
const BlogRootLayout = lazy(() => import("@/pages/blogs/BlogRootLayout"));
const Blog = lazy(() => import("@/pages/blogs/Blog"));
const BlogDetail = lazy(() => import("@/pages/blogs/BlogDetail"));

import ProductRootLayout from "@/pages/products/ProductRootLayout";
import Product from "@/pages/products/Product";
import ProductDetail from "@/pages/products/ProductDetail";

const SuspenseFallback = () => <div className="text-center">Loading...</div>;
export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    ErrorBoundary: Erro,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About }, //relative path
      {
        path: "blogs",
        Component: () => (
          <Suspense fallback={<SuspenseFallback />}>
            <BlogRootLayout />
          </Suspense>
        ),
        children: [
          {
            index: true,
            Component: () => (
              <Suspense fallback={<SuspenseFallback />}>
                <Blog />
              </Suspense>
            ),
          },
          {
            path: ":postId",
            Component: () => (
              <Suspense fallback={<SuspenseFallback />}>
                <BlogDetail />
              </Suspense>
            ),
          },
        ],
      }, //relative path
      {
        path: "products",
        Component: ProductRootLayout,
        children: [
          { index: true, Component: Product },
          { path: ":productId", Component: ProductDetail },
        ],
      },
    ],
  },
]);
