document.addEventListener("DOMContentLoaded", function (){

    const form = document.getElementById("formLead")
    form.addEventListener("submit", function (event){
        event.preventDefault();
        const body = new FormData(form)

        const url = "https://script.google.com/macros/s/AKfycbzgkeoxeUHZoq9Uq9swZn5IegdScVnxlpnFG2fD9xAoQKvGuAxrPK8oR_P5LaoOPrxiGQ/exec"

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
                alert("Formulario enviado con éxito");
                // Redirige a la página deseada
                //window.location.href = "index.html";
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