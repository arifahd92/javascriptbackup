
let scn=document.getElementById('scn');
let buttons = document.querySelectorAll('div');
let screenvalue='';
let newscnvalue=""
for(item of buttons){
    item.addEventListener('click',(e)=>{//for each item an event listener added
        buttonTex=e.target.innerText;
        // console.log(buttonText);
    
        if(buttonTex=='C'){
            screenvalue = '';
            scn.value=screenvalue;// it is like document.getElementById('scn').value = screenvalue
            newscnvalue=""
        }
        else if(buttonTex== '='){
            for(let i=0;i<screenvalue.length;i++){
                let ch = screenvalue.charAt(i)
                // console.log(ch)
                if(ch=="x"){
                     newscnvalue+="*"
                }
              
                else{
                    newscnvalue+=ch  
                }
            }//end of for loop
            // console.log(typeof(newscnvalue))
            // localStorage.setItem("arif",newscnvalue)
            scn.value= (eval(newscnvalue)).toFixed(2);;
            screenvalue= scn.value;
            newscnvalue=""
        }
        else if(buttonTex== '•'){
        screenvalue+="."
        scn.value =screenvalue
        }
        else if(buttonTex== '←'){
            screenvalue= screenvalue.slice(0,-1)
            scn.value =screenvalue
            }
        
        else{
            screenvalue+=buttonTex
            scn.value =screenvalue  ;
         }

    }
    )
}