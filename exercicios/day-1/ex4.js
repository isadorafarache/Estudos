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