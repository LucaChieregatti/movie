//export const URL = "https://www.omdbapi.com/?apikey=23887cb6&s=terminator&type=series HTTP/1.1";
//-----------------------------------------------------------------------------
/*
const URL_LIST_NIGHTMARE = "https://www.omdbapi.com/?apikey=23887cb6&s=nightmare";

export const listNightmare = () => {
    fetch(URL_LIST_NIGHTMARE)
    .then((response) => response.json())
    .then((results) => {
        const movies = results.Search;
        console.log(movies);
    })
}

const URL_LIST_NIGHTMARE_S = "https://www.omdbapi.com/?apikey=23887cb6&s=nightmare&type=series";

export const listNightmareS = () => {
    fetch(URL_LIST_NIGHTMARE_S)
    .then((response) => response.json())
    .then((results) => {
        const movies = results.Search;
        console.log(movies);
    })
}*/
//-----------------------------------------------------------------------------------
/*import {BASE_URL} from "./config.js"
export const apiList = (s, type) => {
    const url = BASE_URL + `s=${s}&type=${type}`;
    fetch(url)
    .then((response) => response.json())
    .then((results) => {
        const items = results.Search;
        console.log(items);
    });
}*/
//-------------------------------------------------------------------------------
/*
import {BASE_URL} from "./config.js"
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
        console.group(item.Title);
        console.log(item.Year);
        console.log(item.Type);
        console.log(item.Poster);
        console.groupEnd();
    });
}*/
//----------------------------------------------------------------------------------------------
/*
import {BASE_URL} from "./config.js"
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

    const para = document.createElement("h1");

    const node = document.createTextNode(movie.Title);

    para.appendChild(node);
    return para;
}
*/
//---------------------------------------------------------------------------------------------
import {BASE_URL} from "./config.js"
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

    const para = document.createElement("h1");

    const node = document.createTextNode(movie.Title);

    para.appendChild(node);
    return para;
}