import React, { Component } from "react";

export default class CatatanInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      characterLimit: 50,
    };

    this.onJudulChageHandler = this.onJudulChageHandler.bind(this);
    this.onIsiChangeHandler = this.onIsiChangeHandler.bind(this);
    this.onSimpanHandler = this.onSimpanHandler.bind(this);
  }

  onJudulChageHandler(event) {
    const limitCharacter = 50;
    if (event.target.value.length > limitCharacter) return;
    this.setState({
      title: event.target.value,
      characterLimit: limitCharacter - event.target.value.length,
    });
  }

  onIsiChangeHandler(event) {
    this.setState({ body: event.target.value });
  }

  onSimpanHandler(event) {
    event.preventDefault();
    const { title, body } = this.state;
    if (!title.length || !body.length) return;

    this.props.addNote({ title, body });
    this.setState({ title: "", body: "", characterLimit: 50 });
  }

  render() {
    const { title, body, characterLimit } = this.state;
    return (
      <div className="mx-auto mt-2 col-6">
        <h4 className="mb-3">Input Catatan</h4>
        <p>Sisa Karakter : {characterLimit}</p>
        <form onSubmit={this.onSimpanHandler}>
          <div className="mb-2">
            <label className="form-label">
              Judul Catatan
            </label>
            <input
              className="form-control"
              type="text"
              name="title"
              id="title"
              value={title}
              onChange={this.onJudulChageHandler}
              placeholder="Judul catatan"
            />
          </div>
          <div className="mb-2">
            <label className="form-label">
              Isi Catatan
            </label>
            <textarea
              className="form-control"
              name="body"
              id="body"
              value={body}
              onChange={this.onIsiChangeHandler}
              placeholder="Isi catatan"
              style={{ height: "200px" }}
            ></textarea>
          </div>
          <div className="mt-4 d-grid">
            <button
              className="btn btn-primary"
              type="submit"
              disabled={!title.length || !body.length}
            >
              Simpan
            </button>
          </div>
        </form>
      </div>
    );
  }
}
