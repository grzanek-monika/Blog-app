const initialState = {
  posts: [
    {
        id: '1',
        title: 'Article title',
        shortDescription: 'Short description of the article...',
        content: 'Main content of the article',
        publishedDate: new Date('02-02-2023'),
        author: 'John Doe'
    },
    {
        id: '2',
        title: 'Article title II',
        shortDescription: 'Short description of the article...',
        content: 'Main content of the article',
        publishedDate: new Date('02-07-2023'),
        author: 'Merry Peter'
    },
    {
        id: '3',
        title: 'Article title III',
        shortDescription: 'Short description of the article...',
        content: 'Main content of the article',
        publishedDate: new Date('02-02-2024'),
        author: 'Amanda Smith'
    }   
  ],
  categories: [
    'Sport', 'News', 'Movies'
  ]
}


export default initialState;