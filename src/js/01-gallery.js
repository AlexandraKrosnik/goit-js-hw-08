// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryEl = document.querySelector(".gallery");

const galleryImg = makeGalery(galleryItems);

galleryEl.innerHTML = galleryImg;

openLightBox();

function makeGalery(items) {
    return items.map(({original, preview, description}) => `   
        <a class="gallery__item" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"            
            alt="${description}"            
            />
        </a>    
    `).join("");
}

function openLightBox() {
  new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionsData: 'alt',
    close: true,   
});   
}   

