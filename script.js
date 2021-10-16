

function daily() {
    console.log("Botão 1")
}
function weekly() {
    console.log("Botão 2")
}
function monthly() {
    console.log("Botão 3")
}


fetch('data.json').then(function (response) {
    return response.json();
}).then(function (data) {
    console.log(data)
}).catch(function(error){
    console.error("Something went wrong with retrieving the people")
    console.error(error)
})


