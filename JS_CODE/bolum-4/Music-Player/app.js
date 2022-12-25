// Uygulama

// Elementleri alalım.
const container = document.querySelector(".container");
const image = document.querySelector("#music-image");
const title = document.querySelector("#music-details .title");
const singer = document.querySelector("#music-details .singer");
const prev = document.querySelector("#controls #prev");
const play = document.querySelector("#controls #play");
const next = document.querySelector("#controls #next");
const duration = document.querySelector("#duration");
const currentTime = document.querySelector("#current-time");
const progressBar = document.querySelector("#progress-bar");
const volume = document.querySelector("#volume");
const volumeBar = document.querySelector("#volume-bar");


const player = new MusicPlayer(musicList);

window.addEventListener('load', () => {
    let music = player.getMusic(); // İlk başta 1. müziği getirir.
    displayMusic(music);
});

const  displayMusic = (music) => {
    title.innerText = music.getName();
    image.src = 'img/' + music.img;
    audio.src = 'mp3/' + music.file;
}

play.addEventListener('click', () => {
    const isMusicPlay = container.classList.contains('playing');  // container divinde playing sınıfının olup olmadığını sorguluyoruz. (Boolean)
    isMusicPlay ? pauseMusic() : playMusic()  // true değeri(müzik çalıyorsa) geliyorsa müziği durdur false değeri(müzik çalmıyorsa) geldiyse oynat.
});

prev.addEventListener('click', () => {
    prevMusic();
});

next.addEventListener('click', () => {
    nextMusic();
});

const prevMusic = () => {
    player.prev();
    let music = player.getMusic();
    displayMusic(music);
    playMusic();
}

const nextMusic = () => {
    player.next();
    let music = player.getMusic();
    displayMusic(music);
    playMusic();
}

const pauseMusic = () => { // Buna tıkladıysak playing classı vardır.
    container.classList.remove('playing');  // Dolayısıyla bunu burdan silelim.
    play.querySelector("i").classList = "fa-solid fa-play";
    audio.pause();
}

const playMusic = () => {// Buna tıkladıysak playing classı yoktur.
    container.classList.add('playing');  // Dolayısıyla bunu burdan ekleyelim.
    play.querySelector("i").classList = "fa-solid fa-pause";
    audio.play();
}

const calculateTime = (sumSeconds) => {
    const minute = Math.floor(sumSeconds / 60);
    const second = Math.floor(sumSeconds % 60);
    const updatedSeconds = second < 10 ? `0${second}` : `${second}`
    const result = `${minute} : ${updatedSeconds}`;
    return result;
}

// Loadedmetadata (event)olayı, belirtilen ses/video için meta veriler yüklendiğinde gerçekleşir.
audio.addEventListener("loadedmetadata", () => {
    duration.textContent = calculateTime(audio.duration); // audio.duration ile saniye cinsinden süreyi alıyoruz.
    progressBar.max = Math.floor(audio.duration); // progressBar ın varsayılan olarak max değeri %100 dür. Ancak Math.floor() aracılığı ile max değerini şarkı süresine göre ayarlıyoruz. progressBar a maximum olarak saniye değerini veriyoruz.
});

audio.addEventListener("timeupdate", () => { // geçen süreyi progres bar üzerinde gösterme
    progressBar.value = Math.floor(audio.currentTime); // currentTime: o an da müzik hangi saniyede ise bize onu verir.
    currentTime.textContent = calculateTime(progressBar.value); // sayfada ilgili alanda gösteriyoruz.
});

// Bir form elemanının üzerine tıklandığında, içine girildiğinde gibi olaylardan sonra yapmasını istediğimiz şeyleri belirtmek için input olaylarını kullanırız.
progressBar.addEventListener("input", () => {  // müziği ilerletme
    currentTime.textContent = calculateTime(progressBar.value);
    audio.currentTime = progressBar.value; // müziğin süre bilgisini set ediyoruz. Direk saniye cinsinden değer istiyor bu nedenle direk aktarıyoruz..
}) 

let soundStatus = "audible"; // sesli

volumeBar.addEventListener("input", (e) => {
    const value = e.target.value;
    audio.volume = value / 100;  // audio nun volume bilgisinin alabileceği değerler 0 ile 1 arasındadır bundan dolayı gelen değeri 100 ile bölüyoruz. Çünkü bize 0 ile 100 arasında değerler geliyor.
    if(value == 0) {
        volume.classList = "fa-solid fa-volume-xmark";
    }
    else {
        volume.classList = "fa-solid fa-volume-high";
    }
})

volume.addEventListener("click", () => {
    if(soundStatus === "audible"){
        audio.muted = true;  // sesi kıs
        soundStatus = "muted"; // sessiz
        volume.classList = "fa-solid fa-volume-xmark";
        volumeBar.value = 0
    }
    else {
        audio.muted = false;  // sesi aç
        soundStatus = "audible";
        volume.classList = "fa-solid fa-volume-high";
        volumeBar.value = 100;
    }
})