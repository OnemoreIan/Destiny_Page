const fondo = document.getElementById('adelante');
const espacio = document.getElementsByClassName('scroll');
const borrar = document.querySelector('#borrar');

document.getElementById('atras').style.backgroundImage = "url('/src/forsaker')";
fondo.addEventListener('click', () =>{
    document.body.style.backgroundImage = "url('/src/forsaker')";
})

function avanzar(espacio) {
    alert('funciona');
    espacio.document.style.backgroundImage = "url('/src/forsaker')";
}
/*
borrar.addEventListener("click", () => {
    console.log('jala');
    
})
}*/
