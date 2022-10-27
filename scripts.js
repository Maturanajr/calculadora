function insert(root,keyNum = null){
    if (document.getElementById('equal').getAttribute('data-state') == '1'){
        clearResult()
        document.getElementById('equal').setAttribute('data-state','0')
    }
    let result = document.getElementById('result')
    let currentResultNumber = result.innerHTML
    if (keyNum == null){
        var num = root.innerHTML
    }else{
        var num = keyNum
    }
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
    document.getElementById('equal').setAttribute('data-state','1')
    if (currentResultNumber){
        result.innerHTML = eval(currentResultNumber)
    }else{
        result.innerHTML = ''
    }
    var historyData = document.getElementById('history_content').innerHTML
    historyData = '<br>' + currentResultNumber + ' = ' + eval(currentResultNumber) + historyData
    document.getElementById('history_content').innerHTML = historyData
}

document.onkeydown = function (e) {
    e = e || window.event;
    var charCode = e.which || e.keyCode;
    if(charCode == 96) insert('none','0');
    if(charCode == 97) insert('none','1');
    if(charCode == 98) insert('none','2');
    if(charCode == 99) insert('none','3');
    if(charCode == 100) insert('none','4');
    if(charCode == 101) insert('none','5');
    if(charCode == 102) insert('none','6');
    if(charCode == 103) insert('none','7');
    if(charCode == 104) insert('none','8');
    if(charCode == 105) insert('none','9');
    if(charCode == 8) backspace();
    if(charCode == 107) insert('none','+');
    if(charCode == 109) insert('none','-');
    if(charCode == 106) insert('none','*');
    if(charCode == 111) insert('none','/');
    if(charCode == 110) insert('none','.');
    if(charCode == 13) calculate();

}


function dropDownMenu(){
    document.getElementById('dropdownMenu').classList.toggle('show');
}

window.onclick = function(event) {
    if (!event.target.matches('.menu')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

function openHistory(){
    let history = document.getElementById('history')
    if (history.style.display == 'block'){
        history.style.display = 'none'
    }else{
        history.style.display = 'block'
    }
}
