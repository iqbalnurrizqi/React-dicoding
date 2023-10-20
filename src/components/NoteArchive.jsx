import React from "react";
import { showFormattedDate } from "../utils";


export default function NoteArchive({note, onRemoveNote,  body, createdAt, onMoveNote}) {
    return (
        <div className=" note-item note-item__content" key={note.id}>
                <h2 className="note-item__title">{note.title}</h2>
                <p className="note-item__date">{showFormattedDate(createdAt)}</p>
                <p className="note-item__body">{body}</p>
                <div className="note-item__action">
                <button className="note-item__delete-button" onClick={() => onRemoveNote(note.id)}>hapus</button>
                <button className="note-item__archive-button" onClick={() => onMoveNote(note.id)}>kembali</button>
                </div>

       </div>
    )
}