let email=document.getElementById("email");
let error=document.getElementById("error");
let pwd=document.getElementById("pwd");
let button=document.getElementById("submit");

function validate(){
    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/
    if(regexp.test(email.value)){
        error.innerHTML= "Valid";
        error.style.color= "green";
        return true;
        

    }
    else{
        error.innerHTML= "Invalid";
        error.style.color= "red";
        return false;
    }
}

function validatePassword() {
      let flag=false;          
    // Do not show anything when the length of password is zero.
    if (pwd.value.length === 0) {
        document.getElementById("msg").innerHTML = "";
       flag=true;
    }
    // Create an array and push all possible values that you want in password
    var matchedCase = new Array();
    matchedCase.push("[$@$!%*#?&]"); // Special Charector
    matchedCase.push("[A-Z]");      // Uppercase Alpabates
    matchedCase.push("[0-9]");      // Numbers
    matchedCase.push("[a-z]");     // Lowercase Alphabates

    // Check the conditions
    var ctr = 0;
    for (var i = 0; i < matchedCase.length; i++) {
        if (new RegExp(matchedCase[i]).test(pwd.value)) {
            ctr++;
        }
    }
    // Display it
    var color = "";
    var strength = "";
    switch (ctr) {
        case 0:
        case 1:
        case 2:
            strength = "Very Weak";
            color = "red";
            flag=true;
            break;
        case 3:
            strength = "Medium";
            color = "orange";
            flag=true;
            break;
        case 4:
            strength = "Strong";
            color = "green";
            break;
    }
    document.getElementById("msg").innerHTML = strength;
    document.getElementById("msg").style.color = color;
    if(flag===true){
        return false;
    }
    else{
        return true;
    }
}
