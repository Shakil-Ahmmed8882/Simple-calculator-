


let result = ''
const inputField = document.getElementById('result')


function Number(num){
result += num
// add every three digits
inputField.value = result.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function Operator(operator){
      result += operator
      inputField.value = result
}

function clear(){
      result = ""
      inputField.value = result;
}

function calculate() {
      try {
          result = eval(result);
          inputField.value = result;
      } catch (error) {
          alert('Invalid calculation');
          clearResult();
      }
   }



//Adding Event Listener buttons here

document.getElementById('btn-0').addEventListener("click",function(){
      Number(0)
})
document.getElementById('btn-1').addEventListener("click",function(){
      Number(1)
})
document.getElementById('btn-2').addEventListener("click",function(){
      Number(2)
})
document.getElementById('btn-3').addEventListener("click",function(){
      Number(3)
})
document.getElementById('btn-4').addEventListener("click",function(){
      Number(4)
})
document.getElementById('btn-5').addEventListener("click",function(){
      Number(5)
})
document.getElementById('btn-6').addEventListener("click",function(){
      Number(6)
})
document.getElementById('btn-7').addEventListener("click",function(){
      Number(7)
})
document.getElementById('btn-8').addEventListener("click",function(){
      Number(8)
})
document.getElementById('btn-9').addEventListener("click",function(){
      Number(9)
})


// Adding Event Listener Operator buttons here
document.getElementById('btn-plus').addEventListener("click",function(){
      Operator('+')
})
document.getElementById('btn-minus').addEventListener("click",function(){
      Operator('-')
})
document.getElementById('btn-devide').addEventListener("click",function(){
      Operator('/')
})
document.getElementById('btn-multiply').addEventListener("click",function(){
      Operator("*")
})


// Adding Event Listener Clear display button here
document.getElementById('btn-C').addEventListener("click",function(){
      clear()
})


// Adding Event Listener assignment button here
document.getElementById('btn-equal').addEventListener("click",function(){
      calculate()
})
