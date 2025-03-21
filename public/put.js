 //PUT
 function atualizarDados() {
    const id = document.getElementById('id').value;
    const nome = document.getElementById('nomeAtualizar').value;
    const idade = document.getElementById('idadeAtualizar').value;
    const cpf = document.getElementById('cpfAtualizar').value;

    fetch(`pessoas/${id}`,{
        method: 'PUT',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({ nome: nome, idade: idade,cpf: cpf})
    })
    .then(response => response.json())
    .then(data => {
        // limpa os inputs do formulário
        document.getElementById('id').value = '';
        document.getElementById('nomeAtualizar').value = '';
        document.getElementById('idadeAtualizar').value = '';
        document.getElementById('cpfAtualizar').value = '';
    });
    
}

fetch(`pessoas`)
    .then(response => response.json())
    .then(data => {
        const tabela = document.getElementById('tabela-corpo');
        //Utilizado o loop ForEach para interar cada objeto no array retornado a API
        data.forEach((objeto) => {
            //Adicionado essa string de template ao conteudo HTML do corpo da tabela.
            const linha = `<tr>
                <td>${objeto.id}</td>
                <td>${objeto.nome}</td>
                <td>${objeto.idade}</td>
                <td>${objeto.cpf}</td>
            </tr>`;
            tabela.innerHTML += linha;
        })
    })
      

//GET   
function buscarDados() {
    const cpf = document.getElementById('cpfAtualizar').value;
    fetch(`pessoas`, {
        method: 'GET'
    })
    .then(response => response.json())
    .then(data => {
        const pessoaEncontrada = data.find(pessoa => pessoa.cpf === cpf);
        
        console.log(data)
        if (pessoaEncontrada) {
            document.getElementById('nomeAtualizar').value = pessoaEncontrada.nome;
            document.getElementById('idadeAtualizar').value = pessoaEncontrada.idade;
            document.getElementById('cpfAtualizar').value = pessoaEncontrada.cpf;
            document.getElementById('id').value = pessoaEncontrada.id;
        } else {
            alert('Pessoa não encontrada!');
        }
    })
}