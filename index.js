// calling variabels
const numBtn = document.querySelectorAll('.click');
const calc = document.querySelectorAll('.calc');
const clear = document.querySelector('.clearAll');
const deleteBtn = document.getElementById('clear');
const result = document.getElementById('equal');
const display1 = document.getElementById('dis1');
const display2 = document.getElementById('dis2');

// holders
let inputNum = [];
let inputNum2 = [];
let calculation = '';
let res = 0;
numBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    if (calculation.length === 0 && inputNum.length <= 6) {
      inputNum.push(btn.innerText);

      display1.innerText = inputNum.join('');
    } else if (calculation.length === 1 && inputNum2.length <= 6) {
      inputNum2.push(btn.innerText);
      display1.innerText = inputNum.join('') + calculation + inputNum2.join("");

    }
  });
});

 calc.forEach(btn =>{
    btn.addEventListener('click', function () {
        if(inputNum.length >0 && calculation.length === 0){
            calculation = btn.innerText;
            display1.innerText = inputNum.join("") + calculation;
            
        }
        
    });
});

result.addEventListener('click', function(){
    if(inputNum.length > 0 && calculation.length > 0 && inputNum2.length > 0){
       if(calculation === "+"){
         res = Math.floor( inputNum.join("")) + Math.floor( inputNum2.join("")) ;
        display2.innerText = res
        console.log(calculation);
       }

    }
});

/* document.getElementById('clear').addEventListener('click', function (){

}) 

/* class Calculator{
    constructor(previous, current){
        this.current = current;
        this.previous = previous;

    }

}

const calculator = new Calculator() */
