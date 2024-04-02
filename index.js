export async function handler(event) {
    const quotes = [
        {"To live is the rarest thing in the world. Most people exist, that is all." : "Oscar Wilde"},
        {"Without music, life would be a mistake." : "Friedrich Nietzsche"},
        {"Always forgive your enemies; nothing annoys them so much." : "Oscar Wilde" },
        {"The only way to do great work is to love what you do." : "Steve Jobs"},
        {"It is never too late to be what you might have been." : "George Eliot"},
        {"Do what you can, with what you have, where you are." : "Theodore Roosevelt"},
        {"Be yourself; everyone else is already taken." : "Oscar Wilde"},
        {"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe." : "Albert Einstein"},
        {"So many books, so little time." : "Frank Zappa"},
        {"A room without books is like a body without a soul." : "Marcus Tullius Cicero"},
        {"You must be the change you wish to see in the world." : "Mahatma Gandhi"},
        {"In three words I can sum up everything I've learned about life: it goes on." : "Robert Frost"},
        {"If you tell the truth, you don't have to remember anything." : "Mark Twain"},
        ];
    // scalable api quotes
    function getRandomQuote() {
        const index = Math.floor(Math.random() * quotes.length);
        return quotes[index];
    }
    
    const response = {
        statusCode: 200,
        headers:{
            "Content-Type": "application/json"
        },

        body: JSON.stringify(getRandomQuote())
    }

    return response;
}
