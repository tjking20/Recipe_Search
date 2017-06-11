import React, { Component } from 'react';

const IngredientForm = (props) => (
		<div>
			<form onSubmit={props.handleSubmit}>
				<input 
					type="text" 
					className="ingredientField"
					onChange={event => props.onInputChange(event)} 
				/>
				<input type="submit" value="Submit"/>
			</form>
		</div>
	)

export default IngredientForm;