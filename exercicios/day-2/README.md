## 📅 13.07.2024
### 🔵 Challenge 1 of 3: Corrija o erro.
### Este código é interrompido com um erro dizendo Objetos não são válidos como um filho React.
- Corrigido para acessar a propriedade name de person.

```gist
// const person = {
  name: 'Gregorio Y. Zara',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}
```

### 🔵 Challenge 2 of 3: Extraia informações para um objeto.
### Extraia o URL da imagem para o objeto person.
- Adicionei a propriedade imageUrl com o URL da imagem
- Depois usei a propriedade imageUrl no atributo src.

```gist
// const person = {
  name: 'Gregorio Y. Zara',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  },
  imageUrl: 'https://i.imgur.com/7vQD0fPs.jpg'
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src={person.imageUrl}
        alt="Gregorio Y. Zara"
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}
```

### 🔵 Challenge 3 of 3: Escreva uma expressão entre chaves JSX.
### No objeto abaixo, o URL completo da imagem é dividido em quatro partes: URL base, imageId, imageSize e extensão do arquivo.
### Queremos que o URL da imagem combine estes atributos: URL base (sempre 'https://i.imgur.com/'), imageId ('7vQD0fP'), imageSize ('s') e extensão de arquivo (sempre '.jpg'). Entretanto, há algo errado com a forma como a tag `<img>` especifica sua src.

- A correção realizada no código utiliza a forma tradicional de concatenação de strings em JavaScript, onde as variáveis e strings são combinadas usando o operador `+`.

```gist
// const baseUrl = 'https://i.imgur.com/';
const person = {
  name: 'Gregorio Y. Zara',
  imageId: '7vQD0fP',
  imageSize: 's',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src={baseUrl + person.imageId + person.imageSize + '.jpg'}
        alt={person.name}
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}
```
