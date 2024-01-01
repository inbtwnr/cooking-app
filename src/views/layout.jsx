import { Outlet } from "react-router-dom";
import { Header } from "../components/shared/header.jsx";

function Layout() {
  return (
    <>
      <Header />
      <main>
        <div className="container space-y-4 mx-auto">
          <Outlet />
        </div>
      </main>
      <footer className="p-4">CookBook</footer>
    </>
  );
}

export default Layout;
