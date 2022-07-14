// calling variabels
const numBtn = document.querySelectorAll('.click');
const calc = document.querySelectorAll('.calc');
const clear = document.querySelector('.clearAll');
const deleteBtn = document.getElementById('clear');
const result = document.getElementById('equal');
const display1 = document.getElementById('dis1');
const display2 = document.getElementById('dis2');

// holders
/* let inputNum = [];
let inputNum2 = [];
let calculation = ''; */

let res = 0;
let storage = "";
let bool = true;

numBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    /* if (calculation.length === 0 && inputNum.length <= 6) {
      inputNum.push(btn.innerText);

      display1.innerText = inputNum.join('');
    } else if (calculation.length === 1 && inputNum2.length <= 6) {
      inputNum2.push(btn.innerText);
      display1.innerText = inputNum.join('') + calculation + inputNum2.join('');
    } */
    if (display2.innerText.length > 0 && bool === true) {
      display1.innerText = btn.innerText;
      bool = false;
    } else {
      display1.innerText += btn.innerText;
    }
  });
});

calc.forEach(btn => {
  btn.addEventListener('click', function () {
    /* if(display2.innerText.length > 0 && inputNum.length === 0){
        calculation = btn.innerText;
      inputNum.push(display2.innerText);
      display1.innerText = inputNum.join("") + calculation;

    }
    else if (inputNum.length > 0 && calculation.length === 0) {
        calculation = btn.innerText;
        display1.innerText = inputNum.join('') + calculation;
    } */
    if (display2.innerText.length > 0 && storage === true && bool === true) {
      display1.innerText = display2.innerText + btn.innerText;
      storage = false;
      bool = false;
    } else {
      display1.innerText += btn.innerText
    }

  });
});

result.addEventListener('click', function () {
  /* if (inputNum.length > 0 && calculation.length > 0 && inputNum2.length > 0) {
    if (calculation === '+') {
      res = Number(inputNum.join('')) + Number(inputNum2.join(''));
      display2.innerText = res.toString();
      
    }else if(calculation === "-"){
        res = Number(inputNum.join('')) - Number(inputNum2.join(''));
        display2.innerText = res.toString();
        
    }else if(calculation === "/"){
        res = Number(inputNum.join('')) / Number(inputNum2.join(''));
        display2.innerText = res.toString();
        
    }else if(calculation === "*"){
        res = Number(inputNum.join('')) * Number(inputNum2.join(''));
        display2.innerText = res.toString();    
    }
    
    inputNum = [];
    calculation = "";
    inputNum2 = [];
  } */
  res = eval(display1.innerText.toString());
  display2.innerText = res;
  storage = true;
  bool = true;
});

deleteBtn.addEventListener('click', function (){
    /* if(calculation.length === 0){
        display1.innerText = display1.innerText.toString().slice(0, -1);
        inputNum.pop();

    }else if(calculation.length === 1){
        display1.innerText = display1.innerText.toString().slice(0, -1);
        inputNum2.pop();
    } */
  display1.innerText = display1.innerText.toString().slice(0, -1);

});

clear.addEventListener('click', function(){
  display1.innerText = "";
  display2.innerText = "";
  bool = true;
  storage = true;

    /* inputNum = [];
    calculation = "";
    inputNum2 = []; */

});


