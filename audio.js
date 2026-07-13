let data = {
    title: [
        "Billie Eilish- everything i wanted",
        "Debuss Reverie",
        "Freddie Mercury - Mamma",
        "Nemra - Nare",
        "polo-pan-canopee",
        "Tigran Hamasyan Leaving Paris"
    ],

    song: [
        "music/Billie Eilish - everything i wanted.mp3",
        "music/Debussy Reverie.mp3",
        "music/Freddie Mercury - Mamma (Bohemian Rhapsody).mp3",
        "music/Nemra - Nare.mp3",
        "music/polo-pan-canopee.mp3",
        "music/Tigran Hamasyan Leaving Paris.mp3"
    ],

    poster: [
        "https://i.gifer.com/7d20.gif",
        "https://media2.giphy.com/media/5xtDarmSceWsGyD4VeE/source.gif",
        "https://cdn.dribbble.com/users/1242979/screenshots/7099165/music.gif",
        "https://i.gifer.com/8RWM.gif",
        "https://media2.giphy.com/media/Y0GyZQpjqafoatTvjB/giphy.gif",
        "https://cdn.dribbble.com/users/1921422/screenshots/5511883/freddie.gif"
    ]

}


let  song  = new Audio()
let  currentSong =  0

window.onload = function  (){
       playSong()
       
}


function  playSong(){
           song.src = data.song[currentSong]
           let songTitle = document.getElementById("songTitle")
           songTitle.textContent = data.title[currentSong]
           
           let img = document.getElementById("row1")
           img.style.backgroundImage = "url (" + data.poster[currentSong] + ") "
           
           let main = document.getElementById("main")
           main.style.backgroundImage = "url (" + data.poster[currentSong] + ") "
           song.play()                    
}


function  playOrPauseSong(){
        let play  = document.getElementById("play")

        if(song.paused){
                    song.play()
                    play.src = "images/pause.png"
        }else{
                    song.pause()
                    play.src = "images/play-button-arrowhead.png"
        }
        
}











