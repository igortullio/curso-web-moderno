const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data

    const getMulheres = f => f.genero === 'F'
    const getChineses = f => f.pais === 'China'
    const menorSalario = (func, funcAtual) => {
        return func.salario < funcAtual.salario ? func : funcAtual
    }

    console.log(funcionarios.filter(getMulheres).filter(getChineses).reduce(menorSalario))
})