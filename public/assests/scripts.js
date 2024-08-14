/*!
* Start Bootstrap - Clean Blog v6.0.9 (https://startbootstrap.com/theme/clean-blog)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-clean-blog/blob/master/LICENSE)
*/
window.addEventListener('DOMContentLoaded', () => {
    let scrollPos = 0;
    const mainNav = document.getElementById('mainNav');
    const headerHeight = mainNav.clientHeight;
    window.addEventListener('scroll', function() {
        const currentTop = document.body.getBoundingClientRect().top * -1;
        if ( currentTop < scrollPos) {
            // Scrolling Up
            if (currentTop > 0 && mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-visible');
            } else {
                console.log(123);
                mainNav.classList.remove('is-visible', 'is-fixed');
            }
        } else {
            // Scrolling Down
            mainNav.classList.remove(['is-visible']);
            if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-fixed');
            }
        }
        scrollPos = currentTop;
    });
})

function validateForm() {
    var licenseNumberInput = document.getElementById('licenseNumber');
    var licenseNumberValue = licenseNumberInput.value;
    var alphanumericRegex = /^[A-Za-z0-9]{8}$/;

    if (!alphanumericRegex.test(licenseNumberValue)) {
        alert('Please enter a valid 8-digit alphanumeric license number.');
        return false;
    }

    return true;
}
function toggleSignupForms() {
    var signupContainer = document.getElementById('signupContainer');
    var loginForm = document.getElementById('loginForm');
    var toggleButton = document.getElementById('toggleButton');

    if (signupContainer.style.display === 'none') {
        signupContainer.style.display = 'block';
        loginForm.style.display = 'none';
        toggleButton.textContent = 'Go to Login Form';
    } else {
        signupContainer.style.display = 'none';
        loginForm.style.display = 'block';
        toggleButton.textContent = 'Go to Signup Form';
    }
}

function toggleSignupForm() {
    var signupContainer = document.getElementById('signupContainer');
    var loginForm = document.getElementById('loginForm');
    
    if (signupContainer.style.display === 'none') {
        signupContainer.style.display = 'block';
        loginForm.style.display = 'none';
    } else {
        signupContainer.style.display = 'none';
        loginForm.style.display = 'block';
    }
}