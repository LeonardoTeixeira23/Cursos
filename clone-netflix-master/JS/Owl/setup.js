$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false,
            loop:false  
        },
        600:{
            items:3,
            nav:true,
            loop:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }
})

// Conteudo
const titulo= document.querySelector('[data-js="titulo"]');
const descricao= document.querySelector('[data-js="descricao"]');

//botoẽs
const witcher1 = document.querySelector('[data-js="btn-witcher1"]');
const witcher2 = document.querySelector('[data-js="btn-witcher2"]');
const witcher3 = document.querySelector('[data-js="btn-witcher3"]');
const witcher4 = document.querySelector('[data-js="btn-witcher4"]')
const poderDoHabito= document.querySelector('[data-js="btn-poder-do-habito"]')

//the witcher
function theWicherSet(){
    document.querySelector('[data-js="bk-destaque"]').style.backgroundImage='linear-gradient(to right,#000,rgba(0,0,0,.5)100%), url("./img/thewitcher.jpg")';
    titulo.classList.replace('titulo-neutro','titulo-medieval') 
}

witcher1.addEventListener('click', ()=>{   
    titulo.textContent= "The Witcher – O Último Desejo";
    descricao.textContent="O Último Desejo – Geralt de Rívia é um personagem estranho, um mutante que, graças à magia e a um longo treino, mas também a um misterioso elixir, se tornou um assassino perfeito. Os seus cabelos brancos, os seus olhos que vêem melhor de noite que de dia, o seu manto negro, assustam e fascinam. E Geralt dedica-se a viajar por terras pitorescas, ganhando a vida como caçador de monstros.";
    theWicherSet();    
    
})

witcher2.addEventListener('click', ()=>{
    titulo.textContent= "THE WITCHER - A ESPADA DO DESTINO";
    descricao.textContent= "No caminho para Brokilon, Geralt tropeça no corpo de um garoto, que provavelmente não tinha mais de quinze anos. O garoto foi morto por uma flecha, obviamente atirada com destreza, que ainda se vê cravada no seu crânio. Por experiência, o bruxo logo percebe o que aconteceu: certamente o garoto tinha se extraviado e entrado no território das dríades. Como para os outros que padeceram antes de igual sorte, provavelmente tinha acontecido o mesmo. Uma história triste, repetida com muita frequência";
    theWicherSet();
})

witcher3.addEventListener('click', ()=>{
    titulo.textContent= "THE WITCHER - O SANGUE DOS ELFOS";
    descricao.textContent= "Por mais de um século os seres humanos, anões, gnomos e elfos viveram juntos em relativa paz. Mas os tempos mudaram, a paz inquieta está acabada e, mais uma vez, as raças estão lutando entre si. E parece que, para todos, o único elfo bom é um elfo morto. Geralt de Rívia, um bruxo sagaz e habilidoso, tem estado à espera do nascimento de uma criança que profetizou. Essa criança tem o poder de mudar o mundo - para o bem ou para o mal. À medida que a ameaça da guerra paira sobre a terra e a criança é caçada por seus poderes extraordinários, torna-se responsabilidade de Geralt protegê-la de tudo - e o bruxo nunca aceita a derrota como resultado.";
    theWicherSet();
})

witcher4.addEventListener('click', ()=>{
    titulo.textContent= "THE WITCHER - TEMPO DE DESESPERO";
    descricao.textContent= "Geralt lutou contra monstros e demônios por todo o país, mas até ele pode não estar preparado para o que está acontecendo com seu mundo. Há intrigas, divergências e rebeliões por todo lado. Os Elfos e outros seres não humanos vivem sob repressão há décadas. Os Magos brigam uns com os outros, alguns a soldo dos reis, outros simpatizantes dos elfos. E, nesse cenário de medo e desprezo, Geralt e sua amante Yennefer precisam proteger Ciri, herdeira órfã e procurada por todos os lados. Ela tem o poder de salvar o mundo ou, talvez, acabar com ele.";
    theWicherSet();
})

// O poder do habito

poderDoHabito.addEventListener('click', ()=>{
    titulo.textContent= "O PODER DO HABITO";
    titulo.classList.replace('titulo-medieval','titulo-neutro')
    descricao.textContent= "O livro de Charles Duhigg é um estudo acerca do comportamento humano e como isso afeta os resultados em diversas áreas da nossa vida. \n Como o próprio subtítulo diz, o objetivo do estudo é explicar por que fazemos o que fazemos. Ou seja, é uma reflexão que aborda como essa capacidade de fazermos coisas de forma subconsciente, com um menor esforço cerebral tende a criar padrões em nossas vidas.";
    document.querySelector('[data-js="bk-destaque"]').style.backgroundImage='linear-gradient(to right,#000,rgba(0,0,0,.5)100%), url("./img/poderDoHabitoWallpaper.jpg")';  

})

