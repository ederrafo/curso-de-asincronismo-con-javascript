let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let API = 'https://rickandmortyapi.com/api/character/';


function fetchData(url_api, callback) {
    console.log('url_api :' + url_api);
    let xhttp = new XMLHttpRequest();
    // true para que se maneje de manera asincrona
    xhttp.open('GET', url_api, true)
    xhttp.onreadystatechange = function (event) {
        // validamos si el estado es satisfactorio
        console.log('readyState: ' + xhttp.readyState);
        if (xhttp.readyState === 4) {
            console.log('status: ' + xhttp.status);
            if(xhttp.status === 200) {
                // llamo al callback , el primer valor es el error y el segundo el 
                // resultado de 
                callback(null, JSON.parse(xhttp.responseText));
            } else {
                const error = new Error('Error' + url_api);
                return callback(error, null);
            }
        }

    }
    // Enviamos la solicitud
    xhttp.send();
}


fetchData(API, function (error1, data1) {
    if (error1) return console.error(error1);
    fetchData(API + data1.results[0].id, function (error2, data2) {
        if (error2) return console.error(error2);
        fetchData(data2.origin.url, function(error3, data3) {
            if (error3) return console.error(error3);
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);            
        })
    })
})




