
## 📅 12.07.2024
### 🔵 Challenge 1 of 4: Exportar o componente.
Eu apenas adicionei o "export default" e o código funcionou.

```gist
// export default function Profile() {
  return (
    <img
      src="https://i.imgur.com/lICfvbD.jpg"
      alt="Aklilu Lemma"
    />
  );
}
```

### 🔵 Challenge 2 of 4: Corrija a declaração de retorno.
- Aqui eu removi o ";" que estava no final do atributo alt, adicionei o "()" e coloquei o ";" no final dele.

```gist
// export default function Profile() {
  return (
    <img 
      src="https://i.imgur.com/jA8hHMpm.jpg" 
      alt="Katsuko Saruhashi" 
    />
  );
}
```

### 🔵 Challenge 3 of 4: Identifique o erro.
- Os componentes estavam com letras minúsculas `<profile />`, eu modifiquei para `<Profile />`.
- Isso significa que o nome do componente deve começar com uma letra maiúscula.

```gist
// function Profile() {
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
      <profile />
      <profile />
      <profile />
    </section>
  );
}
```

### 🔵 Challenge 4 of 4: Seu próprio componente. 
#### Escreva um componente do zero. Você pode dar a ele qualquer nome válido e retornar qualquer JSX. Se você está sem ideias, você pode escrever um componente Congratulations que mostre `<h1>Bom trabalho!</h1>`. Não se esqueça de exportá-lo!
- Eu criei dessa forma e meu código funcionou corretamente.

```gist
// function Congratulations() {
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
```

### 🔵 Challenge 1 of 1: Divida os componentes ainda mais.
#### Atualmente, Gallery.js exporta Profile e Gallery, o que é um pouco confuso. Mova o componente Profile para seu próprio Profile.js e, em seguida, altere o componente App para renderizar `<Profile />` e `<Gallery />` um após o outro. Você pode usar uma exportação padrão ou nomeada para Profile, mas certifique-se de usar a sintaxe de importação correspondente tanto em App.js e Gallery.js!
- A resolução desse exercicio está nos arquivos App.js, Gallery.js e Profille.js.

### 🔵 Challenge 1 of 1: Converter algum HTML para JSX.
#### Este HTML foi colado em um componente, mas não é JSX válido. Corrija-o:

`export default function Bio() {
  return (
    <div class="intro">
      <h1>Welcome to my website!</h1>
    </div>
    <p class="summary">
      You can find my thoughts here.
      <br><br>
      <b>And <i>pictures</b></i> of scientists!
    </p>
  );
}
```

- No JSX, para definir classes CSS, você deve usar className em vez de class. Isso ocorre porque class é uma palavra reservada em JavaScript.
- As tags `<br>` devem ser fechadas com `/>` em JSX para serem válidas.
- Todos os elementos devem estar aninhados corretamente dentro do retorno da função. No código corrigido, `<p>` está dentro do `<div>`.
- As tags `<b>` e `<i>` foram fechadas corretamente na ordem correta dentro do JSX.
- Dessa forma, o código abaixo, corrigo por mim, descreve a maneira correta e válida:

```gist
// export default function Bio() {
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
```