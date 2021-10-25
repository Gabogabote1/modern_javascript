//Objetos Literales.-Asigancion de una varibles
//Mutacion.-Es el cambio  de un estado  del Ojbeto.
//Inmutabiliad.- Es evitar que un ojbeto cambie y para evitar que un objeto cambie
// tenemos que construir  una copia del objeto, para lograrlo nececitamos propagar
// sus funciones y atributos.
//Propagar = spread
let person = {
    name: "Goku",
    level: 8000,
    tipo: "Sayagin",
    enemys:["frezzer","Cell","Maginbo"],
    rival: {
        name: "Vegeta",
        level: 12000,
        enemys:["Frezzer","Cell",",Maginbo"]
    },

};
//let list = ["uno","dos","tres"];
//console.log({...list});
//person = {...person,sons:[]};

//Problema en contar  todos los numeros  repetidos en un arreglo
const number = [1,1,2,2,3,3,3,3,3,]
let hashmap = {};


console.log(person);