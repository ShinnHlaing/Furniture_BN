import { createBrowserRouter } from "react-router";
import RootLayout from "@/pages/RootLayout";
import Home from "@/pages/Home";
import Erro from "@/pages/Erro";
import About from "@/pages/About";
import BlogRootLayout from "@/pages/blogs/BlogRootLayout";
import Blog from "@/pages/blogs/Blog";
import BlogDetail from "@/pages/blogs/BlogDetail";
import ProductRootLayout from "@/pages/products/ProductRootLayout";
import Product from "@/pages/products/Product";
import ProductDetail from "@/pages/products/ProductDetail";
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
        Component: BlogRootLayout,
        children: [
          { index: true, Component: Blog },
          { path: ":postId", Component: BlogDetail },
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
