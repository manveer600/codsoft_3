function calculator(newvalue){
  document.getElementById('myResult').value += newvalue;
}

function answer(){
  var a = document.getElementById('myResult').value;
  var b = eval(a);
  document.getElementById('myResult').value = b;
}
function DeleteMe(){
  document.getElementById('myResult').value = ''
}