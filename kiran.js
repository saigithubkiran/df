const Find_Five = (N) => 
{
	 let count = 0;
	 while (N!==0){
	   var remainder = N % 10;
	   N = parseInt(N/10);
	   if(remainder==5){
	     count=count+1;
	   }
	 }
	 return count;
};

console.log(Find_Five(34569522));


const Find_Digits = (N) => 
{
	 let count=0;
	 while(N!==0){
	   count=count+1;
	   N=parseInt(N/10);
	 }
	 return(count);
}; 

console.log(Find_Digits(1234));


const findSum = (n) => {
    let sum=0;
    let item=2;
    while (item<=n){
      sum=sum+item;
      item+=2;
    }
    return(sum);
}; 

console.log(findSum(6));


const Prime_Check = (n) => {
    if(n<=1){
      return 'NO';
    }
      for (var i = 2; i < n; i++) {
        if (n % i !== 0) {
          return "YES";
        } else {
          return "NO";
        }
      }
    };

    console.log(Prime_Check(17));


    const printNumbers = (n) => {
        for(var i = 1 ; i <= n ; i++){
              console.log(i);
            } 
    };
    
    console.log(printNumbers(4));


    const Print_Odd = (N) => 
    {
         console.log("2");
         for (var i=3; i<=N; i++){
           if (i%2!=0){
            console.log(i);
           }
         }
    };
    
    console.log(Print_Odd(10));

    const Print_pattern = (N) => 
{
  let i,j;
 
  for(i=0;i<N;i++){
     let result=''
    for(j=0;j<=i;j++){
      result=result+'*'
    }
    console.log(result)
  
  }

};

console.log(Print_pattern(5));


const Print_Table = (N) => 
{
	for (let i = 1 ;i <= 10; i++ ){
    console.log( N +' * '+ i +' = ' + N * i);
	}
};

console.log(Print_Table(3));

const Number_Sum = (N) => 
{
	let sum=0;
	while(N!==0){
	  let remainder = N % 10;
	  N =parseInt(N/10);
	  sum=sum+remainder;
	}
	return(sum);
};

console.log(Number_Sum(4));