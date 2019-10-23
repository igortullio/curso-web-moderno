function Pessoa (nome) {

    this.fala = function() {
        console.log(`Meu nome é ${nome}`)
    }

}
const p1 = new Pessoa(`João`)
p1.fala()
