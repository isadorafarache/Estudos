// Challenge 1 of 1: Divida os componentes ainda mais.
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