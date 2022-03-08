import React, { Component } from "react";

export default class Pagination extends Component {
  state = {
    isEditable: false,
  };

  render() {
    const {next,previous,currentPage,totalPage}=this.props
    return (
      <div className="d-flex my-5 align-items-center container">
        <button
          className="btn btn-small btn-outline btn-primary "
          onClick={() => previous()}
        >
          Previous
        </button>
        <div className="flex-grow-1 text-center">
          {this.state.isEditable ? (
            <input type="number" name="" value="1" />
          ) : (
            <p
              title="Please double click to just"
              onDoubleClick={() => this.setState({ isEditable: true })}
            >
              {currentPage}of {totalPage}
              <br />
              <small>Double tap to edit</small>
            </p>
          )}
        </div>
        <button
          className="btn btn-small btn-outline btn-primary"
          onClick={() => next()}
        >
          Next
        </button>
      </div>
    );
  }
}
