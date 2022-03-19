import React, { Component } from "react";
import { newsCategories } from "../../newsCategory/index";
import Clock from "../Clock";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = { searchTerm: "" };
  }

  handleInputValue = (cb) => {
    return (e) => {
      this.setState({ searchTerm: e.target.value });

      cb()(this.state.searchTerm, 1000);
    };
  };

  // handleOnKeyPress=(e)=> {
  //       this.setState({ searchTerm: e.target.value });
  //       console.log(this.state)
  // }

  render() {
    const { category, handleCategory, handleInputChange } = this.props;
    return (
      <div className="container">
        <div className="d-flex justify-content-between p-3 bg-info">
          <h1 className="fw-bold text-center ">Trending headlines</h1>
          <Clock />
        </div>
        <div>
          <input
            type="search"
            className="form-control"
            placeholder="enter your search term"
            onChange={this.handleInputValue( handleInputChange)}
            // onChange ={this.handleInputValue(() => this.handleInputChange, 2000)}
            // onKeyPress={this.handleOnKeyPress}
            value={this.state.searchTerm}
          />
        </div>
        <div className="mt-3">
          {newsCategories &&
            Object.keys(newsCategories).map((item) =>
              category === newsCategories[item] ? (
                <button
                  onClick={() => handleCategory(newsCategories[item])}
                  key={newsCategories[item]}
                  className="btn btn-small btn-warning mx-2 my-2"
                >
                  #{newsCategories[item]}
                </button>
              ) : (
                <button
                  onClick={() => handleCategory(newsCategories[item])}
                  className="btn btn-small btn-primary mx-2 my-2"
                  key={newsCategories[item]}
                >
                  #{newsCategories[item]}
                </button>
              )
            )}
        </div>
      </div>
    );
  }
}

export default Header;
