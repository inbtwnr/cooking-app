import {NavLink, Outlet} from "react-router-dom";

function Layout() {
    return (
        <main>
            <h1><NavLink to="">Cooking App</NavLink></h1>
            <Outlet />
            <ul>
                <li>
                    <NavLink to="recipes">Look Catalog</NavLink>
                </li>
                <li>
                    <NavLink to="recipes/add">Create Recipe</NavLink>
                </li>
            </ul>
        </main>
    );
}

export default Layout;