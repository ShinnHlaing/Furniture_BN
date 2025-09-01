import { Outlet } from "react-router";
import Header from "@/components/layouts/Header";
const RootLayout = () => {
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <Header />
        <Outlet />
        <footer>
          <div>Footer Content</div>
        </footer>
      </div>
    </>
  );
};

export default RootLayout;
