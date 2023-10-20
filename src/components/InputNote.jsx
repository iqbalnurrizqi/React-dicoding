import { useState } from "react";
import React from "react";


export default function InputNote({ onAddNote }) {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [charLimit, setCharLimit] = useState(50);
    
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
    setTitle('');
    setBody('');
    }

    function countHandler(e) {
        const charCount = e.target.value.length;
        setCharLimit(50 - charCount);
          if (e.target.value.length > 50) {
                e.target.value = e.target.value.slice(0, 50)
            }
    }

  return (
    <>
      <form className="note-app__body note-input" onSubmit={handleSubmitNote}>
        <h2 className="note-app__title">Buat Catatan</h2>
        <h3 className="note-input__title__char-limit">sisa karakter:{charLimit}</h3>
        <input type="text" placeholder="title" maxLength={50} value={title}
         onChange={(e) => {setTitle(e.target.value); countHandler(e)}}/>
        <textarea name="" id="" cols="30" rows="10" placeholder="body" value={body} onChange={(e) => setBody(e.target.value)} >
        </textarea>
        <button>tombol</button>
      </form>
    </>
  );
}