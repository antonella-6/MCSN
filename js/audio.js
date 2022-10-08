var isBusy = false;
const event = new Event('end');
var audio = new Audio()

$('.btnAudio').on('click', function () {
    var src = './assets/sounds/' + this.id + '.mp3' /* AUDIO FILE NAME SAME INTO THE HTML AUDIO LOAD */
    audio.src = src
    audio.dispatchEvent(event)

    isBusy = true;

    var items = document.getElementsByClassName("audioControl")
    for (var i = 0; i < items.length; i++) {
        items[i].style.opacity = 1
    }

    audio.play()

    audio.addEventListener("timeupdate", () => {
        var seconds = audio.currentTime
        minutes = Math.floor(seconds / 60);
        minutes = (minutes >= 10) ? minutes : "0" + minutes;
        seconds = Math.floor(seconds % 60);
        seconds = (seconds >= 10) ? seconds : "0" + seconds;
        document.getElementById("progressAudioTime").innerHTML = `${minutes}:${seconds}`
        document.getElementById("progressAudioBar").value = audio.currentTime / audio.duration * 100
    })

    audio.addEventListener("ended", () => {
        isBusy = false;
    })

    audio.addEventListener('end', () => {
        audio.pause();
    })
})

