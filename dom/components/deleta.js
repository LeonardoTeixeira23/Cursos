const BotaoDeleta= ()=>{
    const botaoConclui= document.createElement('button')
    botaoConclui.classList.add('delete-button')
    botaoConclui.innerText='Deletar'
    botaoConclui.addEventListener('click', deletar)
    return botaoConclui
}

const deletar=(evento)=>{
    const botaoDeleta= evento.target
    const deleta= botaoDeleta.parentElement
    deleta.remove()
    return botaoDeleta
}

export default BotaoDeleta