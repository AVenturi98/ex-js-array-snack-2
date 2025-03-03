const books = [
    {
        title: "React Billionaire",
        pages: 250,
        author: {
            name: 'Alice',
            age: 35
        },
        available: false,
        price: '101€',
        tags: ['advanced', 'js', 'react', 'senior']
    },
    {
        title: "Advanced JS",
        pages: 500,
        author: {
            name: 'Bob',
            age: 20
        },
        available: true,
        price: '25€',
        tags: ['advanced', 'js', 'mid-senior']
    },
    {
        title: "CSS Secrets",
        pages: 320,
        author: {
            name: 'Alice',
            age: 17
        },
        available: true,
        price: '8€',
        tags: ['html', 'css', 'junior']
    },
    {
        title: "HTML Mastery",
        pages: 200,
        author: {
            name: 'Charlie',
            age: 50
        },
        available: false,
        price: '48€',
        tags: ['html', 'advanced', 'junior', 'mid-senior']
    },
];


/**
 * Snack 6 (Bonus) - Ordina i libri
    Crea una variabile booleana (areThereAvailableBooks) per verificare se c’è almeno un libro disponibile.
    
    Crea un array (booksByPrice) con gli elementi di books ordinati in base al prezzo (crescente).
    
    Ordina l’array booksByPricein base alla disponibilità (prima quelli disponibili), senza creare un nuovo array.
 */

// verifico se almeno un libro è disponibile
const areThereAvailableBooks = books.some(book => book.available === true);

// creo l'array da ordinare in base al prezzo 
const booksByPrice = [...books];

// ordino l'array booksByPrice prima in base alla disponibilità e poi in base al prezzo numerico
booksByPrice.sort((a, b) => {
    if (a.available === b.available) {
        const priceA = Number(a.price.slice(0, -1)); // rimuovo l'ultimo carattere e converto in numero
        const priceB = Number(b.price.slice(0, -1)); // rimuovo l'ultimo carattere e converto in numero
        return priceA - priceB; // ordino in modo crescente
    }
    return a.available ? -1 : 1; // ordino prima quelli disponibili
});

console.log(booksByPrice);