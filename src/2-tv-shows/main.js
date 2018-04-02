import { Modal } from './Modal.js';

const imgs = Array.from(document.querySelectorAll('.poster'));

imgs.forEach(img => {
  img.onclick = () => {
    const modal = new Modal(img.attributes.src.value);
    modal.open();
  };
});

const searchTVShow = e => {
  const value = e.target.value;

  const keywords = value.toUpperCase();
  imgs.forEach(img => {
    img.classList.remove('is-hidden');
    if (keywords.length <= 2) {
      return;
    }
    const imgKeywords = img.dataset.keywords.toUpperCase();
    if (!imgKeywords.includes(keywords)) {
      img.classList.add('is-hidden');
    } else {
      img.classList.remove('is-hidden');
    }
  });
};

const searchInput = document.querySelector('[name="search-input"]');
searchInput.addEventListener('input', searchTVShow);
