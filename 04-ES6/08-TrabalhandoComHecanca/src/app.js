class Pessoas{
	constructor(nome, email, telefone){
		this.nome = nome;
		this.email = email;
		this.telefone = telefone;
	}

	toString(){
		return ` Nome:  ${this.nome}
				 Email: ${this.email}
				 Tel: 	${this.telefone}
		`;
	}
}

class Cliente extends Pessoas {
	constructor(id, nome, email, telefone) {
		super(nome, email, telefone);
		this.id = id;
	};

	toString(){
		return `
				 id: ${this.id}
				${super.toString()};
		`; 
	}
}

var teste = new Cliente(1, "Jose Malcher", "jose@josemalcher.net", "980802222");
console.log(teste.toString());