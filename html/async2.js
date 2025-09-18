let h1=document.querySelector("h1");
function changeColor(color,delay,getColor){
    setTimeout(()=>{
        h1.style.color=color;
        getColor();
    },delay);
}

    
    changeColor("red",1000,()=>{
        changeColor("green",1000,()=>{
            changeColor("blue",1000);
        });
    });

