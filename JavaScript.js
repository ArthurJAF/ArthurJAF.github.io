
let modo = document.querySelector("#claro-escuro");
let body = document.body;
let header = document.querySelector("header");
let nome = document.querySelector("nav #nome");
let nav_menu = document.querySelectorAll("#nav-a");
let img_nav = document.querySelector('.img-nav')


// Obtém o estilo da folha de estilo ou cria um novo estilo
let style = document.styleSheets[0] || document.head.appendChild(document.createElement("style")).sheet;

// Adiciona as regras de estilo para a barra de rolagem
style.insertRule("::-webkit-scrollbar { width: 10px; background-color: #f1f1f1; }", 0);
style.insertRule("::-webkit-scrollbar-thumb { width: 102px; border-radius: 6px; background-color: #4CAF50; }", 1);

modo.addEventListener('click', modo_escuro);
window.addEventListener('scroll', shadow);
function modo_escuro() {
    const isEscuro = modo.classList.contains("escuro");

    modo.className = isEscuro ? "claro" : "escuro";
    modo.innerHTML = isEscuro ? "<i style='font-size:18px' class='fa'>&#9788;</i>" : "<i style='font-size:18px' class='fa'>&#xf186;</i>";

    let backgroundColor = isEscuro ? "#352c19" : "#ffffff";
    let thumbColor = isEscuro ? "#6b8e23" : "#ffffff";

     // Remove as regras de estilo antigas
     style.deleteRule(0);
 
    // Adicione as regras de estilo para a barra de rolagem usando o operador ternário
    style.insertRule(`::-webkit-scrollbar { width: 10px; background-color: ${backgroundColor}; }`, 0);
    style.insertRule(`::-webkit-scrollbar-thumb {width: 12px; border-radius: 60px; background-color: ${thumbColor}; }`, 1);


    body.style.background = isEscuro ? "#352c19" : "#ffffff";
    body.style.color = isEscuro ? "#ffffff" : "#000000";
    header.style.background = isEscuro ? "#352c19" : "#ffffff";
    nome.style.color = isEscuro ? "#ffffff" : "#000000";
    modo.style.color = isEscuro ? "#ffffff" : "#000000";
    img_nav.innerHTML = isEscuro ? `<img src="img/Logo_losangulo_fundo_marrom.jpg" alt="" id="img-nav">` : `<img src="img/Logo_losangulo_fundo_branco.jpg" alt="" id="img-nav">`; 
    mensagem_modo.innerHTML = isEscuro ? "Ative o modo claro" : "Ative o modo escuro";


    modo.addEventListener('mouseover', () => {modo.style.color = '#907943'})
    modo.addEventListener('mouseout', function() {
        modo.style.color = isEscuro ? "#ffffff" : "#000000";
    });
    nav_menu.forEach(item => {
        item.addEventListener('mouseover', function() {
            item.style.color = '#907943';
        });
    
        item.addEventListener('mouseout', function() {
            item.style.color = isEscuro ? "#ffffff" : "#000000";
        });
    });
    
    nav_menu.forEach(item => {
        item.style.color = isEscuro ? "#ffffff" : "#000000";
    });

    console.log(isEscuro ? "escuro" : "claro");
}


//________________________shadow nav_________________________________
function shadow() {
    if (window.innerWidth > 980) {
        const isEscuro = modo.classList.contains("escuro");
        const scrollTop = document.documentElement.scrollTop;

        header.className = scrollTop > 40 ? `shadow-header-${isEscuro ? 'escuro' : 'claro'}` : "";
    }
}


//__________________________________________________________________________________
var textoParaCopiar = document.querySelectorAll('#textoParaCopiar')

textoParaCopiar.forEach(function(elemento) {
    elemento.addEventListener('click',function() {    
    // Seleciona o texto dentro do elemento
    selecionarTexto(elemento);

    // Executa o comando de cópia
    document.execCommand('copy');

    // Deseleciona o texto (opcional, mas é uma boa prática)
    window.getSelection().removeAllRanges();

    // Mostra uma mensagem ou executa outra lógica conforme necessário
   mostrarAviso() 
    })
    
})

