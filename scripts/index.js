const retroceso = document.querySelector('#atras');
const avance = document.querySelector('#adelante');
var imagen = document.getElementById('cambio_imagen_dlc');
var tDlc = document.getElementById('textDlc').textContent;
//descripcon de los dlcs
const texto = {
    renegados:"Después de años de agitación, El Arrecife ha comenzado a degradarse hacia la anarquía. Cayde-6 y el Guardián (nuestro personaje) son enviados a investigar el área y ayudar a aliviar las principales tensiones de la zona. Al aterrizar en El Arrecife, se produce una fuga masiva en la Presidio de los Ancianos, liberando a algunos de los delincuentes más buscados y peligrosos de nuevo a la galaxia.",
    bastion:"Cuando los héroes dirigían su atención hacia las fronteras de la galaxia, surgieron nuevas pesadillas. Únete a Eris Morn en la Luna, ármate con nuevo equipamiento excepcional y supera el Jardín Negro y el Foso de la herejía. Debes enfrentar al siniestro mal antes de que surja y envíe a la humanidad a otra Edad Oscura.",
    luz:"La luna Europa guarda muchos secretos perdidos del pasado, como el oscuro poder de la estasis. Colabora con la Desconocida exo y controla este nuevo poder antes de que Eramis, la kell de la Oscuridad, se lo otorgue a sus caídos. Aumenta tu arsenal, domina la estasis y ve más allá de la Luz.",
    aniversario:"Celebra tres décadas de juego con un evento que rinde homenaje a las aventuras que hemos compartido. No se nos ocurre una mejor manera de celebrar esta ocasión que continuando nuestra aventura juntos. Así que, con los vientos solares detrás, te invitamos a desenvainar tu Héroe de las eras y venir con nosotros a las estrellas.",
    lightfall:"El Testigo y su nuevo discípulo ya están aquí. Empieza una aventura en la que descubrirás los hilos escondidos que nos conectan a todos y aprenderás a desenredarlos para crear algo nuevo con ellos. Con este nuevo poder, llénate de fuerza junto a los demás guardianes y triunfen frente a la aniquilación total."
}
tDlc = texto.renegados
var fondos = ['./src/forsaker.jpg','./src/shadowkeep.jpg','./src/beyond.jpg','./src/30aniver.jpg','./src/lightfall.jpg'];
let lugar = 0;


function adelante(){
    lugar++;
    if (lugar > 4) {
        lugar = 0;
        imagen.src = fondos[lugar];
    } else {
        imagen.src = fondos[lugar];
    }
    contenido();
};
function atras(){
    lugar--;
    if (lugar < 0) {
        lugar = 4;
        imagen.src = fondos[lugar];
    } else {
        imagen.src = fondos[lugar];
    }
    contenido();
}

function contenido(){
    if (lugar == 0) {
        tDlc = texto.renegados;
    } else if (lugar == 1) {
        tDlc = texto.bastion;
    } else if (lugar == 2) {
        tDlc = texto.luz;
    } else if (lugar == 3) {
        tDlc = texto.aniversario;
    } else if (lugar == 4) {
        tDlc = texto.lightfall;
    }
}

retroceso.addEventListener('click', () =>{
    /* if (imagen.src == fondos[1]) {
        imagen.src = `${fondos[0]}`;
        console.log(`cambiado por ${fondos[0]}`);
    } */
    atras();
})

avance.addEventListener('click', () =>{
    adelante();
})


