import cn from "../../lib/cn.js";

export const RecipeTabTitle = (props) => {
  const { children, classNames, ...rest } = props;

  return (
    <h3 {...rest} className={cn("mb-4 text-xl", classNames)}>
      {children}
    </h3>
  );
};

export const RecipeTabDescription = (props) => {
  const { children, classNames, ...rest } = props;

  return (
    <p {...rest} className={cn(classNames)}>
      {children}
    </p>
  );
};

export const RecipeTab = (props) => {
  const { children, tab, activeTab, ...rest } = props;

  const className = activeTab === tab ? "block" : "hidden";

  return (
    <div {...rest} className={cn("prose", className)}>
      {children}
    </div>
  );
};
