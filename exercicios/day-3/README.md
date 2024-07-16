### 🔵 Challenge 1 of 3: Extraia um componente.
### Este componente Gallery contém marcação bastante similar para os dois perfis. Extraia um componente Profile a partir dele para reduzir a duplicação de código. Você precisará escolher quais props passar para ele.
- Nesse exemplo de código, utilizei React para renderizar perfis de cientistas em um componente Gallery, onde cada cientista é representado pelo componente Profile.

- Abaixo App.js
```gist
// import { getImageUrl } from './utils.js';

function Profile({
  imageId,
  name,
  profession,
  awards,
  discovery,
  imageSize = 70
}) {
  return (
    <section className="profile">
      <h2>{name}</h2>
      <img
        className="avatar"
        src={getImageUrl(imageId)}
        alt={name}
        width={imageSize}
        height={imageSize}
      />
      <ul>
        <li><b>Profession:</b> {profession}</li>
        <li>
          <b>Awards: {awards.length} </b>
          ({awards.join(', ')})
        </li>
        <li>
          <b>Discovered: </b>
          {discovery}
        </li>
      </ul>
    </section>
  );
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        imageId="szV5sdG"
        name="Maria Skłodowska-Curie"
        profession="physicist and chemist"
        discovery="polonium (chemical element)"
        awards={[
          'Nobel Prize in Physics',
          'Nobel Prize in Chemistry',
          'Davy Medal',
          'Matteucci Medal'
        ]}
      />
      <Profile
        imageId='YfeOqp2'
        name='Katsuko Saruhashi'
        profession='geochemist'
        discovery="a method for measuring carbon dioxide in seawater"
        awards={[
          'Miyake Prize for geochemistry',
          'Tanaka Prize'
        ]}
      />
    </div>
  );
}`
``` 
- Abaixo utlis.js
export function getImageUrl(imageId, size = 's') {
  return (
    'https://i.imgur.com/' +
    imageId +
    size +
    '.jpg'
  );
}

### 🔵 Challenge 2 of 3: Ajuste o tamanho da imagem com base em uma prop.
- Reutilização e Configurabilidade: O componente Avatar pode ser facilmente reutilizado em várias partes da aplicação para renderizar avatares com diferentes tamanhos, utilizando dados específicos de cada pessoa através da prop person.
- Clareza e Manutenção: Separar a lógica de construção da URL da imagem em uma função utilitária (getImageUrl) torna o código mais limpo e facilita a manutenção, garantindo consistência na forma como as URLs das imagens são construídas e utilizadas.

- Abaixo App.js
```gist
// import { getImageUrl } from './utils.js';
function Avatar({ person, size }) {
  let thumbnailSize = 's';
  if (size > 90) {
    thumbnailSize = 'b';
  }
  return (
    <img
      className="avatar"
      src={getImageUrl(person, thumbnailSize)}
      alt={person.name}
      width={size}
      height={size}
    />
  );`
  ```
  
```gist
// - Abaixo utils.js
`export function getImageUrl(person, size) {
  return (
    'https://i.imgur.com/' +
    person.imageId +
    size +
    '.jpg'
  );
}
```

### 🔵 Challenge 3 of 3: Passando JSX em uma prop children.
### Extraia um componente Card da marcação abaixo, e use a prop children para passar JSX diferente a ele.
- Qualquer JSX que você colocar dentro da tag do componente será passada como prop children para o mesmo.
import React from 'react';
- Dessa forma, o componente Card pode ser reutilizado em qualquer lugar da aplicação para encapsular diferentes tipos de conteúdo em um cartão estilizado de forma consistente.

```gist
// function Card({ children }) {
  return (
    <div className="card">
      <div className="card-content">
        {children}
      </div>
    </div>
  );
}

export default function Profile() {
  return (
    <div>
      <Card>
        <h1>Photo</h1>
        <img
          className="avatar"
          src="https://i.imgur.com/OKS67lhm.jpg"
          alt="Aklilu Lemma"
          width={90}
          height={90}
        />
      </Card>
      <Card>
        <h1>About</h1>
        <p>Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.</p>
      </Card>
    </div>
  );
}
```

### 🔵 Challenge 1 of 3: Mostre um ícone para itens incompletos com `? :`.
### Use o operador condicional (cond ? a : b) para renderizar um ❌ se isPacked não for true.
- Essa abordagem demonstra como utilizar JSX dinâmico e condicional de forma simples e eficaz dentro de componentes React para manipular diferentes estados e propriedades.

```gist
// function Item({ name, isPacked }) {
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
```

### 🔵 Challenge 2 of 3: Mostrar a importância do item com `&&`.
### Neste exemplo, cada Item recebe uma prop importance numérica. Use o operador && para renderizar “(Relevância: X)” em itálico, mas apenas para os itens que têm relevância diferente de zero. Sua lista de itens deve ficar assim:
- Traje espacial (Relevância: 9)
- Capacete com folha dourada
- Foto de Tam (Relevância: 6)

- O operador && permite uma maneira concisa de realizar renderização condicional em JSX, ajudando a mostrar informações adicionais apenas quando necessário.
- A adição da relevância em itálico ao lado do nome do item (quando aplicável) fornece uma indicação visual rápida da importância de cada item na lista.

```gist
// import React from 'react';

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
```

### 🔵 Challenge 3 of 3: Refatore uma série de `? :` para `if` e variáveis.
### Este componente `Drink` usa uma série de condições `? :` para mostrar informações diferentes dependendo se a prop `name` for "tea" ou "coffee". O problema é que as informações sobre cada bebida estão espalhadas em várias condições. Refatore este código para usar uma única declaração `if` em vez de três condições `? :`.
- Aqui está como poderia ser feito:

```gist
// const drinks = {
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
```