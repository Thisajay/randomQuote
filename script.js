const quotes = [{
        quote: 'If you want something new, you have to stop doing something old ',
        author: '― Peter Drucker',
    },
    {
        quote: 'Be a worthy worker and work will come.',
        author: '― Amit Kalantri',
    },
    {
        quote: ' It is not how long but how well we live that matters. ',
        author: 'Jeremiah Say',
    },
    {
        quote: 'Life is not a solo but a chorus. We live in relationships from cradle to grave. ',
        author: 'Anon',
    },
    {
        quote: 'Life is worth living better than most men live it.',
        author: 'Anon',
    },
    {
        quote: 'Everything in life is a test of character. ',
        author: 'John Blanchard',
    },

    {
        quote: 'Life is too short to be small.',
        author: 'Benjamin Disraeli',
    },
    {
        quote: 'Every man’s life is his opportunity of doing that which will make for him in eternity.',
        author: 'Mathew Henry',
    },

    {
        quote: 'The most important thing in life is to live your life for something more important than your life.',
        author: 'William James',
    },
    {
        quote: 'Make sure the thing you are living for is worth dying for.',
        author: 'Charles Mayes',
    },
];

const btn = document.getElementById('genratequote');
const quote = document.getElementById('quote');
const author = document.getElementById('author');

btn.addEventListener('click', () => {
    let random = Math.floor(Math.random() * quotes.length);
    let generate = quotes[random];
    quote.innerHTML = generate.quote;
    author.innerHTML = generate.author;
});