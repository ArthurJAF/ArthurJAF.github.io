
let modo = document.querySelector("#claro-escuro");
let body = document.body;
let header = document.querySelector("header");
let nome = document.querySelector("nav #nome");
let nav_menu = document.querySelectorAll("#nav-a");

modo.addEventListener('click', modo_escuro);
window.addEventListener('scroll', shadow);
function modo_escuro() {
    const isEscuro = modo.classList.contains("escuro");

    modo.className = isEscuro ? "claro" : "escuro";
    modo.innerHTML = isEscuro ? "<i style='font-size:18px' class='fa'>&#9788;</i>" : "<i style='font-size:18px' class='fa'>&#xf186;</i>";

    body.style.background = isEscuro ? "#352c19" : "#ffffff";
    body.style.color = isEscuro ? "#ffffff" : "#000000";
    header.style.background = isEscuro ? "#352c19" : "#ffffff";
    nome.style.color = isEscuro ? "#ffffff" : "#000000";
    modo.style.color = isEscuro ? "#ffffff" : "#000000";

    nav_menu.forEach(item => {
        item.style.color = isEscuro ? "#ffffff" : "#000000";
    });

    console.log(isEscuro ? "escuro" : "claro");
}
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
                mensagem.style.marginLeft = '-21%'
            }else if(index === 1){
                mensagem.style.marginLeft = '4%'
            }else{
                mensagem.style.marginLeft = '28%'
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

