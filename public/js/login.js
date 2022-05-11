const loginFormHandler = async(event) => {
    event.preventDefault();

    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (username && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/team');
        } else {
            alert(response.statusText);
        }
    }
};

document
<<<<<<< HEAD
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);
=======
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

>>>>>>> 3884389f30f2ffef3c66302c2a7d75f8cdfca001
