function compute() {
    var form = document.getElementById('myForm');
    var firstNum = parseFloat(form.elements["first-number"].value),
        secondNum = parseFloat(form.elements["second-number"].value),
        operatorList = form.elements["operator"],
        operator = null;
    result = 0;
    for (var i = 0; i < operatorList.length; i++) {
        if (operatorList[i].checked) {
            operator = operatorList[i].value;
        }
    }
    switch (operator) {
        case "+":
            result = firstNum + secondNum;
            document.getElementById("notice").innerText = "";
            break;
        case "-":
            result = firstNum - secondNum;
            document.getElementById("notice").innerText = "";
            break;
        case "*":
            result = firstNum * secondNum;
            document.getElementById("notice").innerText = "";
            break;
        case "/":
            result = firstNum / secondNum;
            document.getElementById("notice").innerText = "";
            break;
        default:
            document.getElementById("notice").innerText = "Lỗi phép tính hoặc định dạng số";
            result = NaN;
            break;
    }
    document.getElementById("result").innerHTML = result;
}