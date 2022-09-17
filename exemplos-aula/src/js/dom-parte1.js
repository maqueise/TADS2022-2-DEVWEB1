import '@picocss/pico'
import '../css/global.css'
import '../css/dom-parte1.css'

let inputDisciplina = document.querySelector("#disciplina")
let btnAdicionar = document.querySelector(".btn-add")
let lista = document.querySelector(".lista")

/* btnAdicionar.onclick = function () {
    let disciplina = inputDisciplina.value
    let li = document.createElement('li')
    li.textContent = disciplina
    lista.appendChild(li)
} */

/* function adicionarDisciplina() {
    let disciplina = inputDisciplina.value
    let li = document.createElement('li')
    li.textContent = disciplina
    lista.appendChild(li)
} 
btnAdicionar.addEventListener('click',adicionarDisciplina)
*/


btnAdicionar.addEventListener('click', function () {
    let disciplina = inputDisciplina.value
    let li = document.createElement('li')
    li.textContent = disciplina
    lista.appendChild(li)
})
import { unidades } from '../dados/unidades.js'

let selectCampus = document.querySelector('#campus')

unidades.forEach(function (campus) {
    let option = document.createElement('option')
    option.textContent = campus.nome
    option.value = campus.id
    selectCampus.appendChild(option)
})
selectCampus.addEventListener('change', function () {
    let id = parseInt(selectCampus.value)
    let campus = unidades.find(function (campus) {
        return campus.id === id
    })
    alert(campus.nome)
})



