let contador=0

const selector=".card-info button"
const buttones=document.querySelectorAll(selector) 
buttones.forEach(
    (i)=>{
        i.addEventListener("click",comprar)
    }
)

function comprar(){
    console.log ("Embalado")
    contador = contador+1
    console.log ("Embalado "+ contador)
    const selectorCarrito=".cart-icon-container span"
const carrito= document.querySelector(selectorCarrito)
carrito.textContent=contador
}

function codificarMensaje(mensaje) {
    return encodeURIComponent(mensaje);
  }

  function generarEnlaceWhatsApp(numero, mensaje) {
    return `https://wa.me/${numero}?text=${codificarMensaje(mensaje)}`;
  }

  function abrirWhatsApp() {
    const numero = '573003601772'; // Reemplaza con tu número de teléfono
    const mensaje = `Bienvenido Equilibrio Online Store en un momento te atenderemos!!`; // Reemplaza con tu mensaje
    const enlace = generarEnlaceWhatsApp(numero, mensaje);
    window.location.href = enlace;

    
}

const whatsappLink = document.getElementById('whatsappLink');
    whatsappLink.addEventListener('click', abrirWhatsApp);
