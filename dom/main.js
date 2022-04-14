import btn1 from "./components/conclui.js";
import BotaoDeleta from "./components/deleta.js";
    
const criarItem= (evento) => {
    evento.preventDefault();
    const lista= document.querySelector('[data-list]')
    const input = document.querySelector('[data-form-input]');
    const valorInput= input.value
        
    const item= document.createElement('li')
    item.classList.add('task')
    const conteudo= `<p class="content">${valorInput}</p>`

    item.innerHTML= conteudo
    lista.appendChild(item)
    item.appendChild(btn1())
    item.appendChild(BotaoDeleta())
    input.value= ""
}

const botaoAddItem=document.querySelector('[data-form-button]');

botaoAddItem.addEventListener('click', criarItem);
