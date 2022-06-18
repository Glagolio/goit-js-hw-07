import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

const listGalleryEl = galleryItems.map(image =>
    `<a class="gallery__item" href="${image.original}">
            <img 
                class="gallery__image"
                src="${image.preview}"
                alt="${image.description}"
            />
        </a>
    `).join('');

galleryEl.insertAdjacentHTML("beforeend", listGalleryEl);

let lightBox = new SimpleLightbox('.gallery .gallery__item', { captionsData: 'alt', captionDelay: '250' });

const slideDescr = document.querySelector('.sl-caption');

// lightBox.on('shown.simplelightbox', slideDescr => )

