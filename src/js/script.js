// TODO
collH2=document.querySelectorAll("h2")
collH2.forEach((elm)=>{
    elm.addEventListener('click',(evt)=>{console.log(evt.target);
        evt.target.style.color="red";});
    }
    )
