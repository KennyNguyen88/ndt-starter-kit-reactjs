import HttpClient from "./../../httpClient";
const getPosts = () => {
    let httpClient = new HttpClient();
    return httpClient
        .get('https://jsonplaceholder.typicode.com/todos/1')
};
export default getPosts;