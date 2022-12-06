
function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;

    // console.log(this)
}

// Soru.prototype.cevabiKontrolEt = function(cevap) {
//     return cevap === this.dogruCevap;
// }

// let soru1 = new Soru("Hangisi JS paket yönetim uygulamasıdır?", {a:"Node.js", b:"Typescript", c:"Npm"}, "c");
// let soru2 = new Soru("Hangisi .net paket yönetim uygulamasıdır?", {a:"Node.js", b:"nuget", c:"Npm"}, "b");

// console.log(soru1.soruMetni);
// console.log(soru1.dogruCevap);
// console.log(soru1.cevabiKontrolEt("c"));

// console.log(soru2.soruMetni);
// console.log(soru2.dogruCevap);

// let sorular = [
//     new Soru("Hangisi JS paket yönetim uygulamasıdır?", {a:"Node.js", b:"Typescript", c:"Npm"}, "c"),
//     new Soru("Hangisi .net paket yönetim uygulamasıdır?", {a:"Node.js", b:"nuget", c:"Npm"}, "b")
// ]

// for(let soru of sorular) {
//     console.log(soru.soruMetni);
//     console.log(soru.dogruCevap);
// }




let sorular = [
    new Soru("Hangisi JS paket yönetim uygulamasıdır?", {a:"Node.js", b:"Typescript", c:"Npm"}, "c"),
    new Soru("Hangisi .net paket yönetim uygulamasıdır?", {a:"Node.js", b:"nuget", c:"Npm"}, "b"),
    new Soru("Hangisi JS paket yönetim uygulamasıdır?", {a:"Node.js", b:"Typescript", c:"Npm"}, "c"),
    new Soru("Hangisi .net paket yönetim uygulamasıdır?", {a:"Node.js", b:"nuget", c:"Npm"}, "b")
]

function Quiz(sorular) {
    this.sorular = sorular;
    this.soruIndex = 0;
}

Quiz.prototype.soruGetir = function() {
    return this.sorular[this.soruIndex];
}

const quiz = new Quiz(sorular);

document.querySelector(".btn_start").addEventListener("click", function() {
    if(quiz.sorular.length != quiz.soruIndex) {
        document.querySelector(".quiz_box").classList.add("active");
        console.log(quiz.soruGetir());
        quiz.soruIndex += 1;
    }
    else {
        console.log("Quiz Bitti.");
    }
});