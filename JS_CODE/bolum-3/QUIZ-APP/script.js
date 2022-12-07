
function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;

    // console.log(this)
}

Soru.prototype.cevabiKontrolEt = function(cevap) {
    return cevap === this.dogruCevap;
}

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
    new Soru("Hangisi JS paket yönetim uygulamasıdır?", {a:"Node.js", b:"Typescript", c:"Npm", d:"Nuget"}, "c"),
    new Soru("Hangisi .net paket yönetim uygulamasıdır?", {a:"Node.js", b:"nuget", c:"Npm", d:"Typescript"}, "b"),
    new Soru("Hangisi JS paket yönetim uygulamasıdır?", {a:"Node.js", b:"Typescript", c:"Npm", d:"Nuget"}, "c"),
    new Soru("Hangisi .net paket yönetim uygulamasıdır?", {a:"Node.js", b:"nuget", c:"Npm", d:"Typescript"}, "b")
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
    document.querySelector(".quiz_box").classList.add("active");
    soruGoster(quiz.soruGetir());
    document.querySelector(".next_btn").classList.remove("show");
});

document.querySelector(".next_btn").addEventListener("click", function() {
    if(quiz.sorular.length != quiz.soruIndex + 1) {
        quiz.soruIndex += 1;
        soruGoster(quiz.soruGetir());
        document.querySelector(".next_btn").classList.remove("show");
    }
    else {
        console.log("Quiz Bitti.");
    }
});

const option_list = document.querySelector(".option_list");
const correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>';
const incorrectIcon = '<div class="icon"><i class="fas fa-times"></i></div>';

function soruGoster(soru) {
    let question = `<span>${soru.soruMetni}</span>`;
    let options = '';

    for (let cevap in soru.cevapSecenekleri) {
        options +=
            `
                <div class="option">
                    <span><b>${cevap}</b>. ${soru.cevapSecenekleri[cevap]}</span>
                </div>
            `;
    }

    document.querySelector(".question_text").innerHTML = question;
    option_list.innerHTML = options;

    const option = option_list.querySelectorAll(".option");
    
    for(let opt of option) {
        opt.setAttribute("onclick", "optionSelected(this)")
    }
}

function optionSelected(option) {
    let cevap = option.querySelector("span b").textContent;
    let soru = quiz.soruGetir();

    if (soru.cevabiKontrolEt(cevap)) {
        option.classList.add("correct");
        option.insertAdjacentHTML("beforeend", correctIcon);
    } else {
        option.classList.add("incorrect");
        option.insertAdjacentHTML("beforeend", incorrectIcon);
    }

    for(let i=0; i<option_list.children.length; i++) {
        option_list.children[i].classList.add("disabled");
    } 

    document.querySelector(".next_btn").classList.add("show");
}