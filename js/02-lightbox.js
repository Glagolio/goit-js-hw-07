import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

const listGalleryEl = galleryItems.map(image =>
    `<div class="gallery__item>
        <a class="gallery__link href="${image.original}">
            <img 
                class="gallery__image"
                src="${image.preview}"
                alt="${image.alt}"
            />
        </a>
    </div>`).join('');

galleryEl.insertAdjacentHTML("beforeend", listGalleryEl);