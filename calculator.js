function display(num)
{
 result.value+=num;
}
function clear()
{
 result.value="";
}
function evaluate() {
    expression=result.value;
    output=eval(expression);
    result.eval=output;
}
function remove() {
    currentexpression=result.value;
    result.value=currentexpression.slice(0,-1);
}