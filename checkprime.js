function prime(num){
let factors = 0;
for (let i=0;i<=num;i++){
if(num%i == 0){
factors++;
}
}
if (factors == 2){
return true;
}
return false;
}
let answer = prime(19);

if (answer == true){
console.log("prime");
} else {
console.log("not prime");
}