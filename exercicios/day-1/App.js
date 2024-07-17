// Challenge 1 of 4: Exportar o componente.
export default function Profile() {
  return (
    <img
      src="https://i.imgur.com/lICfvbD.jpg"
      alt="Aklilu Lemma"
    />
  );
}

// Challenge 2 of 4: Corrija a declaração de retorno.
export default function Profile() {
  return (
    <img 
      src="https://i.imgur.com/jA8hHMpm.jpg" 
      alt="Katsuko Saruhashi" 
    />
  );
}


// Challenge 3 of 4: Identifique o erro.
function Profile() {
  return (
    <img
      src="https://i.imgur.com/QIrZWGIs.jpg"
      alt="Alan L. Hart"
    />
  );
}

export default function Gallery() {
  return (
    <section>
      <h1>Cientistas incríveis</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}

// Challenge 4 of 4: Seu próprio componente. 
function Congratulations() {
  return (
    <h1>Bom trabalho!</h1>
  );
}

export default function MyComponent() {
  return ( 
    <div>
      <Congratulations />
    </div>
  );
}

// Challenge 1 of 1: Divida os componentes ainda mais.
import Gallery from '../../teste1/day-1/Gallery.js';
import Profile from '../../teste1/day-1/Profile.js';

export default function App() {
  return (
    <div>
      <Profile />
      <Gallery />
    </div>
  );
}

// Challenge 1 of 1: Converter algum HTML para JSX.
export default function Bio() {
  return (
    <>
  <div className="intro">
    <h1>Welcome to my website!</h1>
    <p className="summary">
      You can find my thoughts here.
      <br />
      <br />
      <b>
        And <i>pictures</i>
      </b>
      of scientists!
    </p>
  </div>
      </>
      );
}