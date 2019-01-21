import HttpClient from "./../../httpClient";
import config from "./../../config";

const getPosts = () => {
    let httpClient = new HttpClient();
    console.log(process.env.REACT_APP_STAGE);
    console.log('url: ' + config.POSTS_URL);
    return httpClient
        .get(config.POSTS_URL)
};
export default getPosts;