import {BASE_URL} from "../js/config.js"
export const apiList = (s, type) => {
    const url = BASE_URL + `s=${s}&type=${type}`;
    fetch(url)
    .then((response) => response.json())
    .then((results) => {
        const items = results.Search;
        viewItems(items);
    });
}


const viewItems = (items) => {

    items.map((item) => {

        const element = document.getElementById("movies");
        
        element.appendChild(createHTMLmovie(item));
    });
};
const createHTMLmovie = (movie) => {

    const para = document.createElement("p");

    const node = document.createTextNode(movie.Title);

    para.appendChild(node);
    return para;
}