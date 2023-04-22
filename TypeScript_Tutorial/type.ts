
/* TypeScript Derleme */
const character = "Aslı";
console.log(character);

const inputs = document.querySelectorAll("input");
console.log(inputs);

inputs.forEach(input => {
    console.log(input);
});  



/* Type Temelleri */

let x = false;
x = true;

/* Değişken tanımlamalarında, değişkenin tipini belirlemeden değer atandığı taktirde TypeScript değişkenin ilk atandığı değerin tipini, değişken tipi olarak belirler. Örneğin*/
let age = 22;
/* age = '22'
şeklinde bir atama yaptığımızda TypeScript hata verir. age değişkenine ilk atamada number bir değer atadığımız için daha sonra string bir değer atadığımız için hata almış oluruz.*/

const circ = (diameter: number) => {
    return diameter * Math.PI;
};
console.log(circ(7.5));



/* Type Assertion */ 

let code: any = 123; 
/* şeklinde bir tanımlama yaptığımızda code değerimiz any tipine sahiptir. code değişkenimize number bir değer verdik fakat tip olarak number olduğunu belirtmedik. Bu durumda editörümüz bize number metodlarını önermeyecektir. Bu durumda type assertion özelliği devreye giriyor. Aşağıdaki iki yöntemle type assertion yapabiliriz.*/
(<number>code).toExponential(); // toExponential() yöntemi, bir sayıyı üstel gösterime dönüştürür.
(code as number).toExponential()


let message = 'Hello World';
let count = (<string>message).length;
console.log(count);



/* Arrays */

let names = ["Aslı", "Ali", "Veli","Ayşe"];
names.push("Can");

/* TypeScript ile array içindeki elemanların tip tanımlamasını yaparken aşağıdaki gibi yapabiliriz. */
let users: string[];
users = ["ayse", "fatma"];

/* Array için tip tanımlamasının yapmanın bir başka yolu aşağıdaki gibidir. */
let list: Array<number> = [1, 2, 3];



/* Object */
let user = {
    name: 'osman',
    age: 34
}
user.name = 'ali'
user.age = 14

/* FONKSIYONLAR */

// c?:number ifadesi ile fonksiyonun 2 ya da 3 parametre olmasını sağlayabiliriz.
function getAverage(a:number, b:number, c?:number): string {
    let total = a+b;
    let count

    if (typeof c !== 'undefined'){
        total +=c;
        count++;
    }
    const result = total/count;
    return 'result : ' + result;
}
getAverage(10,20,30);
getAverage(10,20);

/* Fonksiyonumuz herhangi bir değer döndürmüyorsa, void ile değer dönmediğimizi belirtebiliriz. Dönüş değeri olarak void belirlediğimiz bir fonksiyondan dönüş (return keyword; gibi) yaptığımız takdirde hata alırız. Eğer return fonksiyondan çıkış amaçlı kullanıldıysa hata vermez.*/
const printConsole = (keyword: string): void => {
    console.log(keyword)
}

/* Eğer gelecek olan parametre bilgisi belli değilse Rest operatörü kullanılır. Parametre tanımlarken rest (...) öğelerin tiplerini array tip tanımlaması yaptığımız gibi yapabiliriz. */
function Greet(greeting: string, ...names: string[]) {
    return greeting + " " + names.join(", ") + "!";
}
Greet("Hello", "Steve", "Bill"); // returns "Hello Steve, Bill!"
Greet("Hello");// returns "Hello !"

const get_average = (...a: number[]): string => {
    let total = 0;
    let count = 0

    for (let i = 0; i < a.length; i++) {
        total += a[i];
        count++;
    }
    const result = total/count;
    return 'result : ' + result;
}

get_average(10,20,30,40,50);
get_average(10,20,30,40);
get_average(10);

/* INTERFACE */
/*interface sözde öğesi, tip objeleri oluşturmanın başka bir yoludur.*/