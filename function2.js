function add(a,b){
    let sum=a+b;
    return sum;
   }
  function multiplication(x,y){
     
    let mul=x*y;
    return mul;
    
  }
  function divide (a,b,x,y)
  {
    let div=add(a,b)/multiplication(x,y);
    return div;
  }
  let add1=add(10,20)
  console.log(add1)
  
  let mul1= multiplication(3,4)
  console.log(mul1)
  
  let div1= divide(10,20,3,4)
  console.log(div1)
  
  console.log(Math.floor(div1))
  console.log(Math.ceil(div1))
