function insert(root){
    let result = document.getElementById('result')
    let currentResultNumber = result.innerHTML
    let num = root.innerHTML
    if (num == 'X'){
        num = '*'
    }           
    result.innerHTML = currentResultNumber + num
}

function clearResult(){
    document.getElementById('result').innerHTML = ''
}

function backspace(){
    let result = document.getElementById('result')
    let currentResultNumber = result.innerHTML
    result.innerHTML = currentResultNumber.substring(0,currentResultNumber.length - 1)
}
function calculate(){
    let result = document.getElementById('result')
    let currentResultNumber = result.innerHTML
    if (currentResultNumber){
        result.innerHTML = eval(currentResultNumber)
    }else{
        result.innerHTML = ''
    }
}