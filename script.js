
function myFunction() {
    var data=document.getElementById("num").value;
    var number=parseInt(data);
    var arr=[];
    var arr2=[];
    var even=2;
    var odd=2;
    if(number<0 && number!==0)
    {
        document.getElementById("result").innerHTML="enter a positive value";    
    }
   
    else if(number%2===0 && number!==0){
        if(number>=0){
        for(var i=0;i<=2;i++){
                arr[i]=number+even;
                even=even+2;       
        }
        
    }
    document.getElementById("result").innerHTML=arr; 
        
    }
    else if(number%2!==0 && number!==0){
        if(number>=0){
            for(var i=0;i<=2;i++){
                arr2[i]=number+odd;
                odd=odd+2;       
            }
            
        }
        document.getElementById("result").innerHTML=arr2; 
    }
    
    else if(number===0)
    {
        document.getElementById("result").innerHTML=" ";
    }
       
}

