
// const factorial=(num)=>{
//  let sum=1 ;
// for(let i= num; i>=1; i--){
//  sum *= i
// }
// console.log(sum)
// }
// factorial(5)


// recursion

const factorial=(num)=>{
	 if(num==1){
 	return num ;
 }

 return num* factorial(num-1) ; 
 }



  console.log(factorial(5))







