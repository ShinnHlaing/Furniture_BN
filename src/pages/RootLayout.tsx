import { Outlet } from "react-router";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
const RootLayout = () => {
  return (
    <>
      <div className="flex min-h-screen flex-col overflow-hidden">
        <Header />
        <main className="mt-16 flex-1 overflow-hidden">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default RootLayout;
