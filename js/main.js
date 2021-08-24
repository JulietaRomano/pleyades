   function abrirLookbook (){
    let lookbookBTN = document.getElementById("lookbook-btn");
    let lookbookPortada= document.getElementById("lookbook-portada");
    let lookbookAbierto= document.getElementById("lookbookAbierto");
    let contador = 0;
    
    lookbookBTN.addEventListener("click",mostrarLookbook);
    function mostrarLookbook(){
        if (contador==0){
            lookbookPortada.style.zIndex = '0';
            lookbookBTN.style.zIndex = '0';
            lookbookAbierto.style.backgroundColor = "white"
            console.log('holi')
            contador = 1;
        }
        else{
            lookbookPortada.style.zIndex = '55';
            lookbookBTN.style.zIndex = '50';
            lookbookAbierto.style.backgroundColor = "#acaaaa"
            console.log('holi')
            contador = 0;
        }
    }
   }
   abrirLookbook()