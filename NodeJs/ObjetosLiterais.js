// A partir de um banco eles entram em contato conosco para criar um aplicativo que possa facilitar o manuseio de informações e facilitar as ações que ele precisa. 
// Nosso líder de tecnologia nos pede para pensar em como representar usuários, ou contas bancárias, em vez disso. Cada uma dessas contas tem as seguintes informações:

// Número da conta (somente números)
// Tipo de conta (conta corrente ou poupança em $)
// Saldo em $ (valor apenas)
// Titular da conta (nome completo)

// let Cliente1 = {
//     Titular:'Abigael Natte',
//     numero:5486273622,
//     Conta:'Conta Corrente',
//     Saldo:27771,
//     ...
// }

let Cliente = {
    Clientes:[],
    ListaContas: function(){
        for(let i = 0; i < this.Clientes.length;i++){
            console.log(this.Clientes[i]);
        }
    }
}

function Conta (t,n,c,s){
    this.titular = t;
    this.numero = n;
    this.conta = c;
    this.saldo = s;
}

let cliente_1 = new Conta ('Abigael Natte',5486273622,'Conta Corrente',27771)
let cliente_2 = new Conta ('Ramon Connell',1183971869,'Conta Poupança',8675)
let cliente_3 = new Conta ('Jarret Lafuente',9582019689,'Conta Poupança',27363)
let cliente_4 = new Conta ('Ansel Ardley',1761924656,'Conta Poupança',32415)
let cliente_5 = new Conta ('Jacki Shurmer',7401971607,'Conta Poupança',18789)
let cliente_6 = new Conta ('Jobi Mawtus',630841470,'Conta Corrente',28776)
let cliente_7 = new Conta ('Thomasin Latour',4223508636,'Conta Corrente',2177)
let cliente_8 = new Conta ('Lonnie Verheijden',185979521,'Conta Poupança',25994)
let cliente_9 = new Conta ('Alonso Wannan',3151956165,'Conta Corrente',7601)
let cliente_10= new Conta ('Bendite Huggett',2138105881,'Conta Poupança',33196)

Cliente.Clientes.push(cliente_1,cliente_2,cliente_3,cliente_4,cliente_5,cliente_6,cliente_7,cliente_8,cliente_9,cliente_10);
Cliente.ListaContas();

// 6

let consultarCliente = {
    consulta:[],
    ListaContas: function(){
        console.log(this.consulta[i]);
    }
}

function consultar (Conta,t){
    this.Conta = t;
}

let consulta_1 = new consultar (Conta(cliente_1))

console.log(consultar(cliente_1))
