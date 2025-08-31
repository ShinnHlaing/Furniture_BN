import { createBrowserRouter } from "react-router";
import RootLayout from "@/pages/RootLayout";
import Home from "@/pages/Home";
import Contact from "@/pages/Contact";
import Erro from "@/pages/Erro";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    ErrorBoundary: Erro,
    children: [
      { index: true, Component: Home },
      { path: "contact", Component: Contact },
    ],
  },
]);
