document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
  
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }
  
    if (username === '' || email === '' || password === '' || confirmPassword === '') {
      alert('Please fill out all fields.');
      return;
    }
  
    alert('Registration successful!');
  });
  