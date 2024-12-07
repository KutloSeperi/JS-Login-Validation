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



const response = saveFormData(formData);

}



function saveFormData (formData) {
   

if(formData.password == formData.retryPassword){
    
    console.log("Correct")
    const storedFormData = JSON.parse(localStorage.getItem('formData')) || [];

    const userExists = some.storedFormData(function(user){
        return 
    });

    if (userExists===)
    storedFormData.push(formData);
    localStorage.setItem('formData', JSON.stringify(storedFormData));

    
    return { message: "Incorrect  password", saveFormData: true };
} else {
    console.log("incorrect")
    return { message: "Incorrect  password", saveFormData: false };
    

}



}




