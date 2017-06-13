import React from 'react';
// import search from './../assets/images/search.png';

const IngredientForm = (props) => (
		<div id="ingredientForm">
			<div className="contentContainer">
				<div id="title">
					<a href="javascript:window.location.reload()">
						<p className="titleText">Recipe</p>
						<p className="titleText">Search</p>
					</a>
				</div>
				
				<form onSubmit={props.handleSubmit}>
					<input 
						id="ingredientInput"
						placeholder="search recipes or ingredients..."
						type="text" 
						className="ingredientField"
						onChange={event => props.onInputChange(event)} 
					/>
					<input id="submitButton" type="submit" value=""/>
				</form>
			</div>
		</div>
	)

export default IngredientForm;