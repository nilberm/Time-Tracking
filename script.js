

function daily() {
    console.log("Botão 1")
}
function weekly() {
    console.log("Botão 2")
}
function monthly() {
    console.log("Botão 3")
}


const response = await fetch("./data.json")
const data = await response.json()


