//export const URL = "https://www.omdbapi.com/?apikey=23887cb6&s=terminator&type=series HTTP/1.1";

const URL_LIST_NIGHTMARE = "https://www.omdbapi.com/?apikey=23887cb6&s=nightmare";

export const listNightmare = () => {
    fetch(URL_LIST_NIGHTMARE)
    .then((response) => response.json())
    .then((results) => {
        const movies = results.Search;
        console.log(movies);
    })
}