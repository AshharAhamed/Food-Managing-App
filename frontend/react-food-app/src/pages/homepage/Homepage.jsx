import React from "react";
import { useState } from "react";
import RecipeItem from "../../components/recipe-item/RecipeItem";
import Search from "../../components/search/Search";
import "./style.css";

const dummyData = "dummyData";

function Homepage() {
  const [loadingState, setLoadingState] = useState(false);

  const [recipes, setRecipes] = useState([]);

  const getDataFromSearchComponent = (getData) => {
    setLoadingState(true);
    console.log("getData => " + getData);

    async function getReceipies() {
      const apiResponse = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=7179ba19477d44f28878956f4699e49d&query=${getData}`
      );
      const result = await apiResponse.json();

      const { results } = result;

      if (results && results.length > 0) {
        setLoadingState(false);
        setRecipes(results);
      }
    }

    getReceipies();
  };

  console.log(loadingState, recipes);
  return (
    <div>
      <Search
        getDataFromSearchComponent={getDataFromSearchComponent}
        dummyData={dummyData}
      />
      {/* Show loading state */}
      {loadingState && (
        <div className="loading">Loading recipes ! Please wait.</div>
      )}

      {/* map through all the receipt */}

      <div className="items">
        {recipes && recipes.length > 0
          ? recipes.map((item, index) => <RecipeItem key={index} item={item} />)
          : null}
      </div>
    </div>
  );
}

export default Homepage;
