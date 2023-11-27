import {NavLink} from "react-router-dom";

export const RouterLink = (props) => {
    const { to, children, ...rest } = props;

    return (
        <NavLink to={to} {...rest} className="text-blue-600 hover:text-blue-400 underline underline-offset-1">
            {children}
        </NavLink>
    );
};

