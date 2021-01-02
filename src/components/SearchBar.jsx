import React, { useState } from "react";
import style from './SearchBar.module.css';

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity('');
    }}>
      <input
        className={style.input}
        type="text"
        placeholder="Buscar Ciudad..."
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <input className={style.button} type="submit" value="Agregar" />
    </form>
  );
}
