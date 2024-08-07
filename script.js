var calculator = document.getElementById("calculator");
var operators = ["/", "*", "+", "-", "."]
var noWorkOnStart = ["+", "/", "*",]
function calculator_f(num) {
    document.getElementById("calculator").value += num;
}
function c() {
    document.getElementById("calculator").value = "";
}
function total() {
    var calculator = document.getElementById("calculator")
    calculator.value = eval(calculator.value)
    calculator.value = calculator.value.toFixde(2)
}
function delet1() {
    var calculator = document.getElementById('calculator');
    var currentValue = calculator.value;
    var newValue = currentValue.slice(0, -1);
    calculator.value = newValue;
}
function buttonCLick(num) {
    if (calculator.value.replace("-", "") === "") {
        if (noWorkOnStart.includes(num)) {
        } else {
            var lastIndex = calculator.value.slice(calculator.value.length - 1)
            if (operators.includes(lastIndex) && operators.includes(num)) {
                calculator.value = calculator.value.replace(lastIndex, num)
            } else {
                calculator.value += num
            }
        }
    } else {
        var lastIndex = calculator.value.slice(calculator.value.length - 1)
        if (operators.includes(lastIndex) && operators.includes(num)) {
            calculator.value = calculator.value.replace(lastIndex, num)
        } else {
            calculator.value += num
        }
    }
}