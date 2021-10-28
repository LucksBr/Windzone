let lampadaTema = document.getElementById("lampada");
let corpo = document.body




let lampada = {
    tema: "claro",
    temaClaro: function () {
        corpo.style.backgroundColor = "rgba(250, 250, 250, 1)"
        lampadaTema.style.backgroundColor = "rgb(240, 248, 255)"
    },

    temaEscuro: function (){
        corpo.style.backgroundColor = "rgba(93, 87, 107, 1)";
        lampadaTema.style.backgroundColor = "rgb(214, 226, 236)"
    },

    mudarTema: function(){
        if(this.tema == "claro"){
            this.temaEscuro();
            this.tema = "escuro"
        } else if ( this.tema == "escuro"){
            this.temaClaro();
            this.tema = "claro"
         }
    }
}

lampadaTema.addEventListener("click", lampada.mudarTema.bind(lampada))

