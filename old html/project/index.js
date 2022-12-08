













let screen=document.getElementById('scn');//i caugrht screen agar hame screen me kuchh change karna hai to use pakadna padega
    let buttons = document.querySelectorAll('button');//sare button ko select kar buttons me daal diya
    let screenvalue='';
    for(item of buttons){
        // console.log(item);
        item.addEventListener('click',(e)=>{//for each item ek event listener
            buttonTex=e.target.innerText;
            // console.log(buttonText);
        
            if(buttonTex=='C'){
                screenvalue = '';
                screen.value=screenvalue;
                // screenvalue = '';
            }
            else if(buttonTex== '='){
                screen.value= eval(screenvalue);
                screenvalue='';
            }
            else{
                screenvalue+=buttonTex
                screen.value =screenvalue     
             }
    
        }
        )
    }