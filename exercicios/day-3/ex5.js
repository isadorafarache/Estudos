// Challenge 2 of 3: Mostrar a importância do item com `&&`.
import React from 'react';

function Item({ name, importance }) {
  return (
    <li className="item">
      {name}
      {importance !== 0 && <i> (Relevância: {importance})</i>}
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>Packing List de Sally Ride</h1>
      <ul>
        <Item 
          importance={9} 
          name="Traje espacial"
        />
        <Item 
          importance={0} 
          name="Capacete com folha dourada"
        />
        <Item 
          importance={6} 
          name="Foto de Tam"
        />
      </ul>
    </section>
  );
}
