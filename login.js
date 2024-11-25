const errorMsg = document.getElementById("error-msg");
const username = document.getElementById("username");
const password = document.getElementById("password");
const submitBtn = document.getElementById("submit-btn");

// dummy data

const savedData = {
  username: "kutlo",
  password: "123",
};


// button event
submitBtn.onclick = (e) => {
  e.preventDefault();
  
 
  const inputData = {
    username: username.value.toLowerCase(),
    password: password.value,
  };

console.log("usernames:", username.value.toLowerCase());

  const response = login(savedData, inputData);

  if (response.login) {
    localStorage.setItem("username", inputData.username);
    document.location.assign("/dashboard.html");
  } else {
    errorMsg.textContent = response.message;
  }
};




// Logic to validate
function login(savedData, inputData) {
  if (inputData.username.trim() && inputData.password.trim()) {
    if (savedData.username !== inputData.username) {
      return { message: "Incorrect username ", login: false };
    } else if (savedData.password !== inputData.password) {
      return { message: "Incorrect  password", login: false };
    } else {
      return { message: "Login Successful", login: true };
    }
  } else {
    return { message: "Please fill in all fields", login: false };
  }

}

