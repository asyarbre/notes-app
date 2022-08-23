import React from "react";
import CatatanItem from "./CatatanItem";

export default function CatatanList({ notes, onDelete, onArchive }) {
  return (
    <div>
      {notes.length ? (
        notes.map((note) => (
          <CatatanItem
            key={note.id}
            note={note}
            onDelete={onDelete}
            onArchive={onArchive}
          />
        ))
      ) : (
        <h5 className="mt-4">Tidak ada catatan</h5>
      )}
    </div>
  );
}
