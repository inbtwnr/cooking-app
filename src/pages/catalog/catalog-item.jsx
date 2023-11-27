import Chip from "../../components/shared/chip.jsx";
import {RouterLink} from "../../components/shared/link.jsx";

const CatalogItem = (props) => {
    const {id, name, description, ingredients} = props;

    return (
        <li className="px-5 pt-6 pb-7 rounded border" tabIndex={0}>
            <h2 className="text-xl mb-2 font-bold">{name}</h2>
            <p className="mb-4">{description}</p>
            <ul className="flex gap-2 mb-2">
                {ingredients.map((ingredient) => (
                    <Chip name={ingredient} />
                ))}
            </ul>
            <RouterLink to={`/recipes/${id}`}>View Full Recipe</RouterLink>
        </li>
    )
};

export default CatalogItem;