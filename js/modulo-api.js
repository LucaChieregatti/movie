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
export const Films = (t, type, indice) => {
    const url = BASE_URL + `t=${t}&type=${type}`;
    fetch(url)
        .then(response => response.json())
        .then(result => {
            const item = result;
            
            viewItems(item, indice); 
        });
};

const viewItems = (item, indice) =>{
    const card_ID = `card${indice}`;
    const title_ID = `titolo${indice}`;
    const anno_ID = `anno${indice}`;
    const img_ID = `img${indice}`;
   replaceMovieContent(item, card_ID, title_ID, anno_ID, img_ID);
}

const replaceMovieContent = (movie, card_ID, title_ID, anno_ID, img_ID) => {

    const element = document.getElementById(card_ID);
    const titolo_vuoto = document.getElementById(title_ID);
    const anno_vuoto = document.getElementById(anno_ID);
    const img = document.getElementById(img_ID);

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

//-------------------------------------------------Modal Film-------------------------------------------------

export const ModalFilm = (t, type, indice) => {
    const url = BASE_URL + `t=${t}&type=${type}`;
    fetch(url)
        .then(response => response.json())
        .then(result => {
            const item = result;
            
            viewItems4(item, indice); 
        });
};

const viewItems4 = (item, indice) =>{
    const modal_ID = `modal${indice}`;
    const title_ID = `titoloo${indice}`;
    const anno_ID = `annoo${indice}`;
    const plot_ID = `plot${indice}`;
    const img_ID = `imgg${indice}`;
   replaceMovieContent4(item, modal_ID, title_ID, anno_ID, plot_ID, img_ID);
}

const replaceMovieContent4 = (movie, modal_ID, title_ID, anno_ID, plot_ID, img_ID) => {

    const element = document.getElementById(modal_ID);
    const titolo_vuoto = document.getElementById(title_ID);
    const anno_vuoto = document.getElementById(anno_ID);
    const plot_vuoto = document.getElementById(plot_ID);
    const img = document.getElementById(img_ID);

    const titolo = document.createElement("h5");
    const node = document.createTextNode(movie.Title);
    titolo.appendChild(node);

    const anno = document.createElement("p");
    const node2 = document.createTextNode(movie.Year);
    anno.appendChild(node2);

    const plot = document.createElement("p");
    const node3 = document.createTextNode(movie.Plot);
    plot.appendChild(node3);

    element.replaceChild(titolo, titolo_vuoto);
    element.replaceChild(anno, anno_vuoto);
    element.replaceChild(plot, plot_vuoto);
    img.src = `${movie.Poster}`;
}

//----------------------------------------------Serie TV-------------------------------------------------

export const Serie = async (t, type, indice) => {
    const url = BASE_URL + `t=${t}&type=${type}`;
    const response = await fetch(url);
    const result = await response.json();
    const item = result;
    viewItems2(item, indice); 

};
const viewItems2 = (item, indice) =>{
    const card_ID = `card${indice}`;
    const title_ID = `titolo${indice}`;
    const anno_ID = `anno${indice}`;
    const img_ID = `img${indice}`;
   replaceMovieContent2(item, card_ID, title_ID, anno_ID, img_ID);
}

const replaceMovieContent2 = (series, card_ID, title_ID, anno_ID, img_ID) => {

    const element = document.getElementById(card_ID);
    const titolo_vuoto = document.getElementById(title_ID);
    const anno_vuoto = document.getElementById(anno_ID);
    const img = document.getElementById(img_ID);

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

//-------------------------------------------------Modal SerieTV-------------------------------------------------

export const ModalSerie = (t, type, indice) => {
    const url = BASE_URL + `t=${t}&type=${type}`;
    fetch(url)
        .then(response => response.json())
        .then(result => {
            const item = result;
            
            viewItems5(item, indice); 
        });
};

const viewItems5 = (item, indice) =>{
    const modal_ID = `modal${indice}`;
    const title_ID = `titoloo${indice}`;
    const anno_ID = `annoo${indice}`;
    const plot_ID = `plot${indice}`;
    const img_ID = `imgg${indice}`;
   replaceMovieContent5(item, modal_ID, title_ID, anno_ID, plot_ID, img_ID);
}

const replaceMovieContent5 = (series, modal_ID, title_ID, anno_ID, plot_ID, img_ID) => {

    const element = document.getElementById(modal_ID);
    const titolo_vuoto = document.getElementById(title_ID);
    const anno_vuoto = document.getElementById(anno_ID);
    const plot_vuoto = document.getElementById(plot_ID);
    const img = document.getElementById(img_ID);

    const titolo = document.createElement("h5");
    const node = document.createTextNode(series.Title);
    titolo.appendChild(node);

    const anno = document.createElement("p");
    const node2 = document.createTextNode(series.Year);
    anno.appendChild(node2);

    const plot = document.createElement("p");
    const node3 = document.createTextNode(series.Plot);
    plot.appendChild(node3);

    element.replaceChild(titolo, titolo_vuoto);
    element.replaceChild(anno, anno_vuoto);
    element.replaceChild(plot, plot_vuoto);
    img.src = `${series.Poster}`;
}

//----------------------------------------------Giochi-------------------------------------------------

export const Giochi = async (t, type, indice) => {
    const url = BASE_URL + `i=${t}&type=${type}`;
    const response = await fetch(url);
    const result = await response.json();
    const item = result;
    viewItems3(item, indice); 
};

const viewItems3 = (item, indice) =>{
    const card_ID = `card${indice}`;
    const title_ID = `titolo${indice}`;
    const anno_ID = `anno${indice}`;
    const img_ID = `img${indice}`;
   replaceMovieContent3(item, card_ID, title_ID, anno_ID, img_ID);
}

const replaceMovieContent3 = (game, card_ID, title_ID, anno_ID, img_ID) => {

    const element = document.getElementById(card_ID);
    const titolo_vuoto = document.getElementById(title_ID);
    const anno_vuoto = document.getElementById(anno_ID);
    const img = document.getElementById(img_ID);

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

//-------------------------------------------------Modal Giochi-------------------------------------------------

export const ModalGiochi = (t, type, indice) => {
    const url = BASE_URL + `i=${t}&type=${type}`;
    fetch(url)
        .then(response => response.json())
        .then(result => {
            const item = result;
            
            viewItems6(item, indice); 
        });
};

const viewItems6 = (item, indice) =>{
    const modal_ID = `modal${indice}`;
    const title_ID = `titoloo${indice}`;
    const anno_ID = `annoo${indice}`;
    const plot_ID = `plot${indice}`;
    const img_ID = `imgg${indice}`;
   replaceMovieContent6(item, modal_ID, title_ID, anno_ID, plot_ID, img_ID);
}

const replaceMovieContent6 = (game, modal_ID, title_ID, anno_ID, plot_ID, img_ID) => {

    const element = document.getElementById(modal_ID);
    const titolo_vuoto = document.getElementById(title_ID);
    const anno_vuoto = document.getElementById(anno_ID);
    const plot_vuoto = document.getElementById(plot_ID);
    const img = document.getElementById(img_ID);

    const titolo = document.createElement("h5");
    const node = document.createTextNode(game.Title);
    titolo.appendChild(node);

    const anno = document.createElement("p");
    const node2 = document.createTextNode(game.Year);
    anno.appendChild(node2);

    const plot = document.createElement("p");
    const node3 = document.createTextNode(game.Plot);
    plot.appendChild(node3);

    element.replaceChild(titolo, titolo_vuoto);
    element.replaceChild(anno, anno_vuoto);
    element.replaceChild(plot, plot_vuoto);
    img.src = `${game.Poster}`;
}
