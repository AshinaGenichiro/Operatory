//task 9
console.log('Zadanie 1');
console.log(2 * 3 + 1);// expected 7
console.log(2 ** 4); // expected 16
console.log(5 ** 1);// expected 5
console.log((8**2)-(5**2));// expected 39
//zadanie 2
console.log('Zadanie 2');
console.log(4*5 == 20);
console.log(6*5 == "30");
console.log(-17 < 0);
console.log(25  > 1);
console.log(2 + 2 * 2 !== 4);
//zadanie 3
console.log('Zadanie 3');
console.log(true || false);
console.log(false == false);
console.log(false || false || true);
console.log(true || false !== false && true)
//Zadanie 4
console.log('Zadanie 4');
let a= 1 ,b = 2,c;
c = a + b;
console.log(c);

let fisrtNumber = 12; secondNumber = 34;

if(fisrtNumber >= 0 && secondNumber >=0)
{
    console.log('Obie liczby są dodatnie');
}
else if (fisrtNumber >=0 || secondNumber >=0)
{
    console.log("Tylko jedna liczba jest dodatnia");
}
else
{
    console.log("Żadna liczba nie jest dodatnia ");
}