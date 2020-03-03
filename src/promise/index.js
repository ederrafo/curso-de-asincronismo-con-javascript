// Promises
// las promesas usan el obj promesa
// Cuando algo sucedera en el futuro, o no sucedera.

// usamos emac script 6 

// usamos un arrow function

const somethingWillHappen = () => {
    // Una Promesa puede cumplirse o rechazarse
    return new Promise((resolve, reject) => {
        // Aqui ejecutamos la promesa, aun no sabemos que sucedera
        // Si sucedera, pongo en duro que se cumplira
        if (true) {
            resolve('Hey!');
        } else {
            reject('Whoooops!')
        }
    });
}

// tengo 2 metodos encadenados
somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err));

// Promesa algo sucedera


const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve('True');
            }, 2000);
        } else {
            const error = new Error('Whooop!');
            reject(error);
        }
    });
}

somethingWillHappen2()
.then(response => console.log(response))
// .then(() => console.log('hola'))
.catch(err => console.error(err))

// Como ejecutar varias promesas al mismo tiempo o encadenadas

Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response => {
        console.log('Array of results', response);
    }).catch( err => {
        console.error(err);
    })












