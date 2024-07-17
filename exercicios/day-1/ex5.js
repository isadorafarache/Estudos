// Challenge 1 of 1: Divida os componentes ainda mais.
// Part 1 > Apps.js
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

// Parte 2 > Gallery.js
import Profile from '../../teste1/day-1/Profile.js';

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

// Parte 3 > Profile.js
export default function Profile() {
  return (
    <img
      src="https://i.imgur.com/QIrZWGIs.jpg"
      alt="Alan L. Hart"
    />
  );
}

