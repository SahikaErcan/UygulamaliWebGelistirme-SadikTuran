let ogr = ["çınar","yiğit","ada"];

sonuc = ogr.length;

//arr to string
sonuc = ogr.toString();
sonuc = ogr.join(" ");

// eleman silme

// sonuc = ogr.pop(); // son eleman silinir ve silinen eleman döndürülür.
// sonuc = ogr.shift(); // ilk eleman silinir ve silinen eleman döndürülür.


// eleman ekleme

//sonuc = ogr.push("sena");  // dizinin sonuna eleman eklenir.
//sonuc = ogr.unshift("sena");  // dizinin başına eleman ekler

let markalar1 = ["mazda","toyota"];
let markalar2 = ["opel","renault"];
let markalar3 = ["mercedes"];

//sonuc= markalar1.concat(markalar2,markalar3);
//sonuc= markalar1.splice(0,0,markalar2); // 0. indexe markalar2 dizisini ekle ve 0 eleman sil
//sonuc= markalar1.splice(0,1,markalar2); // 0. indexe markalar2 dizisini ekle ve markalar1 den 1 eleman sil 
//sonuc= markalar1.splice(0,1,"bmw","audi");
sonuc = markalar1.splice(0,1);  // ekleme yapmadan 1 eleman silmesini de isteyebiliriz.

// .splice(başlangıç indexi, silinecek eleman sayısı, eklenmek istenen veri)

// console.log(sonuc)
// console.log(markalar1)
//console.log(ogr)



let sayilar = [2,3,43,5,86,7,232,33,1]

let toplam = 0;

// for(let i in sayilar){
//     console.log(i) 
// }

// for(let i in sayilar){
//     console.log(sayilar[i]) 
// }

// for (let sayi of sayilar) {
//     console.log(sayi)
// }

for (let sayi of sayilar) {
    toplam+=sayi;
}
// console.log(toplam)





// Değişken sayıda parametre alan toplam isminde bir fonksiyon tanımlayalım.
function topla(){ 
    console.log(arguments); // ne olduğunu anlayalım. {key:value}
    let t = 0;

    for(let i=0; i<arguments.length; i++){
        t += arguments[i];
    }
    return t;
}

console.log(topla(2,5));  // bunlar bellekte key:value şeklinde tutuluyor. Yani {'1':2,'2':5} şeklinde.. arguments ifadesi bunlara erişmemizi sağlıyor.
console.log(topla(2,5,7));
console.log(topla(2,5,7,3));