import operaciones from './operaciones.js'

// 1. VARIABLES

const nombre        = document.querySelector("#capturar-nombre")
const btnSaludar    = document.getElementById("btn-saludar")
const areaSaludo    = document.getElementById("area-saludo")

const valorA        = document.getElementById("valor-a")
const valorB        = document.getElementById("valor-b")
const btnSumar      = document.getElementById("btn-sumar")
const areaSuma      = document.getElementById("area-suma")


// 3. EVENTOS
btnSaludar.addEventListener("click", () => {

    const nameValue = nombre.value

    const resultado = operaciones.saludar(nameValue)

    areaSaludo.innerHTML = resultado

    
})

btnSumar.addEventListener("click", () => {

    const inputValorA   = parseInt(valorA.value)
    const inputValorB   = parseInt(valorB.value)

    const resultado = operaciones.sumar(inputValorA, inputValorB)

    areaSuma.innerHTML = resultado

})