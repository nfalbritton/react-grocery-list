import React from 'react';
import GroceryForm from './GroceryForm';
import GroceryList from './GroceryList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleChange(event) {
    let newName = event.target.value;
    this.setState({ name: newName });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    alert('Form was submitted');
  }

  handleButtonClick(event) {
    alert('Button was clicked');
  }

  render() {
    console.log("App's state nae value: ", this.state.name);
    return(
      <div>
        <h1>Grocery List React</h1>
        <GroceryForm
          handleFormSubmit={this.handleFormSubmit}
          handleChange={this.handleChange}
          name={this.state.name}
      />
        <GroceryList
          groceries={this.state.groceries}
          handleButtonClick={this.handleButtonClick}
        />
      </div>
    );
  }
}

export default App;
