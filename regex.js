'use strict'
//Iniciando com regex
//Construção de um buscador

//Simulando o banco de dados com um array
let dataBase = [
		"Mario da Silva", 
		"Maria Oliveira Neves Marina",
		"Pedro Marcos dos Santos", 
		"Natalia Joselia Lima",
		"Carolina dos Santos"
		];

//Frase a ser trocada, simulando entrada de usuário
let userInput = "mar";


//Vamos iniciar pela nossa regex

let regexp = new RegExp(userInput, "i");

//Função para filtrar os dados do array que correspondam a Regex
let busca = (dado)=> !!regexp.exec(dado);
let newArray = dataBase.filter(busca);

console.log(newArray);
