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
 * Snack 5 (Bonus) - Raccogli i libri
    Usando la l'API https://boolean-spec-frontend.vercel.app/freetestapi/books/{id} usa la combinazione di .map() e Promise.all(), per creare una funzione (getBooks) che a partire da un array di id (ids), ritorna una promise che risolve un array di libri (books).
    Testala con l’array [2, 13, 7, 21, 19] .
 */

const fetchURL = async (url) => {
    try {
        const result = await fetch(url);
        const obj = await result.json();
        return obj
    } catch (err) {
        throw new Error(`Error in url ${url}`)
    }
}

const getBooks = async () => {

    try {

        // 1° soluzione
        // const ids = [2, 13, 7, 21, 19];

        // const callIds = ids.map(id => {
        //     return fetchURL(`https://boolean-spec-frontend.vercel.app/freetestapi/books/${id}`)
        // })

        // const objs = await Promise.all(callIds)

        // return objs


        //2° soluzione
        // const callIds = [2, 13, 7, 21, 19].map(id => {
        //     return fetchURL(`https://boolean-spec-frontend.vercel.app/freetestapi/books/${id}`)
        // })
        // return await Promise.all(callIds).then(res => console.log(res))


        // 3° soluzione
        const objs = await Promise.all([2, 13, 7, 21, 19].map(id => {
            return fetchURL(`https://boolean-spec-frontend.vercel.app/freetestapi/books/${id}`)
        }))

        return objs


    } catch (err) {
        console.error(err)
    }
}

(async () => {
    try {

        const res = await getBooks()
        console.log(res)

    } catch (err) {
        console.error(err)
    }
})()