const retroceso = document.querySelector('#atras');
const avance = document.querySelector('#adelante');
var recio = document.getElementById('cambio_imagen_dlc');


var fondos = ['../src/osi-estra.jpg','../src/forsaker.jpg','../src/shadowkeep.jpg','../src/beyond.jpg','../src/lightfall.jpg'];
let lugar = 0;

function cambioImagen(){
    let recio = document.getElementById('cambio_imagen_dlc');
    if (lugar == 0) {
        recio.src = `${fondos[1]}`;
        console.log('lugar0');
        lugar+=1;
    } else if (lugar == 1){
        recio.src = `${fondos[2]}`;
        console.log('lugar1');
        lugar ++;
    } else if (lugar == 2){
        recio.src = `${fondos[3]}`;
        console.log('lugar2');
        lugar ++;
    } else if (lugar == 3){
        recio.src = `${fondos[4]}`;
        console.log('lugar3');
        lugar ++;
    }else if (lugar == 4){
        recio.src = `${fondos[0]}`;
        console.log('lugar4');
        lugar = 0;
    }
}

retroceso.addEventListener('click', () =>{
    /* if (recio.src == fondos[1]) {
        recio.src = `${fondos[0]}`;
        console.log(`cambiado por ${fondos[0]}`);
    } */
    cambioImagen();
    
})

avance.addEventListener('click', () =>{
    cambioImagen();
})