window.onload = function () {
    listarMedicamentos();
}
console.log("Hola")

function listarMedicamentos() {

        fetchGet("Medicamento/saludos", "text", function (rest) {
            alert(rest);
        })
        fetchGet("Medicamento/numero", "text", function (rest) {
            alert(rest);
        })
    
}


