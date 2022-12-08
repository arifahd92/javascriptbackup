setInterval(()=>{
    let d = new Date()
   //  s= `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
    let s=d.toLocaleString()
   //  console.log(s)
       hh=d.getHours()
       
       mh = d.getMinutes()
       sh = d.getSeconds()
       hrotate = (hh*30 + mh/2)
       mrotate = mh*6 
       srotate = sh*6
     hour.style.transform=`rotate(${hrotate}deg)`;
  
      minute.style.transform=`rotate(${mrotate}deg)`;
  
    second.style.transform=`rotate(${srotate}deg)`;
    
    document.querySelector("#digital").innerText=s
 
    if(hh>18 || hh<6){
   document.querySelector("body").style.backgroundColor="black"
   document.querySelector("#digital").style.color="yellow"
    }
    },1000)