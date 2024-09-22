console.log("Welcome to Spoyify");

// Initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');


let songs=[
        {songName: "Its always blue", filePath: "songs/1.mp3",coverPath: "covers/1.jpg"},
        {songName: "Trap cartel", filePath: "songs/2.mp3",coverPath: "covers/2.jpg"},
        {songName: "They Mad", filePath: "songs/3.mp3",coverPath: "covers/3.jpg"},
        {songName: "The Rich Kid", filePath: "songs/4.mp3",coverPath: "covers/4.jpg"},
        {songName: "Song Title", filePath: "songs/5.mp3",coverPath: "covers/5.jpg"},
        {songName: "Safety Dnace", filePath: "songs/6.mp3",coverPath: "covers/6.jpg"},
        {songName: "Back it Up", filePath: "songs/6.mp3",coverPath: "covers/7.jpg"},
        {songName: "Its always Blue", filePath: "songs/6.mp3",coverPath: "covers/8.jpg"},
        {songName: "Clay", filePath: "songs/6.mp3",coverPath: "covers/9.jpg"},
        {songName: "True Love", filePath: "songs/6.mp3",coverPath: "covers/10.jpg"},
        
]
// audioElement.play();
// Handle Play/pause click
masterPlay.addEventListener('click', ()=>{
        if(audioElement.paused || audioElement.currentTime<=0)
        {
               audioElement.play();
               masterPlay.classList.remove('fa-circle-play');
               masterPlay.classList.add('fa-circle-pause');
               gif.style.opacity=1;
         }
        else {
                audioElement.pause();
                masterPlay.classList.remove('fa-circle-pause');
                masterPlay.classList.add('fa-circle-play');
                gif.style.opacity=0;
        }
})
//Listen to Events
audioElement.addEventListener('timeupdate',()=>{

        // update seekbar
        progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
        myProgressBar.value=progress;
})

myProgressBar.addEventListener('change', ()=>{
        audioElement.currentTime=(myProgressBar.value*audioElement)/(100);
})
const makeAllPlays=()=>{
        Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.target.classList.add('fa-circle-play');
        element.target.classList.remove('fa-circle-pause');
        })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.addEventListener('click',(e)=>{
                makeAllPlays();
                e.target.classList.remove('fa-circle-play');
                e.target.classList.add('fa-circle-pause');
        })
})