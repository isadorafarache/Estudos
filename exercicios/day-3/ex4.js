// Challenge 1 of 3: Mostre um ícone para itens incompletos com `? :`.
// Use o operador condicional (cond ? a : b) para renderizar um ❌ se isPacked não for true.
function Item({ name, isPacked }) {
    return (
      <li className="item">
        {name} {isPacked ? '✔' : '❌'}
      </li>
    );
  }
  
  export default function PackingList() {
    return (
      <section>
        <h1>Packing List de Sally Ride</h1>
        <ul>
          <Item 
            isPacked={true} 
            name="Traje espacial"
          />
          <Item 
            isPacked={true} 
            name="Capacete com folha dourada"
          />
          <Item 
            isPacked={false} 
            name="Foto de Tam"
          />
        </ul>
      </section>
    );
  }