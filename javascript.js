

setInterval(() => {
    
    let a = new Date();
    let t;
    t=a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
    document.getElementById("time").innerHTML=t;
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    console.log(date);
    document.getElementById("date").innerHTML=date;

    
}, 1000);


