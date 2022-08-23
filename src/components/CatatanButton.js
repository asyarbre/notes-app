import React from "react";

export default function CatatanButton({ isArchived, onDelete, onArchive }) {
  return (
    <div>
      <button className="btn btn-danger btn-sm m-2" onClick={onDelete}>
        Hapus
      </button>
      <button className="btn btn-warning btn-sm" onClick={onArchive}>
        {isArchived ? "Pindahkan" : "Arsipkan"}
      </button>
    </div>
  );
}
