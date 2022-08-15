import { SubscriptionCard, RecipeDetails, RecipeVideo, IngredientsTable } from "@organisms";
import { Title } from "@atoms";
import { Section } from "@molecules";
import { useStore } from "@store/store";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const RecipePage = () => {
    const Params = useParams();
    const [Recipes] = useStore();
    const [isLoading, setLoading] = useState(true);
    const [Recipe, setRecipe] = useState();

    useEffect(() => {
        const data = Recipes.recipes.find((recipe) => recipe.id == Params.Recipename );
        setLoading(false);
        setRecipe(data);
    }, [Params.Recipename, Recipes])

    return (
        <>
            <Section arialabel="Recipe Details">
                {!isLoading && Recipe != undefined ? <RecipeDetails recipe={Recipe} /> : <Title>Recipe Not Found</Title>}
            </Section>
            <Section arialabel="Recipe Video">
                {!isLoading && Recipe != undefined ? <RecipeVideo /> : null}
            </Section>
            <Section arialabel="Ingredients Table">
                {!isLoading && Recipe != undefined ? <IngredientsTable recipes={Recipes} /> : null}
            </Section>
            <Section arialabel="Subscription Card">
                <SubscriptionCard />
            </Section>
        </>
    )
}

export default RecipePage;