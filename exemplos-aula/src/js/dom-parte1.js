import '@picocss/pico'
import 'phosphor-icons'

import '../css/global.css'
import '../css/dom-parte1.css'
// Criando e Adicionando elementos no DOM
const formDisciplina = document.querySelector("#form-disciplina")
const btnAdicionar = document.querySelector(".btn-add")
const lista = document.querySelector(".lista")
const inputDisciplina = formDisciplina.disciplina
formDisciplina.addEventListener('submit', function (event) {
    event.preventDefault()
})

btnAdicionar.addEventListener('click', function () {
    let disciplinaDescricao = inputDisciplina.value
    console.log(disciplinaDescricao)
    if (disciplinaDescricao === '') {
        return
    }
    let li = document.createElement('li')
    li.textContent = disciplinaDescricao
    lista.appendChild(li)
})

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



// Unidades e Cursos
import { unidades } from '../dados/unidades.js'

const selectCampus = document.querySelector('#campus')
const selectCurso = document.querySelector('#curso')

unidades.forEach(function (campus) {
    let option = document.createElement('option')
    option.textContent = campus.nome
    option.value = campus.id
    selectCampus.appendChild(option)
})
selectCampus.addEventListener('change', function () {
    let selectValue = parseInt(selectCampus.value)
    let campusSelecionado = unidades.find(function (unidade) {
        return selectValue === unidade.id
    })
    selectCurso.innerHTML = ''
    const optionSelecione = document.createElement('option')
    optionSelecione.textContent = "Selecione"
    optionSelecione.setAttribute('disabled', 'disabled')
    optionSelecione.setAttribute('selected', 'selected')
    selectCurso.appendChild(optionSelecione)
    campusSelecionado.cursos.forEach(function (curso) {
        const option = document.createElement('option')
        option.textContent = curso.nome
        option.value = curso.id
        selectCurso.appendChild(option)
    })

})



