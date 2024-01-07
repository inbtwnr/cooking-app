import { NavLink } from "react-router-dom";

export const RouterLink = (props: any) => {
  const { to, children, ...rest } = props;

  return (
    <NavLink to={to} {...rest}>
      {children}
    </NavLink>
  );
};
