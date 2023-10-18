import React, { useState } from "react";
import { getInitialData, showFormattedDate } from "../utils";


// ini bagian dari function

export default function AddCatatan() {
    const [notes, setNote]  = useState(getInitialData());
    
    
    function handleSubmitNote (note) {
        setNote([...notes, note ]);
    }

    function handleRemove (id) {
        setNote(notes.filter((note) => note.id !== id))
    }

  return (
    <div >
      <Header />
      <InputNote onAddNote={handleSubmitNote} />
      <Body notes={notes} onRemoveNote={handleRemove} />
    </div>
  );
}

function Header() {
  return (
    <div className="note-app__header">
      <h1>buku catatan</h1>
      <input type="text" placeholder="search"/>
    </div>
  );
}

function InputNote({ onAddNote, createdAt}) {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    


    function handleSubmitNote(e) {
        e.preventDefault();
        if(!title || !body ) return 

        const newNote = {
            id: Date.now(),
            title, 
            createdAt: showFormattedDate(createdAt),
            archived: false,
            body,
    }

    onAddNote(newNote);
    console.log(newNote);

    setTitle('');
    setBody('');
    }

  return (
    <>
      <form className="note-app__body note-input" onSubmit={handleSubmitNote}>
        <h2 className="note-app__title">isi catatan</h2>
        <input type="text" placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
        <textarea name="" id="" cols="30" rows="10" placeholder="body" value={body} onChange={(e) => setBody(e.target.value)}>
        </textarea>
        <button>tombol</button>
      </form>
    </>
  );
}

function Body({notes, onRemoveNote, }) {
  return (
    <div className="note-app__body">
      <div className="note">
        <h1>Catatan Aktiv</h1>
      </div>
      <div className="notes-list">
        {notes.map((note) => (
           <Note note={note} key={note.id} id={note.id} {...note} onRemoveNote={onRemoveNote} />
                      
         ))} 
         
      </div>
          
    </div>
  );
}

function Note({note, onRemoveNote,  body, createdAt}) {
    return (
        <div className=" note-item note-item__content" key={note.id}>
                <h2 className="note-input__title">{note.title}</h2>
                <p className="note-item__date">{showFormattedDate(createdAt)}</p>
                <p className="note-item__body">{body}</p>
                <div className="note-item__action">
                <button className="note-item__delete-button" onClick={() => onRemoveNote(note.id)}>hapus</button>
                <button className="note-item__archive-button">archived</button>
                </div>
        </div>
    )
}



