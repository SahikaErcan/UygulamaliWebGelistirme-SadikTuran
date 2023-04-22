/* TypeScript Derleme */
var character = "Aslı";
console.log(character);
var inputs = document.querySelectorAll("input");
console.log(inputs);
inputs.forEach(function (input) {
    console.log(input);
});
/* Type Temelleri */
var x = false;
x = true;
/* Değişken tanımlamalarında, değişkenin tipini belirlemeden değer atandığı taktirde TypeScript değişkenin ilk atandığı değerin tipini, değişken tipi olarak belirler. Örneğin*/
var age = 22;
/* age = '22'
şeklinde bir atama yaptığımızda TypeScript hata verir. age değişkenine ilk atamada number bir değer atadığımız için daha sonra string bir değer atadığımız için hata almış oluruz.*/
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(7.5));
/* Type Assertion */
var code = 123;
/* şeklinde bir tanımlama yaptığımızda code değerimiz any tipine sahiptir. code değişkenimize number bir değer verdik fakat tip olarak number olduğunu belirtmedik. Bu durumda editörümüz bize number metodlarını önermeyecektir. Bu durumda type assertion özelliği devreye giriyor. Aşağıdaki iki yöntemle type assertion yapabiliriz.*/
code.toExponential(); // toExponential() yöntemi, bir sayıyı üstel gösterime dönüştürür.
code.toExponential();
var message = 'Hello World';
var count = message.length;
console.log(count);
/* Arrays */
var names = ["Aslı", "Ali", "Veli", "Ayşe"];
names.push("Can");
/* TypeScript ile array içindeki elemanların tip tanımlamasını yaparken aşağıdaki gibi yapabiliriz. */
var users;
users = ["ayse", "fatma"];
/* Array için tip tanımlamasının yapmanın bir başka yolu aşağıdaki gibidir. */
var list = [1, 2, 3];
/* Object */
var user = {
    name: 'osman',
    age: 34
};
user.name = 'ali';
user.age = 14;
