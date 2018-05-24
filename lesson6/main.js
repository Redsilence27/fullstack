var numbers    = document.getElementsByClassName('numbers');
var input      = document.getElementById('entries');
var operations = document.getElementsByClassName('operations'); 
var clear      = document.getElementById('clear');
var calc       = document.getElementById('calculate'); 
var opchars    = "+,-,*,/"


for (var i = 0; i < numbers.length; i++) {
	numbers[i].addEventListener('click',function(){
       input.value += this.innerText;
       if (this.innerText == '0') {
          if (input.value.length == 1) {
            input.value = '';
          }else{
            /* если предыдущий символ - знак операции */
            if (opchars.indexOf(input.value.charAt(input.value.length - 2)) + 1){
              input.value = input.value.substring(0,input.value.length - 1);  
            }
          };

       };
       
	})
}	
for (var i = 0; i < operations.length; i++) {
	operations[i].addEventListener('click',function(){
       var operation = this.innerText;
       var value = input.value;
       


       //console.log(value.charAt(value.length - 1));
       if(!isNaN(value.charAt(value.length - 1))) {
            input.value += this.innerText; 
          

       }else{  
           value = value.substring(0,value.length - 1);
       	   input.value = value;
       	   input.value += operation;	

       }; 

       if(input.value.length == 1) {
         input.value = "";
       };
       
      
	})
}

clear.addEventListener('click',function(){
   input.value = "";
})
calc.addEventListener('click',function(){
    if(opchars.indexOf(input.value.charAt(input.value.length - 1)) + 1)
    {input.value = input.value.substring(0,input.value.length - 1);

    };


    if (input.value != '')  
    {
      input.value = (eval(input.value));
    }
    
})



