let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;



// En la promesa usamos ema script 6
const fetchData = (url_api) => {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest();
        // true para que se maneje de manera asincrona
        xhttp.open('GET', url_api, true)
        xhttp.onreadystatechange = (() => {
            // validamos si el estado es satisfactorio
            if (xhttp.readyState === 4) {
                (xhttp.status === 200)
                ? resolve(JSON.parse(xhttp.responseText))
                : reject(new Error('error'));
            }
        });
        xhttp.send();
    });
}

module.exports = fetchData;

