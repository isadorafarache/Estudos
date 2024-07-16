// Neste arquivo principal, importei tanto o Profile quanto o Gallery e os renderizei dentro do componente App.
// Essa foi a forma que eu resolvi, seguindo os passos do exercício "Divida os componentes ainda mais":

import Gallery from './Gallery.js';
import Profile from './Profile.js';

export default function App() {
  return (
    <div>
      <Profile />
      <Gallery />
    </div>
  );
}

// Aqui eu modifiquei o código, para ficar com uma visualização melhor e mais organizado:

import Gallery from './Gallery.js';
import Profile from './Profile.js';
export default function App() {
  return (
    <div>
      <Gallery />
      <Profile />
      <Profile />
      <Profile />
    </div>
  );
}
