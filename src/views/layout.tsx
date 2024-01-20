import { Outlet } from "react-router-dom";
import { Header, Footer } from "@/components/shared/layout";

function Layout() {
  return (
    <div className="h-[100svh] flex flex-col">
      <Header />
      <main className="space-y-2">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
