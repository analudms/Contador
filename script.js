//selecionando botão do html em js
const btn = document.getElementById('button')

//criando função para contar
function contar() {
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let res = document.getElementById('res')

//se os valores iniciais do input inicio, fim e passo forem 0 mostrar alert na página
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossível contar!'
        alert('Faltam dados!')

//se tiver valor transformar para numero e guardar na variável
    } else {
        res.innerHTML = 'Contando... <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
//se o passo for invalido considerar o passo 1
        if(p <= 0){
            alert('Passo inválido! Considerando passo 1.')
            p = 1
        }
//se o inicio for menor que o final
        if( i < f) {
            //crescente
            for(let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{27A1}` //adicionando seta 
            }
        } else {
            //decrescente
            for (let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{27A1}`

            }            
        }
        res.innerHTML += `\u{1F3C1}` //adicionando bandeira
    }
}

btn.addEventListener('click', contar) //evento de click no botão