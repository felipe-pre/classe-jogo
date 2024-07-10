//CRIANDO UMA CLASSE E ATRIBUINDO OS VALORES
/*
class hero{
    constructor(name, idade, tipo){
        this.name = name
        this.idade = idade
        this.tipo = tipo
    }
//METODO DE ATAQUE
    atack(){
         this.mago = "magia"
         this.guerreiro = "a espada"
         this.monge = "artes marciais"
         this.ninja = "a shuriken"

        //logica para o ataque do heroi usando a estrutura de (if else)
        if (this.tipo === "mago") {
            
            console.log(`O ${this.tipo} atacou usando ${this.mago}`)
        }else if(this.tipo === "guerreiro"){
            console.log(`O ${this.tipo} atacou usando ${this.guerreiro}`)
        }else if (this.tipo === "monge"){
            console.log(`O ${this.tipo} atacou usando ${this.monge}`)

        }else{
            console.log(`O ${this.tipo} atacou usando ${this.ninja}`)
        }

        

    }


}

let primeiraChamada = new hero("Oliver", 28, "ninja")
primeiraChamada.atack()
*/

class hero{
    constructor(name, idade, tipo){
        this.name = name
        this.idade = idade
        this.tipo = tipo
    }
//METODO DE ATAQUE
    atack(){
         this.mago = "magia"
         this.guerreiro = "a espada"
         this.monge = "artes marciais"
         this.ninja = "a shuriken"

        //logica para o ataque do heroi usando a estrutura de (switch case)
        switch(this.tipo){
            case "mago":
                console.log(`O ${this.tipo} atacou usando ${this.mago}`)
            break;
            case "guerreiro":
                console.log(`O ${this.tipo} atacou usando ${this.guerreiro}`)
            break;
            case "monge":
                console.log(`O ${this.tipo} atacou usando ${this.monge}`)
            break;
            case "ninja":
                console.log(`O ${this.tipo} atacou usando ${this.ninja}`)

        }

        

    }


}

let primeiraChamada = new hero("Oliver", 28, "ninja")
primeiraChamada.atack()