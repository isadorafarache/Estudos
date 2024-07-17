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
