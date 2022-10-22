// Bibliotecas 
import '@picocss/pico'
import 'phosphor-icons'

// css
import '../css/global.css'
import '../css/dom-parte2.css'

/** TÓPICO 1 : OBJETO EVENT E PROPAGAÇÃO DE EVENTOS */

/** Exemplo 1 */

const divPai = document.querySelector('#elemento-pai')
const divFilho1 = document.querySelector('#elemento-filho1')
const divFilho2 = document.querySelector('#elemento-filho2')

divPai.addEventListener('click', function (event) {
    console.log(
        `Click no elemento Pai: Disparado por->`, event.target
    )
})

divFilho1.addEventListener('click', function (event) {
    console.log(
        `Click no elemento Filho 1: Disparado por->`, event.target
    )
})
divFilho2.addEventListener('click', function (event) {
    event.stopImmediatePropagation()
    console.log(
        `Click no elemento Filho 2: Disparado por->`, event.target
    )
})



/** Exemplo 2: Fábrica de Emojis */

import { emojis } from './emojis.js'

const formFabricaEmojis = document.querySelector("#fabricaEmojis")
const selectEmoji = formFabricaEmojis.emoji
const btnCriarEmoji = formFabricaEmojis.criarEmoji
const listaEmojis = document.querySelector('#listaEmojis')

emojis.forEach(function (emoji) {
    let option = document.createElement('option')
    option.value = emoji.icone
    option.textContent = `${emoji.icone} ${emoji.descricao}`
    selectEmoji.appendChild(option)
})
btnCriarEmoji.addEventListener('click', function () {
    /* let emojiSelecionado = document.createElement('div')
     emojiSelecionado.textContent = selectEmoji.value */
    let emojiSelecionado = `
        <div class="emoji">
            ${selectEmoji.value}
        </div>
     `
    listaEmojis.innerHTML += emojiSelecionado
})

listaEmojis.addEventListener('mousemove', function (event) {
    let elemento = event.target
    if (elemento.className === "emoji") {

        listaEmojis.removeChild(elemento)
    }
})
// Tópico 2 : Eventos de Teclado

const infoTeclas = document.querySelector('#infoTeclas')
