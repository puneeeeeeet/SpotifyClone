console.log("Hey")
// audioElement.play();
let songIndex = 0;
let audioElement =  new Audio('songs/2.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgress = document.getElementById('myProgress');
let gif = document.getElementById('gif');
let songItems = document.getElementsByClassName('songitem');

let songs =[
    {songName:"akhiyaan", filePath: "songs/1.mp3", coverPath:"covers.1.jpeg"},
]

// songItems.forEach((element)=>{

// })
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity= 1;
    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;

    }
})
audioElement.addEventListener('timeupdate',()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
    myProgressBar.value =progress;

})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100
})