const primeNumber=(num)=>{
	let temp =0;

  for(let i=2; i<=num/2; i++){
    if (num%i== 0){
      temp = 1
      }
   }

if (temp==0){
	console.log(num)
}

}

for(let a=100; a<=200; a++){
primeNumber(a)
}

