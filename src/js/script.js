// TODO
const aMettreEnRouge = document.querySelector("#a-mettre-en-rouge")
aMettreEnRouge.style.color="red"

const enRougeSuiteAClick=document.querySelector("#en-rouge-suite-a-click")
enRougeSuiteAClick.querySelector("click",(evt)=>{
    enRougeSuiteAClick.style.color="red"
});

const collH2=document.querySelectorAll("h2")
collH2.forEach((elm)=>{
    elm.addEventListener('click',(evt)=>{console.log(evt.target);
        evt.target.style.color="red";});
    }
    )
