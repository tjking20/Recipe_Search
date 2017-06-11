import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import IngredientForm from './components/IngredientForm';
import axios from 'axios'


class App extends Component {
  /*
-state will have input set to 1 
  -add input or decrease input will need to set new state
-state will have recipes set to []
  -onSubmit will do a componentWillUpdate and set state to have 30 recipes. 
*/

  constructor() {
    super();

    this.state = {

      ingredients : "",
      recipes : []

    }

  }

  handleInputChange = (evt) => {
    this.setState({
      //setting the ingredient(s) to the value of the text in the input
      ingredients : evt.target.value
    });
  }


  handleSubmit = (evt) => {
    
    evt.preventDefault();
    const self = this

    //axios call sends an xmlHttpRequest to the api, and encodes it in JSON
    axios.get(`https://api.edamam.com/search?q=${this.state.ingredients}&app_id=8544bb7c&app_key=6a0f70f6ef250d50b41ebec6a0a31f15`)
      .then(function (response) {

        let responseData = response.data.hits;
        let recipes = [...responseData]; //creates new array of recipes from the response

        self.setState({
          recipes
        })

      })//.catch will send request errors and will display a message to the user
      .catch(function (error) {
        console.log(error);
        return "Sorry... No recipe for you!";
      });

    this.setState({
      ingredients : ""
    });
  }

  render() {
    return (
      <div>
        <IngredientForm 
          handleSubmit={this.handleSubmit}
          onInputChange={this.handleInputChange}
        />
      </div>
    );
  }
}

export default App;
