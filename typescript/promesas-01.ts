(function (){
    console.log('inicio');

    const prom1 = new Promise(( resolve, reject) => {
        setTimeout(() => {
            resolve('Se termino el time out');
        }, 1000);
    });

    prom1
    .then( mensaje => console.log( mensaje ) )
    .then( err => console.log( err ));

    console.log('FIN');
})();