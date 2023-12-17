import cn from '../../lib/cn';

export const Button = (props) => {
    const { children, className, ...rest } = props;

    return (
        <button {...rest} className={cn(className)}>
            {children}
        </button>
    );
}