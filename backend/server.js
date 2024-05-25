import express from "express";

const app = express();

// app.get('/', (req, res) => {
//     res.send("Server is ready!");
// });

//get a list of 5 jokes
app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "Why do bears have hairy coats?",
            content: "Fur protection.",
        },
        {
            id: 2,
            title: "What do you call an elephant that doesn’t matter?",
            content: "An irrelephant.",
        },
        {
            id: 3,
            title: "What did the Red light say to the Green light?",
            content: "Don't look at me I'm changing!",
        },
        {
            id: 4,
            title: "I can't tell if i like this blender...",
            content: "It keeps giving me mixed results.",
        },
        {
            id: 5,
            title: "How much does a hipster weigh?",
            content: "An instagram.",
        },
    ];
    res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});