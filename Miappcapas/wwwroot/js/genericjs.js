async function fetchGet(url, tipoRespuesta, callback) {
    try {
        var raiz = document.getElementById("hdfOculto").value;
        console.log(raiz)
        var urlCompleta = window.location.protocol + "//" + window.location.host + "/" + raiz
            + url;
        var rest = await fetch(urlCompleta);
        if (tipoRespuesta == "json")
            rest = await rest.json();
        else if (tipoRespuesta == "text")
            rest = await rest.text();
        //JSON (Object)
        callback(rest)
    } catch (e) {
        alert("Ocurrio un error")
    }
}
var objConfiguracionGlobal;

function pintar(objConfiguracion) {
    fetchGet(objConfiguracion.url, "json", function (rest) {
        objConfiguracionGlobal = objConfiguracion;
        var contenido = "";
        contenido +="<div id='contenedorTabla'>"
        contenido += generarTabla(rest)
        contenido += "</div>"
        document.getElementById("div_tabla").innerHTML = contenido

    })

}
function generarTabla(rest) {
    var cabeceras = objConfiguracionGlobal.cabeceras;
    var nombrepropiedades = objConfiguracionGlobal.propiedades;
    contenido += "<table class=table>"
    contenido += "<thead>"
    contenido += "<tr>"
    for (var i = 0; i < cabeceras.length; i++) {
        contenido += "<td>" + cabeceras[i] + "<td>"
    }
    /*contenido += "<td>Id Tipo Medicamento</td>"
    contenido += "<td>Nombre</td>"
    contenido += "<td>Descripcion</td>"

    contenido += "</tr>"*/

    contenido += "</thead>"
    var nregistros = rest.length;
    var obj;
    var propiedadActual
    contenido += "<tbody>"
    for (var i = 0; i < nregistros; i++) {
        obj = rest[i];
        contenido += "<tr>"
        for (var j = 0; j < nombrepropiedades.length; j++) {
            propiedadActual = nombrepropiedades[j];
            contenido += "<td>" + obj[propiedadActual] + "</td>

        }
       /* contenido += "<td>" + obj.idTipomedicamento + "</td>"
        contenido += "<td>" + obj.nombre + "</td>"
        contenido += "<td>" + obj.descripcion + "</td>"
        */
        contenido += "</tr>"
    }
    contenido += "</tbody>"

    contenido += "</table>"
    return contenido;
}