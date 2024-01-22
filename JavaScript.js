let modo = document.querySelector("#claro-escuro")
let body = document.querySelector("body")
let header = document.querySelector("header")
let nome = document.querySelector("nav #nome")
let nav_menu = document.querySelectorAll("#nav-a")

modo.addEventListener('click', modo_escuro)


function modo_escuro(){

    if(modo.innerText == "Modo escuro"){

        modo.innerText = "Modo claro"

        body.style.background = "#352c19"
        body.style.color = "#ffffff"
        header.style.background = "#352c19"
        nome.style.color = "#ffffff"
        modo.style.color = "#ffffff"

    for(var i = 0; i<= nav_menu.length;
        i++){
            nav_menu[i].style.color = "#ffffff"
        }   
        console.log("escuro")

        document.onscrollend()
    }else{
        modo.innerText = "Modo escuro"
    
        body.style.background = "#ffffff"
        body.style.color = "#000000"
        header.style.background = "#ffffff"
        nome.style.color = "#000000"
        modo.style.color = '#000000'
        for(var i = 0; i<= nav_menu.length;
            i++){
                nav_menu[i].style.color = "#000000"
            }   
            console.log("escuro")
        console.log("claro")
    }
    
    
}