function mostrarAviso() {
    var aviso = document.getElementById('aviso');
    var mensagem = document.getElementById('mensagem');
    mensagem.textContent = 'Texto Copiado';
    aviso.style.display = 'block';

    setTimeout(() => {
        aviso.style.display = 'none';
    }, 2800); // Oculta o aviso após 3 segundos
}

function fecharAviso() {
   var aviso = document.getElementById('aviso');
   aviso.style.display = 'none';
}

// Função para selecionar o texto dentro de um elemento
function selecionarTexto(elemento) {
    var range = document.createRange();
    range.selectNodeContents(elemento);
    var selecao = window.getSelection();
    selecao.removeAllRanges();
    selecao.addRange(range);
}


//__________________________________________________________________________________
let contato = document.querySelector('.contato')
    if (window.innerWidth < 950){
        contato.innerHTML = `
        <div id="elementoComMensagem">
            <i style='font-size:30px;' class='fa fa-instagram'></i>
            <p id='textoParaCopiar'>@arthur_jaf</p>
        </div>
        <div>
            <i style='font-size:30px' class='fa'>&#xf0e0;</i>
            <p id='textoParaCopiar'>arthurjaf@gmail.com</p>
        </div>
        <div>
            <i style='font-size:30px' class='fa'>&#xf08c;</i>
            <p id='textoParaCopiar'>linkedin.com/in/arthur-jaf</p>
        </div>`;
    }

//____________________________CLIQUE E COPIE_______________________________________________________

var elemento = document.querySelectorAll('#elementoComMensagem');
var mensagem = document.querySelector('#mensagemAoPassar');
if(window.innerWidth > 950){
    elemento.forEach((e, index) => {
        e.addEventListener('mouseover', function () {
            
            if(index === 0){
                mensagem.style.marginLeft = '-26%'
            }else if(index === 1){
                mensagem.style.marginLeft = '-10%'
            }else{
                mensagem.style.marginLeft = '10%'
            }
            mensagem.style.display = 'block';       
        });
    })
    
    elemento.forEach((e, index) => {
        e.addEventListener('mouseout', function () {
            mensagem.style.display = 'none';
        });
    })
}


var mensagem_modo = document.querySelector('#mensagem-modo');
if(window.innerWidth > 950){
    modo.addEventListener('mouseover', function () {
        mensagem_modo.style.display = 'block';       
        });
    
    
    modo.addEventListener('mouseout', function () {
        mensagem_modo.style.display = 'none';
        });
}


//________________________croll lento____________________________________


  // Obtém uma referência para o botão e para o elemento de destino
var scrollHome = document.querySelector('.home-scroll');
var targetHome = document.getElementById('home'); // Substitua 'targetElement' pelo ID do elemento de destino
var scrollSobre = document.querySelector('.sobre-scroll');
var targetSobre = document.getElementById('sobre');
var scrollObjetivo = document.querySelector('.objetivo-scroll');
var targetObjetivo = document.getElementById('objetivo'); 
var scrollContato = document.querySelector('#button-scroll-contato');
var targetContato = document.getElementById('contato'); 


  // Adiciona um evento de clique ao botão
scrollHome.addEventListener('click', function(e) {
    // Rola até o elemento de destino
    e.preventDefault();
    targetHome.scrollIntoView({ behavior: 'smooth' });
    });

scrollSobre.addEventListener('click', function(e) {
    e.preventDefault();
    targetSobre.scrollIntoView({ behavior: 'smooth' });
  });
    
scrollObjetivo.addEventListener('click', function(e) {
        e.preventDefault();
        targetObjetivo.scrollIntoView({ behavior: 'smooth' });
      });
scrollContato.addEventListener('click', function(e) {
        e.preventDefault();
        targetContato.scrollIntoView({ behavior: 'smooth' });
      });