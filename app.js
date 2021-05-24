const input = document.querySelectorAll('input');

// click, input, change, focus, blur

let colors = ['red', 'orangered', 'yellow', 'lime'];
             // 0 2       1 3         2 4      3 5 

for(let i=0; i<input.length; i++){            
input[i].oninput = function(){
    if(input[i].value != "" && input[i].value > 1 && input[i].value <= 5 ){
        input[i].style.background = colors[input[i].value-2]
    }
    else {
        alert("Введите корректную оценку")
        input[i].value = "";        
    }
}
} 