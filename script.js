var botonGrabar = document.getElementById("boton"),
    video = document.getElementById("video"),
    error = function(error) {
      console.log("Error:", error.name);
    };

function grabar(){
    // Estándar 
    if(navigator.getUserMedia) {
        navigator.getUserMedia({ "video": true}, function(stream) {
            video.src = stream;
            video.play();
        }, error);
    }
    // prefijo WebKit
    else if(navigator.webkitGetUserMedia) { 
        navigator.webkitGetUserMedia({ "video": true}, function(stream){
            video.src = window.URL.createObjectURL(stream);
            video.play();
        }, error);
    }
    // prefijo Moz
    else if(navigator.mozGetUserMedia) {
        navigator.mozGetUserMedia({ "video": true}, function(stream){
            video.src = window.URL.createObjectURL(stream);
            video.play();
        }, error);
    }
    // Navegadores no compatibles
    else {
        alert("Tu navegador no es compatible con getUserMedia");
    }
};

botonGrabar.addEventListener("click", grabar);