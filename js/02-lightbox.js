import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const markup = galleryItems.reduce(
    (acc, { original, preview, description }) =>
      (acc += `<li>
    <a class="gallery-item" href="${original}">
      <img
        class="gallery-image"
        src="${preview}"
        alt="${description}"
      />
    </a>
  </li>`),
    ''
  );
  
  galleryContainer.insertAdjacentHTML('beforeend', markup);
  
  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });