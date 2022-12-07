let sorular = [
    new Soru("Hangisi JS paket yönetim uygulamasıdır?", {a:"Node.js", b:"Typescript", c:"Npm", d:"Nuget"}, "c"),
    new Soru("Hangisi .net paket yönetim uygulamasıdır?", {a:"Node.js", b:"nuget", c:"Npm", d:"Typescript"}, "b"),
    new Soru("Hangisi JS paket yönetim uygulamasıdır?", {a:"Node.js", b:"Typescript", c:"Npm", d:"Nuget"}, "c"),
    new Soru("Hangisi .net paket yönetim uygulamasıdır?", {a:"Node.js", b:"nuget", c:"Npm", d:"Typescript"}, "b")
]


function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;

    // console.log(this)
}

Soru.prototype.cevabiKontrolEt = function(cevap) {
    return cevap === this.dogruCevap;
}