let matching = false;

function check(){
    const password = document.getElementById('password');
    const confirm = document.getElementById("password-confirm");
    const matched = document.getElementById("matched");

    if(password.value == confirm.value){
        password.style.border = "2px solid green";
        confirm.style.border = "2px solid green";
        matched.innerText = "";
        matching = true;
    }
    else{
        password.style.border = "2px solid #fc2a2a";
        confirm.style.border = "2px solid #fc2a2a";
        matched.innerText = "*Passwords do not match";
        matched.style.color = "#fc2a2a";
        matched.style.fontSize = "12px";
        matched.style.marginTop = "4px";
        matching = false;
    }
}