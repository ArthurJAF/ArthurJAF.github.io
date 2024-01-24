let modo = document.querySelector("#claro-escuro")
let body = document.querySelector("body")
let header = document.querySelector("header")
let nome = document.querySelector("nav #nome")
let nav_menu = document.querySelectorAll("#nav-a")

modo.addEventListener('click', modo_escuro)


function modo_escuro(){
    if(modo.className == "escuro"){
        modo.className ="claro"
        modo.innerHTML = "<i style='font-size:18px' class='fa'>&#9788;</i>"

        body.style.background = "#352c19"
        body.style.color = "#ffffff"
        header.style.background = "#352c19"
        nome.style.color = "#ffffff"
        modo.style.color = "#ffffff"

        for(var i = 0; i< nav_menu.length;
            i++){
                nav_menu[i].style.color = "#ffffff"
            }   
        console.log("escuro")   
    }else{
        modo.className = "escuro"
        modo.innerHTML = "<i style='font-size:18px' class='fa'>&#xf186;</i>"
    
        body.style.background = "#ffffff"
        body.style.color = "#000000"
        header.style.background = "#ffffff"
        nome.style.color = "#000000"
        modo.style.color = '#000000'

        for(var i = 0; i< nav_menu.length;
            i++){
                nav_menu[i].style.color = "#000000"
            }   
        console.log("claro")
    }     
}

window.onscroll = function(){shadow()}

function shadow(){
    if(window.innerWidth > 900){
        if(modo.className == "escuro"){
            if (document.documentElement.scrollTop > 40) {
                document.querySelector("header").className = "shadow-header-claro";
                } else {
                    document.querySelector("header").className = "";
                }
        }else{
            if (document.documentElement.scrollTop > 40) {
                document.querySelector("header").className = "shadow-header-escuro";
                } else {
                    document.querySelector("header").className = "";
                }
        }
    }
      
      
  }

