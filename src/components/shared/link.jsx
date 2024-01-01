import { NavLink } from "react-router-dom";

export const RouterLink = (props) => {
  const { to, children, ...rest } = props;

  return (
    <NavLink to={to} {...rest}>
      {children}
    </NavLink>
  );
};
