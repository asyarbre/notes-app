import React, { Component } from "react";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
    };

    this.onSearchChangeHandler = this.onSearchChangeHandler.bind(this);
  }

  onSearchChangeHandler(event) {
    this.setState({ searchValue: event.target.value });
    this.props.searchNote(event.target.value);
  }

  render() {
    return (
      <div className="mx-auto mt-5 p-3 col-lg-5">
        <h4 className="mb-3 card-title">Cari Catatan</h4>
        <input
          className="form-control"
          placeholder="Cari Catatan"
          value={this.state.searchValue}
          onChange={this.onSearchChangeHandler}
        />
      </div>
    );
  }
}
