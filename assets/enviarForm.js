document.addEventListener("DOMContentLoaded", function (){

    const form = document.getElementById("formLead")
    form.addEventListener("submit", function (event){
        event.preventDefault();
        const body = new FormData(form)

        const url = "https://script.google.com/macros/s/AKfycbyi3YuN_fTmltPLG5mm_o6xoETsL7j6tTOMOoAXjA9tZaUbfzIWxMEgNApWXRp2qzvbQQ/exec"

        fetch(url, {
            redirect: "follow",
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "no-cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            body: body
          })
            .then(function(response) {
              if (response) {
                // Formulario enviado con éxito
                //alert("Formulario enviado con éxito");
                // Redirige a la página deseada
                window.location.href = "Gracias.html";
              } else {
                // Error en el envío del formulario
                alert("Ocurrió un error al enviar el formulario.");
                window.location.href = "index.html";
              }
            })
            .catch(function(error) {
              alert("Ocurrió un error al enviar el formulario: " + error);
            });
    })
})