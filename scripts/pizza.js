

document.getElementById("pizza-form").onsubmit = validate;

function validate(){
    var send = true;

    // clear all error messages
    var errors = document.getElementsByClassName("err");
    for(var i = 0; i < errors.length; i++){
        errors[i].style.visibility = "hidden";
    }

    // Check first name
    var fName = document.getElementById("firstName").value;
    if(fName == ""){
        var errFirst = document.getElementById("err-fName");
        errFirst.style.visibility = "visible";
        send = false;
    }
    // check last name
    var lName = document.getElementById("lastName").value;
    if(lName == ""){
        var errLast = document.getElementById("err-lName");
        errLast.style.visibility = "visible";
        send = false;
    }

    // check for a size
    var size = document.getElementById("size").value;
    if(size == "none"){
        var errSize = document.getElementById("err-chosenSize");
        errSize.style.visibility = "visible";
        send=false;
    }

    // validate pickup or delivery
    var method = document.getElementsByName("method");
    var methodValue = "";
    for(i = 0; i < method.length; i++){
        if(method[i].checked){
            methodValue = method[i].value;
        }
    }
    if(methodValue == ""){
        var errMethod = document.getElementById("err-method");
        errMethod.style.visibility = "visible";
        send = false;
    }

    // validate address if empty
    if(methodValue == "delivery"){
        var address = document.getElementById("address").value;
        if(address == ""){
            var errAdd = document.getElementById("err-add");
            errAdd.style.visibility = "visible";
            send = false;
        }
    }

    var checks = document.getElementsByName("toppings[]");
    var count = 0;
    for(i = 0; i < checks.length; i++){
        if(checks[i].checked){
            count++;
        }
    }
    if(count == 0){
        var errTop = document.getElementById("err-top");
        errTop.style.visibility = "visible";
        send = false;
    }
    return send;
}