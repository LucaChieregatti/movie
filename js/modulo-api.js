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
export const Film = (t, type) => {
    const url = BASE_URL + `t=${t}&type=${type}`;
    fetch(url)
        .then(response => response.json())
        .then(result => {
            const item = result;
            
            viewItemss(item); 
        });
};

const viewItemss = (item) =>{
   replaceMovieContentt(item);
}

const replaceMovieContentt = (movie) => {

    const element = document.getElementById("card1");
    const titolo_vuoto = document.getElementById("titolo1");
    const anno_vuoto = document.getElementById("anno1");
    const img = document.getElementById("img1");

    const titolo = document.createElement("h5");
    const node = document.createTextNode(movie.Title);
    titolo.appendChild(node);

    const anno = document.createElement("p");
    const node2 = document.createTextNode(movie.Year);
    anno.appendChild(node2);

    element.replaceChild(titolo, titolo_vuoto);
    element.replaceChild(anno, anno_vuoto);
    img.src = `${movie.Poster}`;
}
//------------------------------------
export const Film1 = (t, type) => {
    const url = BASE_URL + `t=${t}&type=${type}`;
    fetch(url)
        .then(response => response.json())
        .then(result => {
            const item = result;
            
            viewItems(item); 
        });
};

const viewItems = (item) =>{
   replaceMovieContent(item);
}

const replaceMovieContent = (movie) => {

    const element = document.getElementById("card1");
    const titolo_vuoto = document.getElementById("titolo1");
    const anno_vuoto = document.getElementById("anno1");
    const img = document.getElementById("img1");

    const titolo = document.createElement("h5");
    const node = document.createTextNode(movie.Title);
    titolo.appendChild(node);

    const anno = document.createElement("p");
    const node2 = document.createTextNode(movie.Year);
    anno.appendChild(node2);

    element.replaceChild(titolo, titolo_vuoto);
    element.replaceChild(anno, anno_vuoto);
    img.src = `${movie.Poster}`;
}

//---2---

export const Film2 = async (t, type) => {
    const url = BASE_URL + `t=${t}&type=${type}`;
    const response = await fetch(url);
    const result = await response.json();
    const item = result;
    viewItems2(item); 

};

const viewItems2 = (item) =>{
   replaceMovieContent2(item);
}

const replaceMovieContent2 = (movie) => {

    const element = document.getElementById("card2");
    const titolo_vuoto = document.getElementById("titolo2");
    const anno_vuoto = document.getElementById("anno2");
    const img = document.getElementById("img2");

    const titolo = document.createElement("h5");
    const node = document.createTextNode(movie.Title);
    titolo.appendChild(node);

    const anno = document.createElement("p");
    const node2 = document.createTextNode(movie.Year);
    anno.appendChild(node2);

    element.replaceChild(titolo, titolo_vuoto);
    element.replaceChild(anno, anno_vuoto);
    img.src = `${movie.Poster}`;
}

//---3---

export const Film3 = (t, type) => {
    const url = BASE_URL + `t=${t}&type=${type}`;
    fetch(url)
        .then(response => response.json())
        .then(result => {
            const item = result;
            
            viewItems3(item); 
        });
};

const viewItems3 = (item) =>{
   replaceMovieContent3(item);
}

const replaceMovieContent3 = (movie) => {

    const element = document.getElementById("card3");
    const titolo_vuoto = document.getElementById("titolo3");
    const anno_vuoto = document.getElementById("anno3");
    const img = document.getElementById("img3");

    const titolo = document.createElement("h5");
    const node = document.createTextNode(movie.Title);
    titolo.appendChild(node);

    const anno = document.createElement("p");
    const node2 = document.createTextNode(movie.Year);
    anno.appendChild(node2);

    element.replaceChild(titolo, titolo_vuoto);
    element.replaceChild(anno, anno_vuoto);
    img.src = `${movie.Poster}`;
}

//----------------------------------------------Serie TV-------------------------------------------------

//---1---
export const Serie1 = async (t, type) => {
    const url = BASE_URL + `t=${t}&type=${type}`;
    const response = await fetch(url);
    const result = await response.json();
    const item = result;
    viewItems4(item); 

};

const viewItems4 = (item) =>{
   replaceSerieContent4(item);
}

const replaceSerieContent4 = (series) => {

    const element = document.getElementById("card4");
    const titolo_vuoto = document.getElementById("titolo4");
    const anno_vuoto = document.getElementById("anno4");
    const img = document.getElementById("img4");

    const titolo = document.createElement("h5");
    const node = document.createTextNode(series.Title);
    titolo.appendChild(node);

    const anno = document.createElement("p");
    const node2 = document.createTextNode(series.Year);
    anno.appendChild(node2);

    element.replaceChild(titolo, titolo_vuoto);
    element.replaceChild(anno, anno_vuoto);
    img.src = `${series.Poster}`;
}

