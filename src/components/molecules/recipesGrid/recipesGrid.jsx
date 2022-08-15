import { useData } from "@context/useDataContext";
import { SiteBanner, Card } from "@molecules";
import styles from "./recipesGrid.module.scss";
import useQuery from "@hooks/useQuery";
import {Link} from "react-router-dom"

const RecipesGrid = () => {
  //const { data, loading } = useData();
  const [data, loading, error] = useQuery("recipes", "@/../data.json");

  return (
    <div>
      <ul className={styles["recipesGrid__list"]}>
        {!loading &&
          data.map((recipe) => (
            <Link to={`/${recipe.id}`}><Card key={recipe.id} card={recipe} background full></Card></Link>
          ))}
        <div className={styles["recipesGrid__banner"]}>
          <SiteBanner />
        </div>
      </ul>
    </div>
  );
};

export default RecipesGrid;
