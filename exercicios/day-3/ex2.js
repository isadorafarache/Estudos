// Challenge 2 of 3: Ajuste o tamanho da imagem com base em uma prop.
// Abaixo App.js
import { getImageUrl } from './utils.js';

function Avatar({ person, size }) {
  const thumbnailSize = size > 90 ? 'b' : 's';

  return (
    <img
      className="avatar"
      src={getImageUrl(person, thumbnailSize)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default Avatar;

// Abaixo utils.js
export function getImageUrl(person, size) {
    return 'https://i.imgur.com/' + person.imageId + size + '.jpg';
  }
