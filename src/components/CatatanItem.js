import React from "react";
import CatatanContent from "./CatatanContent";
import CatatanButton from "./CatatanButton";
import { showFormattedDate } from "../utils/index";

export default function CatatanItem({ note, onDelete, onArchive }) {
  return (
    <div className="card mb-2 mt-2">
      <CatatanContent
        title={note.title}
        date={showFormattedDate(note.createdAt)}
        body={note.body}
      />
      <CatatanButton
        isArchived={note.archived}
        onDelete={() => onDelete(note.id)}
        onArchive={() => onArchive(note.id)}
      />
    </div>
  );
}
