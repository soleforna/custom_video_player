//DOCUMENTACION: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs

//Tomo los elementos del DOM
const video = document.querySelector(".video");
const playButton = document.querySelector(".play");
     //obtengo el icono del DOM
const playButtonIcon = playButton.querySelector("i");

const stopButton = document.querySelector(".stop");

const progressBar = document.querySelector(".progress");

const timestamp = document.querySelector(".timestamp")

//Escuchar los eventos
video.addEventListener("click", playPauseVideo);
playButton.addEventListener("click", playPauseVideo);
progressBar.addEventListener("change", setVideoProgress); 
stopButton.addEventListener("click", stopVideo);
video.addEventListener("timeupdate", updateVideoProgress);

//Funcionalidades


function playPauseVideo(){
//Función que pausa o arranca el video
     //Sentencia if canónica
     if (video.paused){
          video.play();
     } else{
          video.pause();
     } 

     /* forma ternaria video[video.paused ? "play" : "pause"]()*/
     playButtonToggleIcon()
     
}

function stopVideo(){
//Función que para el video, que como no existe la función stop, lo pausa y pone el time en 0
     video.pause()
     video.currentTime = 0
     
     playButtonToggleIcon()
     
}

function playButtonToggleIcon(){
//Funcion que cambia el boton play por el de pause

     if (video.paused) {
          playButtonIcon.classList.remove("fa-pause")
          playButtonIcon.classList.add("fa-play")
     } else {
          playButtonIcon.classList.remove("fa-play")
          playButtonIcon.classList.add("fa-pause")
     }
}

function setVideoProgress(){
//función que permite mover el video desde la barra de progreso
    video.currentTime = Number(progressBar.value * video.duration) / 100;
    
}

function updateVideoProgress(){
//Función que hace que avance la barra de progreso
     progressBar.value = Number((video.currentTime / video.duration) * 100)

     let minutes = Math.floor(video.currentTime / 60)
     
     
     let seconds = Math.floor(video.currentTime % 60)

     if (minutes < 10) {
          minutes = "0"+ minutes
     }
     if (seconds < 10) {
          seconds = "0"+ seconds
     }

     timestamp.textContent = `${minutes}:${seconds}`
     
     
}

