const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (request, response) => {
    response.status(200).send("Hello");
});

app.post('/login', (request, response) => {
    const {username, password} = request.body;

    response.status(200).json({
        username: username,
        password: password,
        message: `User Logged In. Welcome ${username}!`
    });
});

app.post('/greetings', (request, response) => {
    const {name, course, section} = request.body || {};

    response.status(200).json({
        name: name,
        course: course,
        section: section,
        message: `Hello, ${name} from ${course} section ${section}!`
    });
});

app.listen(8000, error => {
    if(error) {
        console.error("Error starting server;", error);
        process.exit(1);
    }
    console.log('Server running on http://localhost:8000');
})