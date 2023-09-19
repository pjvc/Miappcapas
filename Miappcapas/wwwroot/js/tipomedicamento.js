window.onload = function () {
    listarTipoMedicamento();
}
function listarTipoMedicamento() {
    pintar({
        url: "TipoMedicamento/listarTipoMedicamento",
        cabeceras: ["Id Tipo Medicamento", "Nombre", "Descripcion"],
        propiedades: ["idTipomedicamento", "nombre","descripcion"]
    })
    /*fetchGet("TipoMedicamento/listarTipoMedicamento", "json", function (rest) {
        var nregistros = rest.length;
        alert(nregistros)
        var contenido = "";
        contenido += "<table class=table>"
        contenido += "<thead>"
        contenido += "<tr>"
        contenido += "<td>Id Tipo Medicamento</td>"
        contenido += "<td>Nombre</td>"
        contenido += "<td>Descripcion</td>"

        contenido += "</tr>"


        contenido += "</thead>"
        var obj;
        contenido += "<tbody>"
        for (var i = 0; i < nregistros; i++) {
            obj = rest[i];
            contenido += "<tr>"

            contenido += "<td>" + obj.idTipomedicamento + "</td>"
            contenido += "<td>" + obj.nombre + "</td>"
            contenido += "<td>"+obj.descripcion+"</td>"

            contenido += "</tr>"
        }
        contenido += "</tbody>"

        contenido += "</table>"
        document.getElementById("div_tabla").innerHTML = contenido 
    })
    /*try {
        var raiz = document.getElementById("hdfOculto").value;
        console.log(raiz)
        var urlCompleta = window.location.protocol + "//" + window.location.host + "/" + raiz
            + "TipoMedicamento/listarTipoMedicamento";
        var rest = await fetch(urlCompleta);
        rest = await rest.json();
        //JSON (Object)
        
    } catch (e) {
        alert("Ocurrio un error")
    }*/
    
}