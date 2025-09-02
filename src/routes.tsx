import { createBrowserRouter } from "react-router";
import RootLayout from "@/pages/RootLayout";
import Home from "@/pages/Home";
import Erro from "@/pages/Erro";
import About from "@/pages/About";
import Blog from "@/pages/blogs/Blog";
import BlogDetail from "@/pages/blogs/BlogDetail";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    ErrorBoundary: Erro,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About }, //relative path
      { path: "blogs", Component: Blog }, //relative path
      { path: "blogs/:postId", Component: BlogDetail }, //relative path
    ],
  },
]);
