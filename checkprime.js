function prime(num){
let cnt = 0;
for (let i=0;i<=num;i++){
if(num%i = 0){
cnt++;
}
}
if (cnt == 2){
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