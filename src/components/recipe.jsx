import React from 'react';

const Recipe = (props) => {

	return(

		<li className="recipeItem">
			<a href={props.recipeLink} className="recipeLink">
				<img src={props.recipeLink} alt={props.recipeTitle} className="recipeImage"/>
				<h3 className="recipeTitle">{props.recipeTitle}</h3>
			</a>
		</li>
	);
}

export default Recipe;