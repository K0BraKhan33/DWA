
import { authors } from './data.js';


function BookElementFactory (){
  function createBookElement({ id, title, author, image }) {
    const bookElement = document.createElement('button');
    bookElement.classList.add('preview');
    bookElement.setAttribute('data-preview', id);

    bookElement.innerHTML = `
      <img class="preview__image" src="${image}" />
      <div class="preview__info">
        <h3 class="preview__title">${title}</h3>
        <div class="preview__author">${authors[author]}</div>
      </div>
    `;

    return bookElement;
  }

  function toggleTheme(LiDa) {
    const root = document.documentElement;
    if (LiDa === 'night') {
      root.style.setProperty('--color-dark', '255, 255, 255');
      root.style.setProperty('--color-light', '10, 10, 20');
    } else {
      root.style.setProperty('--color-dark', '10, 10, 20');
      root.style.setProperty('--color-light', '255, 255, 255');
    }
  }
 

function bookShow(theClick, books){

  let active = null;
  for (const node of theClick) {
      if (active) break;

      if (node?.dataset?.preview) {
          let result = null;

          for (const singleBook of books) {
              if (result) break;
              if (singleBook.id === node?.dataset?.preview) result = singleBook;
          }

          active = result;
      }
  }

  if (active) {
      document.querySelector('[data-list-active]').open = true;
      document.querySelector('[data-list-blur]').src = active.image;
      document.querySelector('[data-list-image]').src = active.image;
      document.querySelector('[data-list-title]').innerText = active.title;
      document.querySelector('[data-list-subtitle]').innerText = `${authors[active.author]} (${new Date(active.published).getFullYear()})`;
      document.querySelector('[data-list-description]').innerText = active.description;
  }



}

return {
  createBookElement,
  toggleTheme,
  bookShow
};

}


export const bookFactory = BookElementFactory();

