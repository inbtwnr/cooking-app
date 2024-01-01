import {Outlet} from "react-router-dom";
import {Header} from "../components/shared/header.jsx";

function Layout() {
    return (
        <>
            <Header />
            <main>
                <div className="max-w-xl space-y-4 mx-auto">
                    <Outlet />
                </div>
            </main>
            <footer>
            </footer>
        </>
    );
}

export default Layout;