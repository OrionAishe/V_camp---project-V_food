import { SubscriptionCard, RecipeDetails } from "@organisms";
import { Title } from "@atoms";
import { Section, NutritionalTable } from "@molecules";
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
    }, [Recipes])

    return (
        <>
            <Section arialabel="Recipe Details">
                {!isLoading && Recipe != undefined ? <RecipeDetails recipe={Recipe} /> : <Title>Recipe Not Found</Title>}
            </Section>
            <Section arialabel="Recipe Video">
                {!isLoading && Recipe != undefined ? <NutritionalTable recipe={Recipe} /> : null}
            </Section>
            <Section arialabel="Subscription Card">
                <SubscriptionCard />
            </Section>
        </>
    )
}

export default RecipePage;