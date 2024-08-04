import { Cube, query, text } from 'azle';

export default Cube({
    greet: query([text], text, (name) => {
        return `Hello, ${name}!`;
    })
})
