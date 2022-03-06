import React, { Component } from "react";

export default class Pagination extends Component {
  state = {
    isEditable: false,
  };

  render() {
    return (
      <div className="d-flex my-5 align-items-center container">
        <button className="btn btn-small btn-outline btn-primary ">Previous</button>
        <div className="flex-grow-1 text-center">
          {this.state.isEditable ? (
            <input type="number" name="" value="1" />
          ) : (
            <p
              title="Please double click to just"
              onDoubleClick={() => this.setState({ isEditable: true })}
            >
              {1}of {100}
              <br />
              <small>Double tap to edit</small>
            </p>
          )}
        </div>
        <button className="btn btn-small btn-outline btn-primary">Next</button>
      </div>
    );
  }
}
