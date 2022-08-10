import { CompletionList } from "@molecules";

const IngredientsTable = () => {
    const list = ["Lorem ipsum dolor sit amet.",
        "Lorem ipsum dolor sit amet.",
        "Lorem ipsum dolor sit amet.",
        "Lorem ipsum dolor sit amet.",
        "Lorem ipsum dolor sit amet."];

    return <>
        <CompletionList title="Ingredients" list={list} />
    </>
}

export default IngredientsTable;