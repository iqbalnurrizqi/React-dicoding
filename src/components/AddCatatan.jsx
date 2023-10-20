import React, { useState } from "react";
import { getInitialData, showFormattedDate } from "../utils";
import Header from "./Header"
import InputNote from "./InputNote";
import Body from "./Body"

// ini bagian dari function

export default function AddCatatan() {
    const [notes, setNote]  = useState(getInitialData());
    const [search, setSearch] = useState('');
    console.log(search)

    function handleSubmitNote (note) {
        setNote([...notes, note ]);
    }

    function handleRemove (id) {
        setNote(notes.filter((note) => note.id !== id))
    }

    function handleMove (id) {
        setNote(notes.map((note) => note.id === id ? {...note, archived: !note.archived} : note))
    }

    
  return (
    <div >
      <Header search={search} setSearch={setSearch} />
      <InputNote onAddNote={handleSubmitNote} />
      <Body notes={notes} search={search} onRemoveNote={handleRemove} onMoveNote={handleMove}/>
    </div>
  );
}




