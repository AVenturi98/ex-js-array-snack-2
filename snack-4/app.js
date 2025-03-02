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
 * Snack 3 - Calcola l’età media
    - Creare un array (ages) che contiene le età degli autori dei libri.
    - Calcola la somma delle età (agesSum) usando reduce.
    - Stampa in console l’età media degli autori dei libri.
 */

const ages = [];

books.forEach(book => ages.push(book.author.age));

const sum = ages.reduce((a, b) => {
    return a + b
}, 0)

// console.log(ages); // (35, 20, 17, 50)
// console.log(sum) // 122
console.log(sum / ages.length) // 30.5