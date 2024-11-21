const welcomMsg = document.getElementById('welsome-msg');

const username = localStorage.getItem('username')

welcomMsg.textContent = `Hi ${username}, Welcome to your dashbord`
