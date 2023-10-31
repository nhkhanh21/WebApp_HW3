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
            document.getElementById("notice").innerText = "Lỗi phép tính hoặc định dạng số!";
            result = NaN;
            break;
    }
    document.getElementById("result").innerText = result;
    if (isNaN(result)) {
        document.getElementById("notice").innerText = "Lỗi phép tính hoặc định dạng số!";
    } else {
        document.getElementById("notice").innerText = "Thành công!";
    }
}

function constraint() {
    var form = document.getElementById('myForm');
    if (isNaN(parseFloat(form.elements["first-number"].value))) {
        document.getElementById("notice").innerText = "Số thứ nhất chưa được nhập hoặc không đúng định dạng!";
    }
    if (isNaN(parseFloat(form.elements["second-number"].value))) {
        document.getElementById("notice").innerHTML = "Số thứ hai chưa được nhập hoặc không đúng định dạng!";
    }
    if (!isNaN(parseFloat(form.elements["first-number"].value)) &&
    !isNaN(parseFloat(form.elements["second-number"].value)))
    {document.getElementById("notice").innerText = " "; }
}