document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
   
    var username = event.target.elements.uname.value;
    var password = event.target.elements.psw.value;
   
    // Hardcoded credentials
    var correctUsername = 'admin';
    var correctPassword = 'password';
   
    if (username === correctUsername && password === correctPassword) {
     alert('Login successful');
     // Redirect to another page
     window.location.href = "../closed/s-home.html";
    } else {
     alert('Invalid username or password');
    }
   });