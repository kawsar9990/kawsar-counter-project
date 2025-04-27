let numberBox = document.querySelectorAll('.box')
let numbers = document.querySelectorAll('.number')


let interval = 5000;

console.log(numbers)
console.log(numberBox)


numbers.forEach(element => {
    let startvalue = 0
    let endvalue = parseInt(element.getAttribute('data-val'))
    console.log(endvalue)
    console.log('---------')
    let duration = Math.floor(interval / endvalue)
    console.log(duration)

    let counter = setInterval(function (){
        startvalue += 1; //startvalue = startvalue +1;
        element.textContent = startvalue;
        if(startvalue === endvalue){
            clearInterval(counter)
        }
    }, duration)
    console.log(counter)
});

