/* Elabore um programa para armazenamento e exibição de chamados de manutenção, com Data, Cliente, Local e descrição. */
var listaChamados = [];
var i = 0;

function adicionarChamado(){
	// Aqui vai o código para adicionar um chamado
   var chamado = {};
    chamado.data = prompt("Digite a data: ");
    chamado.cliente = prompt("Digite o nome do cliente:");
    chamado.local = prompt("Digite o local:");
    chamado.descricao = prompt("Digite a descrição do problema: ");
    listaChamados[i] = chamado;
}

function listarChamados(){
	// Aqui vai o código para listar os chamados.
    
    console.log ("------ Lista de Chamados -------");
    for ( var i = 0; i < listaChamados.length; i++){

    console.log("Data : ", listaChamados[i].data);
    console.log("Nome do Cliente : ", listaChamados[i].cliente);
    console.log("Local : ", listaChamados[i].local);
    console.log("Descrição : ", listaChamados[i].descricao);
    console.log(" -----------------------------")
    }
}


var continua = 's';
while(continua == 's'){
		var opcao = parseInt(prompt("O que deseja Fazer:\n 1- Adicionar chamado\n 2 - Listar Chamados"));
		
		if(opcao == 1){adicionarChamado();}else {listarChamados();}
		
		continua = prompt("Deseja fazer novas tarefas? Digite s para confirmar:");
}

