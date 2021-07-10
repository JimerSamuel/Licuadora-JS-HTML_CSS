  
/* Funcionamiento de la Licuadora */
var estadoLicuadora = "apagada";
var licuadora = document.getElementById("blender");
var sonidoLicuadora = document.getElementById("blender-sound");
var botonLicuadora = document.getElementById("blender-button-sound");
function contralarLicuadora() {
    if (estadoLicuadora == "apagada") {
        estadoLicuadora = "encendido";
        hacerBrrBrr();
        licuadora.classList.add("active");
        /* console.log("me prendiste"); */
    }else {
        estadoLicuadora = "apagada";
        hacerBrrBrr();
        licuadora.classList.remove("active");
        /* console.log("me apagaste"); */
    }
}

function hacerBrrBrr() {
    if( sonidoLicuadora.paused ){
        botonLicuadora.play();
        sonidoLicuadora.play();
      } else {
        botonLicuadora.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime = 0; /* Reinicia el audio al segundo 0 */
      }
    }