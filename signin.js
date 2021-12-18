document.querySelector("#signin").addEventListener("click",signIn);
var regdUsers = JSON.parse(localStorage.getItem("userDatabase"))
function signIn() {
    var email = document.querySelector("#email").value;
    var password = document.querySelector("#password").value;

    if(email === "admin" && password === "admin"){
        window.location.href = "admin.html"
    }
    else{
        for(var i = 0;i<regdUsers.length;i++){
        if(regdUsers[i].emailAdd == email && regdUsers[i].pass == password){
            window.location.href = "SoapsAndSanitizers.html"
            alert("Sign In Successful")
            
        } 
    }
    }
    
}
document.getElementById('soapandsanity').addEventListener('click',land);
 function land(){
    window.location.href ="SoapsAndSanitizers.html"
}
document.getElementById('create').addEventListener('click',land);
 function land(){
    window.location.href ="signup.html"
}
