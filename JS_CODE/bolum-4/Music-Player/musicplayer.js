// music dosyasını yönetir. Müziği getiren, müzikler arasında ileri geri yapmamızı sağlayacak olan metotları içeren kısım.

class MusicPlayer{
    constructor(musicList){
        this.musicList = musicList;
        this.index = 0;  // müzik listesindeki hangi bilgiyi istiyorsak index bilgisi ile tutuyoruz.
        // ilerleyen aşamalarda musicPlayer dan bir nesne oluşturduğumuz anda index numarasını 0 a eşitleyeceğiz yani listedeki 1. şarkıyı seçemesini sağlayacağız. Önceki ve sonraki şarkı için bu index numarası ile oynayacağız.
    }

    getMusic(){
        return this.musicList[this.index]; // O anki index numarası neyse o indexdeki müziği getirir.
    }

    next() {
        if(this.index + 1 != this.musicList.length){
            this.index++;
        }
        else {
            this.index = 0; // listedeki müzik bittiğinde bir dahaki next de listenin başına dönmesini sağlıyoruz.
        }
    }
    
    prev() {
        if(this.index != 0){
            this.index--;
        }
        else {
            this.index = this.musicList.length - 1;
        }
    }
}
