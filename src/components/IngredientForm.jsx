import React from 'react';
// import search from './../assets/images/search.png';

const IngredientForm = (props) => (
		<div id="ingredientForm">
			<div className="contentContainer">
				<div id="logo">
					<a href="javascript:window.location.reload()" id="logoLink">
						<p className="logoText">Recipe</p>
						<p className="logoText">Search</p>
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