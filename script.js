var systemGuess = Math.ceil(Math.random()*100)
var count=0;
function check(){
    var num = parseInt(document.getElementById('input').value)
    if(num === '' || num>100 || num<1){
        document.getElementById('res').innerHTML = "Invalid input."
        count-=1
    }
    else if(num > systemGuess){
        document.getElementById('res').innerHTML = "Your guess is too high."
    }
    else if(systemGuess > num){
        document.getElementById('res').innerHTML = "Your guess is too low."
    }
    else if(num==systemGuess){
        document.getElementById('res').innerHTML = "Congrats."
        document.getElementById('check').disabled=true
    }
    count+=1
    document.getElementById('count').innerHTML = "Number of tries: " + count
}