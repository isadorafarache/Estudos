// Essa foi a forma que eu resolvi, seguindo os passos do exercício "Divida os componentes ainda mais":

import Profile from './Profile.js';

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

// Aqui eu modifiquei o código, para ficar com uma visualização melhor e mais organizado:

export default function Gallery() {
    return (
      <section>
        <h1>Cientistas incríveis</h1>
      </section>
    );
  }
  