import { createBrowserRouter } from "react-router";
import RootLayout from "@/pages/RootLayout";
import Home from "@/pages/Home";
import Erro from "@/pages/Erro";
import About from "@/pages/About";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    ErrorBoundary: Erro,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About }, //relative path
    ],
  },
]);
