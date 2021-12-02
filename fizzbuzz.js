
let z  = 1
while (z < 51) {
if (z % 5 === 0 && z % 3 === 0) {
  console.log (`fizz buzz`)
}
else if (z % 5 === 0) {
  console.log (`buzz`)
}
else if(z % 3 === 0){
console.log (`fizz`)
}
else {
  console.log (z)
}
  z++
}

for(let num = 1; num <= 15; num++){
    // console.log(i)
   if(num % 5 === 0 && num % 3 == 0){
     console.log("fizzbuzz")
   }else if(num % 3 === 0){
     console.log("fizz")
   }else if(num % 5 === 0 ){
     console.log("buzz")
   }
   else {console.log (num)}
   
   }