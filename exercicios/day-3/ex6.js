// Challenge 3 of 3: Refatore uma série de `? :` para `if` e variáveis.
const drinks = {
    tea: {
      part: 'folha',
      caffeine: '15–70 mg/xícara',
      age: '4.000+ anos'
    },
    coffee: {
      part: 'feijão',
      caffeine: '80–185 mg/xícara',
      age: '1.000+ anos'
    }
  };
  
  function Drink({ name }) {
    const info = drinks[name];
    return (
      <section>
        <h1>{name}</h1>
        <dl>
          <dt>Parte da planta</dt>
          <dd>{info.part}</dd>
          <dt>Teor de cafeína</dt>
          <dd>{info.caffeine}</dd>
          <dt>Idade</dt>
          <dd>{info.age}</dd>
        </dl>
      </section>
    );
  }
  
  export default function DrinkList() {
    return (
      <div>
        <Drink name="tea" />
        <Drink name="coffee" />
      </div>
    );
  }