import React from "react";
// get our fontawesome imports
import "@fortawesome/fontawesome-free/css/all.min.css";

// const SearchForm = (props) => {
class SearchForm extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      following: [],
      inputValue: "",
    };
  }

  //SEARCH
  // Part 1 of search is to add an onChange.
  // This allows for whater is typed into the input to actually display in the input field.
  // Without the onChange, nothing would appear when you type in the input field.
  itemFilterOnChange = (e) => {
    e.preventDefault();
    //you can view what's being saved as event target value:
    // console.log("hi from OnChange", e.target.value);

    this.setState({ inputValue: e.target.value });
    console.log("hi from OnChange", e.target.value);
  };

  //Part 2 of search is to add a function that filters through the array todos.
  // the f collects all item in the array that match
  // it compares the inputvalue (seen udner state (inputValue: "",)  and under setState (this.setState({ inputValue: e.target.value });))
  // with the value found in the array under the property task:  item.task.
  filterItems = () => {
    return this.state.users.filter((item) =>
      item.users.login
        .toLowerCase()
        .includes(this.state.inputValue.toLowerCase())
    );
  };

  render() {
    return (
      <div>
        <form>
          <label htmlFor="search">Search by name</label>
          <input
            type="text"
            name="search"
            value={this.inputValue}
            onChange={this.itemFilterOnChange}
          />
        </form>
        <i className="fas fa-search"></i>
      </div>
    );
  }
}

export default SearchForm;
