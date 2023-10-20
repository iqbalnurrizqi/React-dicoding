import React from "react";

export default function Header({search, setSearch}) {
    
    return (
      <div className="note-app__header">
        <h1>buku catatan</h1>
      <form className="note-search" >
        <input type="text" placeholder="Cari catatan" value={search} onChange={(e) => setSearch(e.target.value)} />
      </form>
      </div>
    );
    
  }