import React, { Component } from "react";

export default class Pagination extends Component {
  state = {
    isEditable: false,
    inputFieldValue:0
  };

  render() {
    const {
      next,
      previous,
      currentPage,
      totalPage,
      isNext,
      isPrevious,
      handlePageNumberInput,
    } = this.props;
    return (
      <div className="d-flex my-5 align-items-center container">
        <button
          className="btn btn-small btn-outline btn-primary "
          onClick={() => previous()}
          disabled={!isPrevious}
        >
          Previous
        </button>
        <div className="flex-grow-1 text-center">
          {this.state.isEditable ? (
            <input
              type="number"
              name=""
              value={this.state.inputFieldValue}
              onChange={(e) =>{ 
                this.setState({inputFieldValue: e.target.value})
                handlePageNumberInput(this.state.inputFieldValue)}}

                onKeyPress={(e)=>{
                  if(e.key==="Enter"){
                    this.setState({isEditable:false})
                     handlePageNumberInput(this.state.inputFieldValue)
                  }
                }}
            />
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
          disabled={!isNext}
        >
          Next
        </button>
      </div>
    );
  }
}
