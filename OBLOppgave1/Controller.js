function guessnumber(guess){
    console.log(guess)
    let tilbakemelding="";
    guesscheck(guess, tilbakemelding)
    callback +=tilbakemelding
    Show()
}

function guesscheck(guess){
    

    if (parseInt(guess) > randomnum){
       return ((callback ="For høyt"), (Color="red"))
    
    }
    else if (parseInt(guess) < randomnum){
        return ((callback ="For lavt"), (Color="red"))
    }
    else if (parseInt(guess) == randomnum){
        return ((callback ="Riktig"), (Color="green"))
    }
    else {
        return  (callback ="Du må skrive inn et tall mellom 0-10")
    }

   
}





