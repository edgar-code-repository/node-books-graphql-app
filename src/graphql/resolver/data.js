const booksList = [
    {
        id: 101,
        title: "A Brief History of Time",
        authors: [{
            id: 201,
            firstName: "Stephen",
            lastName: "Hawking"
        }],
        description: "Told in language we all can understand, A Brief History of Time plunges into the exotic realms of black holes and quarks, of antimatter and “arrows of time,” of the big bang and a bigger God—where the possibilities are wondrous and unexpected. With exciting images and profound imagination, Stephen Hawking brings us closer to the ultimate secrets at the very heart of creation.",
        topic: {
            id: 301,
            name: "Science"
        },
        imageUrl: "https://m.media-amazon.com/images/I/61cQQST7o9L.jpg"
    },
    {
        id: 102,
        title: "C Programming Language",
        authors: [
            {
              id: 201,
              firstName: "Brian",
              lastName: "Kernighan"
            },
            {
              id: 202,
              firstName: "Dennis",
              lastName: "Ritchie"
            }          
        ],
        description: "For years, C programmers have let K&R guide them to building well-structured and efficient programs. Now this same help is available to those working with ANSI compilers. Includes detailed coverage of the C language plus the official C language reference manual for at-a-glance help with syntax notation, declarations, ANSI changes, scope rules, and the list goes on and on.",
        topic: {
            id: "302",
            name: "Programming"
        },
        imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51TGEPRTDNL._SX377_BO1,204,203,200_.jpg"
    },
    {
        id: 103,
        title: "1984",
        authors: [{
            id: 204,
            firstName: "George",
            lastName: "Orwell"
        }],
        description: "1984 is George Orwell’s haunting prophecy of the future, which has held multiple generations of readers spellbound in its chilling and terrifying vision of life under a dictatorship. Powerful and unforgettable, this still-relevant novel, written in 1948, explores the obliteration of truth, individuality, and liberty in a world where the ruling power seeks to control everything, from information to thought and memory.",
        topic: {
            id: 303,
            name: "Fiction"
        },
        imageUrl: "https://images-na.ssl-images-amazon.com/images/I/81HSpSoddtL.jpg"
    },
    {
        id: 104,
        title: "Emotional Intelligence",
        authors: [{
            id: 205,
            firstName: "Daniel",
            lastName: "Goleman"
        }],
        description: "Everyone knows that high IQ is no guarantee of success, happiness, or virtue, but until Emotional Intelligence, we could only guess why. Daniel Goleman's brilliant report from the frontiers of psychology and neuroscience offers startling new insight into our 'two minds'—the rational and the emotional—and how they together shape our destiny.",
        topic: {
            id: 304,
            name: "Psychology"
        },
        imageUrl: "https://images-na.ssl-images-amazon.com/images/I/81boBok4oJL.jpg"
    },
    { 
        id: 105, 
        title: "Brave New World", 
        authors: [{
            id: 206,
            firstName: "Aldous",
            lastName: "Huxley"
        }],
        description: "Largely set in a futuristic World State, whose citizens are environmentally engineered into an intelligence-based social hierarchy, the novel anticipates huge scientific advancements in reproductive technology, sleep-learning, psychological manipulation and classical conditioning that are combined to make a dystopian society which is challenged by only a single individual: the story's protagonist.",
        topic: {
            id: 303,
            name: "Fiction"
        },
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQVj3Ef5_WPwNE14YolV-P6_gnwQ_TdSqnFSQ&usqp=CAU"
    }    
    
]

const authorsList = [
    {
        id: 201,
        firstName: "Stephen",
        lastName: "Hawking"
    },
    {
        id: 202,
        firstName: "Brian",
        lastName: "Kernighan"
    },
    {
        id: 203,
        firstName: "Dennis",
        lastName: "Ritchie"
    },
    {
        id: 204,
        firstName: "George",
        lastName: "Orwell"
    },
    {
        id: 205,
        firstName: "Daniel",
        lastName: "Goleman"
    },
    {
        id: 206,
        firstName: "Aldous",
        lastName: "Huxley"
    }     
]

const topicsList = [
    {
        id: 301,
        name: "Science"
    },
    {
        id: 302,
        name: "Programming"
    },
    {
        id: 303,
        name: "Fiction"
    },
    {
        id: 304,
        name: "Psychology"
    }           
]

module.exports = {
    books: booksList,
    authors: authorsList,
    topics: topicsList    
}