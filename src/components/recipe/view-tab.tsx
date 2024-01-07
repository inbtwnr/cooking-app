import React, { useEffect, useState } from "react";
import cn from "../../lib/cn.ts";

export const RecipeTabTitle = (props: any) => {
  const { children, classNames, ...rest } = props;

  return (
    <h3 {...rest} className={cn("mb-4 text-xl", classNames)}>
      {children}
    </h3>
  );
};

export const RecipeTabDescription = (props: any) => {
  const { children, classNames, ...rest } = props;

  return (
    <div {...rest} className={cn(classNames)}>
      {children}
    </div>
  );
};

interface RecipeTabInterface {
  children: React.ReactNode;
  tab: number;
  activeTab: number;
}

export const RecipeTab = (props: RecipeTabInterface) => {
  const { children, tab, activeTab, ...rest } = props;

  const handleActiveTab = (cur: number) =>
    Number(cur) === tab ? "block" : "hidden";

  const [className, setClassName] = useState(handleActiveTab(activeTab));

  useEffect(() => {
    setClassName(handleActiveTab(activeTab));
  }, [activeTab]);

  return (
    <div {...rest} className={cn("prose", className)}>
      {children}
    </div>
  );
};
