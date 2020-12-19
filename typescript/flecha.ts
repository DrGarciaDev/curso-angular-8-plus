(function (){
    const miFuncion = function( a:string ) {
        return a.toUpperCase();
    }

    const miFuncionF = ( a:string ) => {
        return a.toUpperCase();
    }

    const sumarN = function (a:number, b:number) {
        return a + b;
    }

    const sumarF = (a:number , b:number) => {
        return a + b;
    }

    console.log( miFuncion('normal') );
    console.log( miFuncionF('flecha') );

    console.log( sumarN(1,1) );
    console.log( sumarF(2,2) );

    const hulk = {
        nombre: 'Hulk',
        smash(){
            setTimeout( () => {
                console.log(` ${ this.nombre } smash !!! `);       
            }, 1000);
        }
    }

    hulk.smash();
})();