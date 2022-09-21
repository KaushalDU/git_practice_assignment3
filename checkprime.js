function prime(number){
let count = 0;
for (let i=0;i<=number;i++){
if(number%i = 0){
count++;
}
}
if (count == 2){
return true;
}
retern false;
}
let answer = prime(19);

if (answer == true){
console.log("prime");
} else {
console.log("not prime");
}