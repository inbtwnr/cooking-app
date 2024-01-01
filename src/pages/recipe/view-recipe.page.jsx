import { useState, useEffect } from 'react';
import Tab from '../../components/shared/tab';
import {moveTabWheel} from "../../lib/moveTabWheel.js";
import {RecipeTab, RecipeTabDescription, RecipeTabTitle} from "../../components/recipe/view-tab.jsx";

const Tabs = (props) => {
    const { tabs, activeTab, handleTabClick } = props;

    return (
        <div className="relative box-border border-b border-b-slate-200">
            {tabs.map((tab) => (
                <Tab
                    key={tab.id}
                    data-tab={tab.id}
                    active={activeTab === tab.id}
                    onClick={handleTabClick}
                    aria-label={tab.name}
                    tabIndex='0'
                >
                    {tab.name}
                </Tab>
            ))}
            <div className='absolute bg-red-600 h-0.5 bottom-0' id='movingTabWheel'></div>
        </div>
    )
}

const AboutTab = (props) => {
    const { activeTab, tab } = props;

    return (
        <RecipeTab tab="1" activeTab={activeTab}>
            <RecipeTabTitle>Recipe description</RecipeTabTitle>
            <RecipeTabDescription>
                <div className="grid gap-4 grid-cols-[minmax(20px,160px)_1fr]">
                    <div>{tab.main.title}</div>
                    <div>{tab.main.description}</div>
                    <div>{tab.overall.title}</div>
                    <div>{tab.overall.description}</div>
                </div>
            </RecipeTabDescription>
        </RecipeTab>
    );
}

const IngredientsTab = (props) => {
    const { activeTab, tab } = props;

    return (
        <RecipeTab tab="2" activeTab={activeTab}>
            <RecipeTabTitle>Ingredients</RecipeTabTitle>
            <RecipeTabDescription>
                <div>
                    {tab.ingredients.map((ingredient) => (
                        <label className="flex space-x-2 prose-p:my-0" key={ingredient.name}>
                            <input type="checkbox" />
                            <p>{ingredient.name} - {ingredient.quantity} {ingredient.unit}</p>
                        </label>
                    ))}
                </div>
            </RecipeTabDescription>
        </RecipeTab>
    )
}

const DirectionsTab = (props) => {
    const { activeTab, tab } = props;

    return (
        <RecipeTab  tab="3" activeTab={activeTab}>
            <RecipeTabTitle>Directions</RecipeTabTitle>
            <RecipeTabDescription>
                <ol>
                    {tab.directions.map((direction) => (
                        <li key={direction.step}>{direction.description}</li>
                    ))}
                </ol>
            </RecipeTabDescription>
        </RecipeTab>
    )

}

const ViewRecipePage = () => {
    const [activeTab, setActiveTab] = useState("1");

    const handleTabClick = (e) => {
        setActiveTab(e.target.dataset.tab);
    }

    useEffect(() => {
        const selectedElement = document.querySelector(`[data-tab="${activeTab}"]`);
        moveTabWheel(selectedElement, 'movingTabWheel');
    }, [activeTab]);

    const recipe = {
        name: 'Burger',
        tabs: [
            {
                id: "1",
                name: "About",
                tab: {
                    main: {
                        title: "Recipe description",
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam, quam vitae volutpat rutrum, justo velit ultricies sapien, quis ultricies nisl nunc vitae lorem. Sed eget vestibulum lorem. Nulla facilisi. Donec id nunc euismod, ultricies odio vel, aliquet augue. Nullam euismod, mauris vitae consequat ultrices, orci velit faucibus nunc, et facilisis lorem quam non nunc. Sed vitae turpis ut nisl tincidunt ultrices. Nulla facilisi. Nulla facilisi. Donec id nunc euismod, ultricies odio vel, aliquet augue. Nullam euismod, mauris vitae consequat ultrices, orci velit faucibus nunc, et facilisis lorem quam non nunc. Sed vitae turpis ut nisl tincidunt ultrices. Nulla facilisi.",
                    },
                    overall: {
                        title: "Time",
                        description: "30 minutes",
                    }
                }
            },
            {
                id: "2",
                name: "What to Buy?",
                tab: {
                    ingredients: [
                        {
                            name: "Ingredient 1",
                            quantity: "1",
                            unit: "kg",
                        },
                        {
                            name: "Ingredient 2",
                            quantity: "2",
                            unit: "kg",
                        },
                        {
                            name: "Ingredient 3",
                            quantity: "3",
                            unit: "kg",
                        },
                    ],
                }
            },
            {
                id: "3",
                name: "Directions",
                tab: {
                    directions: [
                        {
                            step: "1",
                            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam, quam vitae volutpat rutrum, justo velit ultricies sapien, quis ultricies nisl nunc vitae lorem. Sed eget vestibulum lorem. Nulla facilisi. Donec id nunc euismod, ultricies odio vel, aliquet augue. Nullam euismod, mauris vitae consequat ultrices, orci velit faucibus nunc, et facilisis lorem quam non nunc. Sed vitae turpis ut nisl tincidunt ultrices. Nulla facilisi. Nulla facilisi. Donec id nunc euismod, ultricies odio vel, aliquet augue. Nullam euismod, mauris vitae consequat ultrices, orci velit faucibus nunc, et facilisis lorem quam non nunc. Sed vitae turpis ut nisl tincidunt ultrices. Nulla facilisi.",
                        },
                        {
                            step: "2",
                            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam, quam vitae volutpat rutrum, justo velit ultricies sapien, quis ultricies nisl nunc vitae lorem. Sed eget vestibulum lorem. Nulla facilisi. Donec id nunc euismod, ultricies odio vel, aliquet augue. Nullam euismod, mauris vitae consequat ultrices, orci velit faucibus nunc, et facilisis lorem quam non nunc. Sed vitae turpis ut nisl tincidunt ultrices. Nulla facilisi. Nulla facilisi. Donec id nunc euismod, ultricies odio vel, aliquet augue. Nullam euismod, mauris vitae consequat ultrices, orci velit faucibus nunc, et facilisis lorem quam non nunc. Sed vitae turpis ut nisl tincidunt ultrices. Nulla facilisi.",
                        },
                        {
                            step: "3",
                            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam, quam vitae volutpat rutrum, justo velit ultricies sapien, quis ultricies nisl nunc vitae lorem. Sed eget vestibulum lorem. Nulla facilisi. Donec id nunc euismod, ultricies odio vel, aliquet augue. Nullam euismod",
                        }
                    ]
                }
            },
        ]
    }

    return (
        <>
            <h2 className="text-2xl font-bold">{recipe.name}</h2>
            <Tabs tabs={recipe.tabs} activeTab={activeTab} handleTabClick={handleTabClick} />
            <AboutTab activeTab={activeTab} tab={recipe.tabs[0].tab} />
            <IngredientsTab activeTab={activeTab} tab={recipe.tabs[1].tab} />
            <DirectionsTab activeTab={activeTab} tab={recipe.tabs[2].tab} />
        </>
    );
};

export default ViewRecipePage;