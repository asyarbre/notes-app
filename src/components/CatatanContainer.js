import React from "react";
import CatatanList from "./CatatanList";

export default function CatatanContainer(props) {
  const activeNotes = props.notes.filter((note) => !note.archived);
  const archivedNotes = props.notes.filter((note) => note.archived);

  return (
    <div className="mx-auto container text-center mt-5">
      <div className="row">
        <div className="col-6">
          <h5 className="card-header bg-secondary text-light p-1">Catatan Aktif</h5>
          <div className="card p-2">
            <CatatanList {...props} notes={activeNotes} />
          </div>
        </div>
        <div className="col-6">
          <h5 className="card-header bg-success text-light p-1">Arsip</h5>
          <div className="card p-2">
            <CatatanList {...props} notes={archivedNotes} />
          </div>
        </div>
      </div>
    </div>
  );
}
