import React, { Component } from 'react';

const IngredientForm = (props) => (
		<div>
			<form onSubmit= {props.handleSubmit}>
				<input 
					type="text" 
					className="ingredientField"
				/>
				<input type="submit"/>
			</form>
		</div>
	)

export default IngredientForm;