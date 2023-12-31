import { books, authors, genres, BOOKS_PER_PAGE, } from './data.js';
import { bookFactory} from './book.js';

// Initialize page variables
let page = 1;
let matches = books;
let filteredBooks = books;
// Create a starting fragment for book elements
const startingFragment = document.createDocumentFragment();

// Loop through the first page of matches and create book elements
for (const book of matches.slice(0, BOOKS_PER_PAGE)) {
    const bookElement = bookFactory.createBookElement(book);
    startingFragment.appendChild(bookElement);
}

// Append the startingFragment to the appropriate element in your HTML
document.querySelector('[data-list-items]').appendChild(startingFragment);


// Create genre dropdown options
const genreHtml = document.createDocumentFragment();
const firstGenreElement = document.createElement('option');
firstGenreElement.value = 'any';
firstGenreElement.innerText = 'All Genres';
genreHtml.appendChild(firstGenreElement);

for (const [id, name] of Object.entries(genres)) {
    const element = document.createElement('option');
    element.value = id;
    element.innerText = name;
    genreHtml.appendChild(element);
}

document.querySelector('[data-search-genres]').appendChild(genreHtml);

// Create authors dropdown options
const authorsHtml = document.createDocumentFragment();
const firstAuthorElement = document.createElement('option');
firstAuthorElement.value = 'any';
firstAuthorElement.innerText = 'All Authors';
authorsHtml.appendChild(firstAuthorElement);

for (const [id, name] of Object.entries(authors)) {
    const element = document.createElement('option');
    element.value = id;
    element.innerText = name;
    authorsHtml.appendChild(element);
}

document.querySelector('[data-search-authors]').appendChild(authorsHtml);

// Set theme based on user preference
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.querySelector('[data-settings-theme]').value = 'night';
    bookFactory.toggleTheme('night')

} else {
    document.querySelector('[data-settings-theme]').value = 'day';
    bookFactory.toggleTheme('day')

}

document.querySelector('[data-list-button]').innerText = `Show more (${books.length - BOOKS_PER_PAGE})`;
document.querySelector('[data-list-button]').disabled = (matches.length - (page * BOOKS_PER_PAGE)) < 0;

document.querySelector('[data-list-button]').innerHTML = `
    <span>Show more</span>
    <span class="list__remaining"> (${(matches.length - (page * BOOKS_PER_PAGE)) >   0 ? (matches.length - (page * BOOKS_PER_PAGE)) : 0})</span>
`;

document.querySelector('[data-search-cancel]').addEventListener('click', () => {
    document.querySelector('[data-search-overlay]').open = false;
});

document.querySelector('[data-settings-cancel]').addEventListener('click', () => {
    document.querySelector('[data-settings-overlay]').open = false;
});

document.querySelector('[data-header-search]').addEventListener('click', () => {
    document.querySelector('[data-search-overlay]').open = true;
    document.querySelector('[data-search-title]').focus();
});

document.querySelector('[data-header-settings]').addEventListener('click', () => {
    document.querySelector('[data-settings-overlay]').open = true;
});

document.querySelector('[data-list-close]').addEventListener('click', () => {
    document.querySelector('[data-list-active]').open = false;
});



document.querySelector('[data-settings-form]').addEventListener('submit', (event) => {


    //book
    event.preventDefault();
    const formData = new FormData(event.target);
    const { theme } = Object.fromEntries(formData);

// dn here
    bookFactory.toggleTheme(theme);

    document.querySelector('[data-settings-overlay]').open = false;

});




document.querySelector('[data-search-form]').addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const filters = Object.fromEntries(formData);
    const result = [];

    for (const book of books) {
        let genreMatch = filters.genre === 'any';
    

        for (const singleGenre of book.genres) {
            if (genreMatch) break;
            if (singleGenre === filters.genre) {
                genreMatch = true;
            
            }
        }

        if (
            (filters.title.trim() === '' || book.title.toLowerCase().includes(filters.title.toLowerCase())) &&
            (filters.author === 'any' || book.author === filters.author) &&
            genreMatch
        ) {
            result.push(book);
        }
    }

    page = 1;
    matches = result;

    if (result.length < 1) {
        document.querySelector('[data-list-message]').classList.add('list__message_show');
    } else {
        document.querySelector('[data-list-message]').classList.remove('list__message_show');
    }

    document.querySelector('[data-list-items]').innerHTML = '';
    const newItems = document.createDocumentFragment();
    //here
    for (const { author, id, image, title } of result.slice(0, BOOKS_PER_PAGE)) {
       const bookSearchElement = bookFactory.createBookElement(author, id, image, title)
        newItems.appendChild(bookSearchElement);
    }

    document.querySelector('[data-list-items]').appendChild(newItems);
    document.querySelector('[data-list-button]').disabled = (matches.length - (page * BOOKS_PER_PAGE)) < 1;

    document.querySelector('[data-list-button]').innerHTML = `
        <span>Show more</span>
        <span class="list__remaining"> (${(matches.length - (page * BOOKS_PER_PAGE)) < 0 ? (matches.length - (page * BOOKS_PER_PAGE)) : 0})</span>
    `;

    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.querySelector('[data-search-overlay]').open = false;
});

document.querySelector('[data-list-button]').addEventListener('click', () => {
    const fragment = document.createDocumentFragment();
    //here
    for (const book of filteredBooks.slice((BOOKS_PER_PAGE*page), (BOOKS_PER_PAGE*(page+1)))) {
        const bookElement = bookFactory.createBookElement(book);
        fragment.appendChild(bookElement);
    }

    document.querySelector('[data-list-items]').appendChild(fragment);
    page += 1;
});



//encapulated button click event

document.querySelector('[data-list-items]').addEventListener('click', (event)=>{

const pathArray = Array.from(event.path || event.composedPath());

bookFactory.bookShow(pathArray, matches)

});