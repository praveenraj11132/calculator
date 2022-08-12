function cal(o){
    document.getElementById('result').value+=o
}
function calc()
{
   var result=eval(document.getElementById('result').value)
   document.getElementById('result').value=result
   localStorage.setItem('output',result)
};

function myfun()
{
    document.getElementById('result').value='';
}
function myfunc()
{
    document.getElementById('result').value=document.getElementById('result').value.substring(0,document.getElementById('result').value.length-1)
}