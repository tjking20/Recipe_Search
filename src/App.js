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
  // constructor() {
  //   super();

  //   this.state{

  //   }

  // }


  handleSubmit = (evt) => {
    evt.preventDefault();
    // var config = {
    // headers: {'Access-Control-Allow-Origin': '*'}
    // };

    axios.get('http://food2fork.com/api/search?key=31a8cd7754dbe5780924db9f038d8134&q=pepper,chicken')
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    console.log("working");
  }

  render() {
    return (
      <div>
        <IngredientForm 
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default App;
