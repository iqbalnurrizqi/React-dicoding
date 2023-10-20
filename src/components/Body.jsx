import React from "react";
import Note from "./Note";
import NoteArchive from "./NoteArchive";

export default function Body({notes, onRemoveNote, onMoveNote, search }) {
    const noteActive = notes.filter((note) => !note.archived);
    const noteArchive = notes.filter((note) => note.archived);


    return (
      <div className="note-app__body">
        <div className="note">
          <h1>Catatan Aktif</h1>
        </div>
        <div className="notes-list">
          {noteActive.length === 0 ? <p className="notes-list__empty-message">Tidak ada catatan</p> :
          notes.filter((note) => !note.archived || search === note.title ? note.title.toLowerCase().includes(search.toLowerCase()) : null).map((note) => (
             <Note note={note} key={note.id} id={note.id} {...note} onRemoveNote={onRemoveNote} onMoveNote={onMoveNote}/>          
           ))} 
           
        </div>
            <div className="note">
              <h1>Arsip</h1>
            </div>
              <div className="notes-list">
                  {noteArchive.length === 0 ? <p className="notes-list__empty-message">tidak ada catatan </p> :
                  notes.filter((note) => note.archived || search === note.title ? note.title.toLowerCase().includes(search.toLowerCase()) : null ).map((note) => (                   
                  <NoteArchive note={note} key={note.id} id={note.id} {...note} onRemoveNote={onRemoveNote} onMoveNote={onMoveNote}/>                    
                  ))}
              </div>
      </div>
    );
  }


//   if (e.target.value.length > 50) {
//     e.target.value = e.target.value.slice(0, 50)
// }