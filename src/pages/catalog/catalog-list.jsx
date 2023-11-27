import CatalogItem from "./catalog-item.jsx";

export const CatalogList = (props) => {
    const { recipes } = props;

    return (<ul className='flex list-none flex-col gap-2'>
        {
            recipes.map((recipe) => (
                <CatalogItem {...recipe} />
            ))
        }
    </ul>)
}