const errorMsg = document.getElementById("error-msg");
const username = document.getElementById("username");
const password = document.getElementById("password");
const submitBtn = document.getElementById("submit-btn"); 
const retryPassword = document.getElementById("RetryPassword")
const userObj = {

    "name": " ",
    "pass": " " 

}

submitBtn.onclick = (e) => {

    e.preventDefault();

    console.log("registering username is:", username.value)
  
   localStorage.setItem( userObj.name , username.value);
   localStorage.setItem(userObj.pass, password.value);

   

console.log(userObj );
}
