const retroceso = document.querySelector('#atras');
const avance = document.querySelector('#adelante');
var imagen = document.getElementById('cambio_imagen_dlc');
var control = document.getElementById('controladores');

//descripcon de los dlcs
const expanciones2 = [
    {contenido:`
    <img class="dlc img1" id="cambio_imagen_dlc" src='./src/forsaker.jpg' alt="imagen de expancion">
    <div id="textDlc">
    <h3>Expancion los renegados</h3>
    <p>Después de años de agitación, El Arrecife ha comenzado a degradarse hacia la anarquía. Cayde-6 y el Guardián (nuestro personaje) son enviados a investigar el área y ayudar a aliviar las principales tensiones de la zona. Al aterrizar en El Arrecife, se produce una fuga masiva en la Presidio de los Ancianos, liberando a algunos de los delincuentes más buscados y peligrosos de nuevo a la galaxia.</p>
    </div>`},
    {contenido:`
    <img class="dlc img1" id="cambio_imagen_dlc" src='./src/shadowkeep.jpg' alt="imagen de expancion">
    <div id="textDlc">
    <h3>Expancion bastion de sombras</h3>
    <p>Cuando los héroes dirigían su atención hacia las fronteras de la galaxia, surgieron nuevas pesadillas. Únete a Eris Morn en la Luna, ármate con nuevo equipamiento excepcional y supera el Jardín Negro y el Foso de la herejía. Debes enfrentar al siniestro mal antes de que surja y envíe a la humanidad a otra Edad Oscura.</p>
    </div>`},
    {contenido:`
    <img class="dlc img1" id="cambio_imagen_dlc" src='./src/beyond.jpg' alt="imagen de expancion">
    <div id="textDlc">
    <h3>Expancion mas allá de la luz</h3>
    <p>La luna Europa guarda muchos secretos perdidos del pasado, como el oscuro poder de la estasis. Colabora con la Desconocida exo y controla este nuevo poder antes de que Eramis, la kell de la Oscuridad, se lo otorgue a sus caídos. Aumenta tu arsenal, domina la estasis y ve más allá de la Luz.</p>
    </div>`},
    {contenido:`
    <img class="dlc img1" id="cambio_imagen_dlc" src='./src/30aniver.jpg' alt="imagen de expancion">
    <div id="textDlc">
    <h3>Paquete de 30 Aniversario</h3>
    <p>Celebra tres décadas de juego con un evento que rinde homenaje a las aventuras que hemos compartido. No se nos ocurre una mejor manera de celebrar esta ocasión que continuando nuestra aventura juntos. Así que, con los vientos solares detrás, te invitamos a desenvainar tu Héroe de las eras y venir con nosotros a las estrellas.</p>
    </div>`},
    {contenido:`
    <img class="dlc img1" id="cambio_imagen_dlc" src='./src/lightfall.jpg' alt="imagen de expancion">
    <div id="textDlc">
    <h3>Expancion Eclipse</h3>
    <p>El Testigo y su nuevo discípulo ya están aquí. Empieza una aventura en la que descubrirás los hilos escondidos que nos conectan a todos y aprenderás a desenredarlos para crear algo nuevo con ellos. Con este nuevo poder, llénate de fuerza junto a los demás guardianes y triunfen frente a la aniquilación total.</p>
    </div>`}
    
]
const expanciones = {
    renegados:`
    <img class="dlc img1" id="cambio_imagen_dlc" src='./src/forsaker.jpg' alt="imagen de expancion">
    <div id="textDlc">
    <h3>Expancion los renegados</h3>
    <p>Después de años de agitación, El Arrecife ha comenzado a degradarse hacia la anarquía. Cayde-6 y el Guardián (nuestro personaje) son enviados a investigar el área y ayudar a aliviar las principales tensiones de la zona. Al aterrizar en El Arrecife, se produce una fuga masiva en la Presidio de los Ancianos, liberando a algunos de los delincuentes más buscados y peligrosos de nuevo a la galaxia.</p>
    </div>`,
    
    bastion:`
    <img class="dlc img1" id="cambio_imagen_dlc" src='./src/shadowkeep.jpg' alt="imagen de expancion">
    <div id="textDlc">
    <h3>Expancion bastion de sombras</h3>
    <p>Cuando los héroes dirigían su atención hacia las fronteras de la galaxia, surgieron nuevas pesadillas. Únete a Eris Morn en la Luna, ármate con nuevo equipamiento excepcional y supera el Jardín Negro y el Foso de la herejía. Debes enfrentar al siniestro mal antes de que surja y envíe a la humanidad a otra Edad Oscura.</p>
    </div>`,
    
    luz:`
    <img class="dlc img1" id="cambio_imagen_dlc" src='./src/beyond.jpg' alt="imagen de expancion">
    <div id="textDlc">
    <h3>Expancion mas allá de la luz</h3>
    <p>La luna Europa guarda muchos secretos perdidos del pasado, como el oscuro poder de la estasis. Colabora con la Desconocida exo y controla este nuevo poder antes de que Eramis, la kell de la Oscuridad, se lo otorgue a sus caídos. Aumenta tu arsenal, domina la estasis y ve más allá de la Luz.</p>
    </div>`,
    
    aniversario:`
    <img class="dlc img1" id="cambio_imagen_dlc" src='./src/30aniver.jpg' alt="imagen de expancion">
    <div id="textDlc">
    <h3>Paquete de 30 Aniversario</h3>
    <p>Celebra tres décadas de juego con un evento que rinde homenaje a las aventuras que hemos compartido. No se nos ocurre una mejor manera de celebrar esta ocasión que continuando nuestra aventura juntos. Así que, con los vientos solares detrás, te invitamos a desenvainar tu Héroe de las eras y venir con nosotros a las estrellas.</p>
    </div>`,
    
    eclipse:`
    <img class="dlc img1" id="cambio_imagen_dlc" src='./src/lightfall.jpg' alt="imagen de expancion">
    <div id="textDlc">
    <h3>Expancion Eclipse</h3>
    <p>El Testigo y su nuevo discípulo ya están aquí. Empieza una aventura en la que descubrirás los hilos escondidos que nos conectan a todos y aprenderás a desenredarlos para crear algo nuevo con ellos. Con este nuevo poder, llénate de fuerza junto a los demás guardianes y triunfen frente a la aniquilación total.</p>
    </div>`
}
/* textDlc.innerHTML += expanciones.renegados;
textDlc.innerHTML += expanciones.bastion;
textDlc.innerHTML += expanciones.luz;
textDlc.innerHTML += expanciones.aniversario;
textDlc.innerHTML += expanciones.eclipse; */

var fondos = ['./src/forsaker.jpg','./src/shadowkeep.jpg','./src/beyond.jpg','./src/30aniver.jpg','./src/lightfall.jpg'];
let lugar = 0;
control.innerHTML = expanciones2[lugar].contenido;


function adelante(){
    lugar++;
    if (lugar > 4) {
        lugar = 0;
    }
    control.innerHTML = expanciones2[lugar].contenido;
};
function atras(){
    lugar--;
    if (lugar < 0) {
        lugar = 4;
    }
    control.innerHTML = expanciones2[lugar].contenido;
}


retroceso.addEventListener('click', () =>{
    atras();
})

avance.addEventListener('click', () =>{
    adelante();
})


