let passwordEye = document.querySelector('.password-eye');
let passwordInput = document.querySelector('#password-input');

console.log("password input type: ", passwordInput.type);
passwordEye.addEventListener("click", function(){
  if (passwordInput.type == "password"){
    passwordInput.type = "text";
    console.log("Inside If , password input type: ", passwordInput.type);
    console.log("Inside If: ", passwordEye.classList);
    passwordEye.classList.remove("fa-eye-slash");
    passwordEye.classList.add("fa-eye");
  }else{
    passwordInput.type = "password";
    console.log("Inside Else , password input type: ", passwordInput.type);
    console.log("Inside Else: ", passwordEye.classList);
    passwordEye.classList.remove("fa-eye");
    passwordEye.classList.add("fa-eye-slash");
  }
})