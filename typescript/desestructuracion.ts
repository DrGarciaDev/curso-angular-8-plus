(function (){
    // objeto 
    const avenger = {
        nombre: 'Steve',
        clave: 'Capitan america',
        poder: 'Volar'
    }

    console.log( avenger.nombre );
    console.log( avenger.clave );
    console.log( avenger.poder );
    
    // desestructuración de objeto
    const {nombre, clave, poder} = avenger;

    console.log( nombre );
    console.log( clave );
    console.log( poder );

    // desestructuracion de objeto dentro de los argumentos de una funcion 
    const extraer = ( {nombre, poder}: any) => {
        
        console.log( nombre );
        console.log( poder );
    }

    extraer( avenger );
    
    // arreglo de estrings 
    const avengers: string[] = ['thor', 'ironman', 'spiderman'];
    
    // desestructuración de arreglos
    const [ juan, pedro, luis ] = avengers;
    
    console.log( juan );
    console.log( pedro );
    console.log( luis );
    
    // desestructuración de arreglos dentro de una funcion
    const estraerArr = ( [juan, pedro, luis]: string[] ) => {
        console.log( juan );
        console.log( pedro );
        console.log( luis );
    }

    estraerArr( avengers );

})();