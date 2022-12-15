class MusicPlayer {
    constructor(musicList) {
        this.musicList = musicList;
        this.index = 0; // müzik listesi içerisindeki hangi bilgiyi istiyorsak bunu index ile tutuyoruz. Müzik playerdan nesne oluşturduğumuzda index 0 a eşitlensin diyeceğiz. Bu durum bizi müzik listesindeki 1. şarkıya götürecektir. Sonraki ve önceki şarkı için bu index numarası ile oynayacağız.
    }

    getMusic() {
        return this.musicList[this.index];
    }

    next() {
        if(this.index + 1 != this.musicList.length) {
            this.index++;
        }
        else {
            this.index = 0;
        }
    }
    previous() {
        if(this.index != 0) {
            this.index--;
        }
        else {
            this.index = this.musicList.length -1;
        }
    }
}