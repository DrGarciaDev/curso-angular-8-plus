(function (){
    // tipado del retorno de una funcion 
    
    const sumar = (a: number, b: number): number => {
        return a + b;
    }
    
    const nombre =  (): string => {
        return 'Hola mundo';
    }

    const obtenerSalario = (): Promise<string> => {
        return new Promise( (resolve, reject) => {
            resolve('Luis García');
        });
    }

    obtenerSalario().then( (a) => {
        return console.log(a.toUpperCase);
    });

})();