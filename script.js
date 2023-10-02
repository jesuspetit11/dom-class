document.addEventListener("DOMContentLoaded", function() {
    let btn = document.querySelector(".boton"); //Agregamos el div con la class .boton como elemento de JS
    let veces = 0; //Variable según las veces que demos click
    
    fase0(); //Llamamos a la primera función

    function fase0() {
        //Le añadimos el html correspondiente al la constante ya previamente establecida como btn
        btn.innerHTML = `
        <section>
        <div class="precio"></div>
        <div class="imagen"></div>
        </section>
        <div class="descripcion"></div>
        `;
        //Le añadimos contenido a las siguientes clases dentro de los innerHTML
        document.querySelector(".precio").innerHTML = "2$";
        document.querySelector(".descripcion").innerHTML = "Café Venezolano";
        document.querySelector(".imagen").innerHTML = `<img src="https://www.html6.es/img/cafe1.png">`;
        btn.classList.add("boton_inicial"); //Le añadimos estilos CSS 
    }

    function modificar() {
        veces++;
        if (veces == 1) { //Si veces es 1 entonces...
            document.querySelector(".precio").innerHTML = "5$";
            document.querySelector(".descripcion").innerHTML = "Café para llevar";
            document.querySelector(".imagen img").src = `https://www.html6.es/img/cafe2.png`;
            btn.classList.add("boton_primerClic");
        } else if( veces == 2){ //Si veces es 2 entonces...
            document.querySelector(".precio").innerHTML = "15$";
            document.querySelector(".descripcion").innerHTML = "Postre";
            document.querySelector("section").insertAdjacentHTML("beforeend", `<div class = "img2"><img src="https://www.html6.es/img/pasta.png"></div>` );
            btn.classList.add("boton_segundoClic");
        } else {
            btn.classList.remove("boton_primerClic");
            btn.classList.remove("boton_segundoClic");
            fase0();
            veces = 0;
        }
    }

btn.addEventListener("click", modificar);

});
