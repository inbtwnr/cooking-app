import React from 'react';
import cn from '../../lib/cn.js';

const Tab = (props) => {
    const {children, active, ...rest} = props;

    const tabClasses = "px-2 py-2 select-none hover:bg-gray-100 focus:outline-none focus:text-red-500";
    const activeTabClasses = "text-red-600";

    return (
        <button {...rest} className={cn([tabClasses, {
            [activeTabClasses]: active,
        }])}>{children}</button>
    );
};

export default Tab;