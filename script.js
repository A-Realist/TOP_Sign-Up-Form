let password = document.getElementById("password");
let confirm_password = document.getElementById("confirm_password");

if (password != confirm_password) {
  password.style.border = "1px solid red";
  confirm_password.style.border = "1px solid red";
  
}
