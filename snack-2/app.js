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
 * Snack 2 - Il primo libro scontato
    - Creare un array (availableBooks) che contiene tutti i libri disponibili.
    - Crea un array (discountedBooks) con gli availableBooks, ciascuno con il prezzo scontato del 20% (mantieni lo stesso formato e arrotonda al centesimo)
    - Salva in una variabile (fullPricedBook) il primo elemento di discountedBooks che ha un prezzo intero (senza centesimi).
 */

const availableBooks = books.filter(book => book.available === true);

const discountedBooks = [];

const fullPricedBook = [];

availableBooks.map(book => {

    const discountPrice = book.price.split('');
    discountPrice.splice(-1);
    let price = Number;
    price = discountPrice.join('');

    discount = price * 20 / 100;

    price = price - discount;

    myArray = [];
    myArray.push(price);
    myArray.splice(1, 0, '€');
    let newPrice = myArray.join('');

    if (price - price.toFixed() === 0) fullPricedBook.push(newPrice)

    discountedBooks.push(newPrice)
})


console.log('Full Price', fullPricedBook)
console.log('All discount books', discountedBooks)