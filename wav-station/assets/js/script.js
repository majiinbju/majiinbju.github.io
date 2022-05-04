const musicContainer = document.querySelector('.music-container');
const playBtn = document.querySelector('#play');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-container');
const title = document.querySelector('#title');
const cover = document.querySelector('#cover');
const audio = document.querySelector('#audio');

// song titles
const songs = ['Nightcall', 'Passionfruit', 'Stay With Me'];

// tracking the songs
const songIndex = 2;

// loading the song
// since the length of our array is 2, this function will load a song from the array, based on the index 
loadSong(songs[songIndex]);

// updating song info
function loadSong(song) {
    title.innerText = song
    audio.src = `/assets/music/${song}.mp3`
    cover.src = `/assets/img/${song}.jpg`
}

// playSong function
function playSong() {
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');
}

// pauseSong function
function pauseSong() {
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');
}

// changing play button to pause button
playBtn.addEventListener('click', () => {
    // function to check whether the song is playing by seeing if the class '.play' is added to music-container
     const isPlaying = musicContainer.classList.contains('play')  
     if (isPlaying) {
         pauseSong()
     }
     else {
         playSong()
     }
}) 
