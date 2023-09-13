// book.js

// Import the necessary modules and data
//import { authors } from './data.js';
//import { PreviewBook } from './components.js';

class BookFactory {
  constructor(authors) {
    this.newAuthor = authors;
  }

  createBookElement({ id, title, author, image }) {
    // Create a button element
    const bookElement = document.createElement('button');
    bookElement.classList.add('preview');
    bookElement.setAttribute('data-preview', id);

    // Create a new instance of the PreviewBook custom element
    const preBookElement = new PreviewBook();

    // Set the data attributes for the PreviewBook element
    preBookElement.setAttribute('data-images', image);
    preBookElement.setAttribute('data-titles', title);
    preBookElement.setAttribute('data-authors', author);

    // Append the PreviewBook custom element to the button
    bookElement.appendChild(preBookElement);

    // Append the button element to the appropriate container in your HTML
    document.querySelector('[data-list-items]').appendChild(bookElement);

    return bookElement;
  }
  

  toggleTheme(LiDa) {
    const root = document.documentElement;
    if (LiDa === 'night') {
      root.style.setProperty('--color-dark', '255, 255, 255');
      root.style.setProperty('--color-light', '10, 10, 20');
    } else {
      root.style.setProperty('--color-dark', '10, 10, 20');
      root.style.setProperty('--color-light', '255, 255, 255');
    }
  }
}

// Create an instance of the BookFactory class
//const bookFactory = new BookFactory();

// Export the bookFactory instance
export default BookFactory ;


