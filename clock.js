let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
setInterval(()=>{
    let CurrentTime=new Date();
    hrs.innerHTML= CurrentTime.getHours();
    min.innerHTML=CurrentTime.getMinutes();
    sec.innerHTML=CurrentTime.getSeconds();
},1000)   