//---2---

export const Serie2 = (t, type) => {
    const url = BASE_URL + `t=${t}&type=${type}`;
    fetch(url)
        .then(response => response.json())
        .then(result => {
            const item = result;
            
            viewItems5(item); 
        });
};

const viewItems5 = (item) =>{
   replaceSerieContent5(item);
}

const replaceSerieContent5 = (series) => {

    const element = document.getElementById("card5");
    const titolo_vuoto = document.getElementById("titolo5");
    const anno_vuoto = document.getElementById("anno5");
    const img = document.getElementById("img5");

    const titolo = document.createElement("h5");
    const node = document.createTextNode(series.Title);
    titolo.appendChild(node);

    const anno = document.createElement("p");
    const node2 = document.createTextNode(series.Year);
    anno.appendChild(node2);

    element.replaceChild(titolo, titolo_vuoto);
    element.replaceChild(anno, anno_vuoto);
    img.src = `${series.Poster}`;
}

//---3---

export const Serie3 = async (t, type) => {
    const url = BASE_URL + `t=${t}&type=${type}`;
    const response = await fetch(url);
    const result = await response.json();
    const item = result;
    viewItems6(item); 

};

const viewItems6 = (item) =>{
   replaceSerieContent6(item);
}

const replaceSerieContent6 = (series) => {

    const element = document.getElementById("card6");
    const titolo_vuoto = document.getElementById("titolo6");
    const anno_vuoto = document.getElementById("anno6");
    const img = document.getElementById("img6");

    const titolo = document.createElement("h5");
    const node = document.createTextNode(series.Title);
    titolo.appendChild(node);

    const anno = document.createElement("p");
    const node2 = document.createTextNode(series.Year);
    anno.appendChild(node2);

    element.replaceChild(titolo, titolo_vuoto);
    element.replaceChild(anno, anno_vuoto);
    img.src = `${series.Poster}`;
}

//----------------------------------------------Giochi-------------------------------------------------

//---1---

export const Gioco1 = (t, type) => {
    const url = BASE_URL + `i=${t}&type=${type}`;
    fetch(url)
        .then(response => response.json())
        .then(result => {
            const item = result;
            
            viewItems7(item); 
        });
};

const viewItems7 = (item) =>{
   replaceSerieContent7(item);
}

const replaceSerieContent7 = (game) => {

    const element = document.getElementById("card7");
    const titolo_vuoto = document.getElementById("titolo7");
    const anno_vuoto = document.getElementById("anno7");
    const img = document.getElementById("img7");

    const titolo = document.createElement("h5");
    const node = document.createTextNode(game.Title);
    titolo.appendChild(node);

    const anno = document.createElement("p");
    const node2 = document.createTextNode(game.Year);
    anno.appendChild(node2);

    element.replaceChild(titolo, titolo_vuoto);
    element.replaceChild(anno, anno_vuoto);
    img.src = `${game.Poster}`;
}

//---2---

export const Gioco2 = (t, type) => {
    const url = BASE_URL + `i=${t}&type=${type}`;
    fetch(url)
        .then(response => response.json())
        .then(result => {
            const item = result;
            
            viewItems8(item); 
        });
};

const viewItems8 = (item) =>{
   replaceSerieContent8(item);
}

const replaceSerieContent8 = (game) => {

    const element = document.getElementById("card8");
    const titolo_vuoto = document.getElementById("titolo8");
    const anno_vuoto = document.getElementById("anno8");
    const img = document.getElementById("img8");

    const titolo = document.createElement("h5");
    const node = document.createTextNode(game.Title);
    titolo.appendChild(node);

    const anno = document.createElement("p");
    const node2 = document.createTextNode(game.Year);
    anno.appendChild(node2);

    element.replaceChild(titolo, titolo_vuoto);
    element.replaceChild(anno, anno_vuoto);
    img.src = `${game.Poster}`;
}

//---3---

export const Gioco3 = (t, type) => {
    const url = BASE_URL + `i=${t}&type=${type}`;
    fetch(url)
        .then(response => response.json())
        .then(result => {
            const item = result;
            
            viewItems9(item); 
        });
};

const viewItems9 = (item) =>{
   replaceSerieContent9(item);
}

const replaceSerieContent9 = (game) => {

    const element = document.getElementById("card9");
    const titolo_vuoto = document.getElementById("titolo9");
    const anno_vuoto = document.getElementById("anno9");
    const img = document.getElementById("img9");

    const titolo = document.createElement("h5");
    const node = document.createTextNode(game.Title);
    titolo.appendChild(node);

    const anno = document.createElement("p");
    const node2 = document.createTextNode(game.Year);
    anno.appendChild(node2);

    element.replaceChild(titolo, titolo_vuoto);
    element.replaceChild(anno, anno_vuoto);
    img.src = `${game.Poster}`;
}