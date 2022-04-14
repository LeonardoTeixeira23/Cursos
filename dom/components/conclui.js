const btn1= () =>{
    const botaoConclui = document.createElement('button');
    botaoConclui.classList.add('check-button');
    botaoConclui.innerText= 'Concluir'
    botaoConclui.addEventListener('click', tarefaConcluida)

    return botaoConclui;

}

const tarefaConcluida= (evento)  =>{
    const botaoConclui= evento.target
    const concluirTarefa= botaoConclui.parentElement
    concluirTarefa.classList.toggle('done')

}

export default btn1