const navCloseEl = document.querySelector('.nav__close');
const navList = document.querySelector('.nav__list');
const navIconEl = document.querySelector('.nav__icon');
const navBgOverlayEl = document.querySelector('.nav__bgOverlay');



window.addEventListener('DOMContentLoaded', () =>{
  document.body.style.visibility = 'visible';
});

const navOpen = () => {
   navList.classList.add('show');
  navBgOverlayEl.classList.add('active');
  document.body.style= 'visibility: visible; height: 100vh; width:100vw; overflow:hidden;';
}

const navClose = () => {
  navList.classList.remove('show');
  navBgOverlayEl.classList.remove('active');
  document.body.style= 'visibility: visible; height: initial; width: 100%; overflow-x: hidden;';
}

navIconEl.addEventListener('click', navOpen);

navCloseEl.addEventListener('click', navClose);

navBgOverlayEl.addEventListener('click', navClose)

// AOS
// AOS.refreshHard();
AOS.init({
  offset: 200, // offset (in px) from the original trigger point
  delay: 100, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('signupForm');

  form.addEventListener('submit', function(event) {
      event.preventDefault();
      const username = document.getElementById('username').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      const usernameError = document.getElementById('usernameError');
      const emailError = document.getElementById('emailError');
      const passwordError = document.getElementById('passwordError');

      usernameError.textContent = '';
      emailError.textContent = '';
      passwordError.textContent = '';

      if (username.trim() === '') {
          usernameError.textContent = 'Username is required';
          return;
      }

      if (username.length < 6) {
          usernameError.textContent = 'Username must be at least 6 characters long';
          return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
          emailError.textContent = 'Invalid email format';
          return;
      }

      if (password.trim() === '') {
          passwordError.textContent = 'Password is required';
          return;
      }

      if (password.length < 6) {
          passwordError.textContent = 'Password must be at least 6 characters long';
          return;
      }

      if (!/[0-9]/.test(password) || !/[!@#$%^&*]/.test(password)) {
          passwordError.textContent = 'Password must contain at least one number and one special character';
          return;
      }

      // If all validations pass, you can proceed with signup
      alert('Sign up successful!');
      // You can submit the form here if needed
      // form.submit();
  });
});



