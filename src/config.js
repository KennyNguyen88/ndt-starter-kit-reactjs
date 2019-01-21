const develop = {
    POSTS_URL:"https://jsonplaceholder.typicode.com/todos/1"
};
const product = {
    POSTS_URL:"https://jsonplaceholder.typicode.com/todos/2"
};
const config = process.env.REACT_APP_STAGE === 'product'
    ? product
    : develop;


export default {
    ...config
}