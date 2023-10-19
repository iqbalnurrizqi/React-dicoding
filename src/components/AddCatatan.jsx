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

    function handleMove (id) {
        setNote(notes.map((note) => note.id === id ? {...note, archived: !note.archived} : note))
    }

    function handleSearch (search) {
        preventDefault()
        setNote(notes.filter((note) => note.title === search ? [...notes] : null));
      
    }
    

  return (
    <div >
      <Header onSearch={handleSearch} />
      <InputNote onAddNote={handleSubmitNote} />
      <Body notes={notes} onRemoveNote={handleRemove} onMoveNote={handleMove}/>
    </div>
  );
}

function Header() {
    const [search, setSearch] = useState('')


    function handleSearch(e) {
        e.preventDefault()
        if (!search) return
    }

    console.log(search);
    

  return (
    <div className="note-app__header">
      <h1>buku catatan</h1>
    <form className="note-search" onSubmit={handleSearch}>
      <input type="text" placeholder="Cari catatan" value={search} onChange={(e) => setSearch(e.target.value)} />
    </form>
    </div>
  );
  
}

function InputNote({ onAddNote }) {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    


    function handleSubmitNote(e) {
        e.preventDefault();
        if(!title || !body ) return 

        const newNote = {
            id: Date.now(),
            title, 
            createdAt:new Date(),
            archived: false,
            body,
    }

    onAddNote(newNote);
    console.log(newNote);
    console.log(body)
    setTitle('');
    setBody('');
    }

  return (
    <>
      <form className="note-app__body note-input" onSubmit={handleSubmitNote}>
        <h2 className="note-app__title">isi catatan</h2>
        <input type="text" placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
        <textarea name="" id="" cols="30" rows="10" placeholder="body" value={body} onChange={(e) => setBody(e.target.value)} >
        </textarea>
        <button>tombol</button>
      </form>
    </>
  );
}

function Body({notes, onRemoveNote, onMoveNote }) {
  return (
    <div className="note-app__body">
      <div className="note">
        <h1>Catatan Aktiv</h1>
      </div>
      <div className="notes-list">
        {notes.filter((note) => note.archived === false).map((note) => (
           <Note note={note} key={note.id} id={note.id} {...note} onRemoveNote={onRemoveNote} onMoveNote={onMoveNote}/>          
         ))} 
         
      </div>
          <div className="note">
            <h1>Arship Catatan</h1>
          </div>
            <div className="notes-list">
                {notes.filter((note) => note.archived).map((note) => (                   
                <NoteArchive note={note} key={note.id} id={note.id} {...note} onRemoveNote={onRemoveNote} onMoveNote={onMoveNote}/>                    
                ))}
            </div>
    </div>
  );
}

function Note({note, onRemoveNote,  body, createdAt, onMoveNote}) {
    return (
        <div className=" note-item note-item__content" key={note.id}>
                <h2 className="note-item__title">{note.title}</h2>
                <p className="note-item__date">{showFormattedDate(createdAt)}</p>
                <p className="note-item__body">{body}</p>
                <div className="note-item__action">
                <button className="note-item__delete-button" onClick={() => onRemoveNote(note.id)}>hapus</button>
                <button className="note-item__archive-button" onClick={() => onMoveNote(note.id)}>archived</button>
                </div>

       </div>
    )
}
function NoteArchive({note, onRemoveNote,  body, createdAt, onMoveNote}) {
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



