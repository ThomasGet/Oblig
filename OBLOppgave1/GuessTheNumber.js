
//Model
var callback ="Velg et nummer mellom 0 og 10";
let randomnum =Math.floor(Math.random() * 11);
let Color ="black"
//View
Show()

function Show(){
    document.getElementById("app").innerHTML=`
    <div>
    <h1 style="color:${Color}">${callback}</h1>
    <h1>Number Guess Game</h1>
     <h2>Maskinen har valgt et tilfeldig nummer mellom 0 og 10.</h2>
     <input type="text" onchange="guessnumber(this.value)">
     <h3>Fyll inn et tall.</h3>
     
    </div> 
    `

    
}
//Controller






    
    
   
    
    
    
       
    



    
    
