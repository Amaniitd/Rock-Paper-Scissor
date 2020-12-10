let won=0;
let lost=0;
let enabled_mode="day";


function refresh(){
    document.getElementById("w").textContent=won;
    document.getElementById("l").textContent=lost;
}

function reset(){
    won=0;
    lost=0;
    refresh();
}

function win(){
    won+=1;
    refresh();
    
}

function changemode(){
    if (enabled_mode=="night"){
        enabled_mode="day";
        document.getElementById("mode").src="img/day.png";
        document.body.style.backgroundColor="rgb(40, 40, 40)";
        document.body.style.color="white";

    }
    else{
        document.getElementById("mode").src="img/dark.png"
        enabled_mode="night";
        document.body.style.backgroundColor="white";
        document.body.style.color="black";

    }
}