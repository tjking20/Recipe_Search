import React from 'react';
import Recipe from './Recipe'

const RecipesContainer = ({recipes}) => {


    const recipeItems = recipes.map((recipeItem) => {
      // console.log("hi") map function working correctly
        return( 
          <Recipe 
            recipeLink={recipeItem.recipe.url}
            recipeImage={recipeItem.recipe.image} 
            recipeTitle={recipeItem.recipe.label}
          />
        );
    });



    return(
      <div id="recipesContainer">
        <div className="contentContainer">
          <ul>
            {recipeItems}
          </ul>
        </div>
      </div>
        
    );
}

export default RecipesContainer;