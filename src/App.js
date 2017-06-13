import React, { Component } from 'react';
import './App.css';
import IngredientForm from './components/IngredientForm';
import RecipesContainer from './components/RecipesContainer';
import axios from 'axios'


class App extends Component {

  constructor() {
    super();

    this.state = {

      ingredients : "",
      recipes : []

    }

  }


  // const axiosCall = () => {

  //     const self= this;
  //    //axios call sends an xmlHttpRequest to the api, and encodes it in JSON
  //   axios.get("https://api.edamam.com/search?q=summer,food&from=0&to=50&app_id=8544bb7c&app_key=6a0f70f6ef250d50b41ebec6a0a31f15")
  //     .then(function (response) {

  //       //creates new array of recipes from the response
  //       let responseData = response.data.hits;
  //       let recipes = [...responseData]; 

  //       //setting state to the array of recipes returned in response
  //       self.setState({
  //         recipes
  //       })

  //     })
  //     .catch(function(error){
  //       console.log(error);
  //     });
  // }


  componentDidMount() {

    const self= this;

    //axios call sends an xmlHttpRequest to the api, and encodes it in JSON
    axios.get("https://api.edamam.com/search?q=summer,food&from=0&to=50&app_id=8544bb7c&app_key=6a0f70f6ef250d50b41ebec6a0a31f15")
      .then(function (response) {

        //creates new array of recipes from the response
        let responseData = response.data.hits;
        let recipes = [...responseData]; 

        //setting state to the array of recipes returned in response
        self.setState({
          recipes
        })

      })
      .catch(function(error){
        console.log(error);
      });
  }


  //setting the ingredient(s) to the value of the text in the input
  handleInputChange = (evt) => {
    this.setState({
      ingredients : evt.target.value
    });
  }


  handleSubmit = (evt) => {
    
    evt.preventDefault();
    const self = this;

    //axios call sends an xmlHttpRequest to the api, and encodes it in JSON
    axios.get(`https://api.edamam.com/search?q=${this.state.ingredients}&from=0&to=50&app_id=8544bb7c&app_key=6a0f70f6ef250d50b41ebec6a0a31f15`)
      .then(function (response) {

        //creates new array of recipes from the response
        let responseData = response.data.hits;
        let recipes = [...responseData]; 
        if (recipes.length === 0){
            alert("Sorry, your search returned no results");
            return;
        }

        //setting state to the array of recipes returned in response
        self.setState({
          recipes
        })

      })//.catch will send request errors and will display a message to the user
      .catch(function (error) {
        console.log(error);
      });

    this.setState({
      ingredients : ""
    });
  }

  render() {
    return (
      <div id="flexContainer">
        <nav id="header">
          <IngredientForm 
            handleSubmit={this.handleSubmit}
            onInputChange={this.handleInputChange} />
        </nav>

        <RecipesContainer
          recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
