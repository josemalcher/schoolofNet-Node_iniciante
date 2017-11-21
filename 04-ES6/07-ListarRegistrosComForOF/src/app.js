var list = ["Teste texto", 34, {name:"José Malcher"}];

for(var i in list){
	console.log(i);
	console.log(list[i]);
}

for(let i of list){
	console.log(i);
}