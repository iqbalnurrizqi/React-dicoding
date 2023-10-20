import React from "react";
import Note from "./Note";
import NoteArchive from "./NoteArchive";

export default function Body({notes, onRemoveNote, onMoveNote, search }) {
    return (
      <div className="note-app__body">
        <div className="note">
          <h1>Catatan Aktif</h1>
        </div>
        <div className="notes-list">
          {notes.filter((note) => !note.archived || search === note.title ? note.title.toLowerCase().includes(search.toLowerCase()) : null).map((note) => (
             <Note note={note} key={note.id} id={note.id} {...note} onRemoveNote={onRemoveNote} onMoveNote={onMoveNote}/>          
           ))} 
           
        </div>
            <div className="note">
              <h1>Arsip</h1>
            </div>
              <div className="notes-list">
                  {notes.filter((note) => note.archived || search === note.title ? note.title.toLowerCase().includes(search.toLowerCase()) : null ).map((note) => (                   
                  <NoteArchive note={note} key={note.id} id={note.id} {...note} onRemoveNote={onRemoveNote} onMoveNote={onMoveNote}/>                    
                  ))}
              </div>
      </div>
    );
  }


//   if (e.target.value.length > 50) {
//     e.target.value = e.target.value.slice(0, 50)
// }