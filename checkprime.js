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
retern false;
}
let ans = prime(19);

if (ans == true){
console.log("prime");
} else {
console.log("not prime");
}