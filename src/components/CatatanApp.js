import React, { Component } from "react";
import CatatanInput from "./CatatanInput";
import CatatanContainer from "./CatatanContainer";
import SearchBar from "./SearchBar";
import { getInitialData } from "../utils/index";

export default class CatatanApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      filterNote: [],
      isSearching: false,
    };

    this.addCatatanHandler = this.addCatatanHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArsipHandler = this.onArsipHandler.bind(this);
    this.searchHandler = this.searchHandler.bind(this);
  }

  addCatatanHandler(data) {
    const { notes } = this.state;
    const { title, body } = data;
    const newNote = {
      id: +new Date(),
      title,
      body,
      archived: false,
      createdAt: new Date().toISOString(),
    };
    this.setState({ notes: [...notes, newNote], isSearching: false });
  }

  onDeleteHandler(id) {
    const { notes } = this.state;
    const filterNote = notes.filter((note) => note.id !== id);
    this.setState({ notes: filterNote, isSearching: false });
  }

  onArsipHandler(id) {
    const { notes } = this.state;
    const noteIndex = notes.findIndex((note) => note.id === id);
    notes[noteIndex].archived = !notes[noteIndex].archived;
    this.setState({ notes, isSearching: false });
  }

  searchHandler(searchValue) {
    const { notes } = this.state;
    const isSearching = searchValue.length > 0;
    if (!searchValue) return this.setState({ filterNote: [], isSearching });

    const filterNote = notes.filter((note) =>
      note.title.includes(searchValue)
    );

    this.setState({ filterNote, isSearching });
  }

  render() {
    const { notes, filterNote, isSearching } = this.state;
    return (
      <main>
        <nav className="navbar bg-light">
          <div className="container-fluid">
            <span className="navbar-brand mb-0 h1">
              Aplikasi Catatan Pribadi
            </span>
          </div>
        </nav>
        <CatatanInput addNote={this.addCatatanHandler} />
        <SearchBar searchNote={this.searchHandler} />
        <CatatanContainer
					notes={isSearching ? filterNote : notes}
					onDelete={this.onDeleteHandler}
					onArchive={this.onArsipHandler}
				/>
      </main>
    );
  }
}
