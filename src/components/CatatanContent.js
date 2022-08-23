import React from "react";

export default function CatatanContent({ title, date, body }) {
  return (
    <div className="card-body">
      <h5 className="card-subtitle mb-2 text-muted">
        Judul : {title.length > 30 ? title.slice(0, 18) : title}
      </h5>
      <p className="card-text mb-2">{date}</p>
      <p className="card-text"><span className="fw-semibold">
        Isi :</span> {body.length > 200 ? body.slice(0, 200) : body}
      </p>
    </div>
  );
}
