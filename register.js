const errorMsg = document.getElementById("error-msg");
const username = document.getElementById("username");
const password = document.getElementById("password");
const submitBtn = document.getElementById("submit-btn"); 
const retryPassword = document.getElementById("RetryPassword")

submitBtn.onclick = (e) => {
    e.preventDefault();
   
const formData = {

    username: username.value,
    password: password.value,
    retryPassword: retryPassword.value
}


saveFormData(formData);

function saveFormData (formData) {
    const storedFormData = JSON.parse(localStorage.getItem('formData')) || [];

    storedFormData.push(formData);
    localStorage.setItem('formData', JSON.stringify(storedFormData));


if(formData.password == formData.retryPassword){
    console.log("Correct")

} else {
console.log("Please")

}



}
}



