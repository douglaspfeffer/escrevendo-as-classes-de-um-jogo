class hero{
    constructor(nome,idade,tipo){
        this.nome=nome
        this.idade=idade
        this.tipo=tipo
    }

    atacar(){
        let ataque;
        if(this.tipo=="Mago"){
            ataque="magia"
        }else if(this.tipo=="Guerreiro"){
            ataque="espada"
        }else if(this.tipo=="Monge"){
            ataque="artes marciais"
        }else if(this.tipo=="Ninja"){
            ataque="shuriken"
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }
}

let magoData=new hero("Douglas",27,"Mago")
magoData.atacar()
let guerreiroData=new hero("Douglas",27,"Guerreiro")
guerreiroData.atacar()
let mongeData=new hero("Douglas",27,"Monge")
mongeData.atacar()
let ninjaData=new hero("Douglas",27,"Ninja")
ninjaData.atacar()