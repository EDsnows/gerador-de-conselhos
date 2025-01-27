let conselho = document.getElementById('conselho-texto')
let numeroDoConselho = document.getElementById('conselho-titulo')

async function chamandoApi(){
    const url = 'https://api.adviceslip.com/advice'
    const resposta = await fetch(url)
    return await resposta.json()
}

async function alterandoConselho() {
    const objetoConselho = await chamandoApi()
    conselho.innerHTML = `${objetoConselho.slip.advice}`
    numeroDoConselho.innerHTML = `ADVICE #${objetoConselho.slip.id}`
}

const trocaDeConselho = document.getElementById('advice-update').addEventListener('click', () =>{
    alterandoConselho()
})

