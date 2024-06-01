var audio = document.getElementById('audio');
var playPauseBTN = document.getElementById('playPauseBTN');
var count = 0;

function playPause(){
    if(count == 0){
        count =1;
        audio.play();
        playPauseBTN.innerHTML = "pause &#9208;";
    }else{
        count = 0;
        audio.pause();
        playPauseBTN.innerHTML = "play &#9658;";
    }

}

function stop(){
    playPause()
    audio.pause()
    audio.currentTime = 0;
    playPauseBTN.innerHTML = "play &#9658;";
}

