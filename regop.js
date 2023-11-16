function toggleForm() {
    const loginContainer = document.getElementById('loginContainer');
    const signupContainer = document.getElementById('signupContainer');

    if (loginContainer.style.display === 'none') {
        loginContainer.style.display = 'flex';
        signupContainer.style.display = 'none';
    } else {
        loginContainer.style.display = 'none';
        signupContainer.style.display = 'flex';
    }
}

const form1 = document.getElementById('form1');
const form2 = document.getElementById('form2');

form2.classList.add('inactive');

// Add event listeners to switch active form
form1.addEventListener('click', () => {
  form1.classList.add('active');
  form1.classList.remove('blur');
  form2.classList.remove('active');
  form2.classList.add('blur');
});

form2.addEventListener('click', () => {
  form2.classList.add('active');
  form2.classList.remove('blur');
  form1.classList.remove('active');
  form1.classList.add('blur');
});
