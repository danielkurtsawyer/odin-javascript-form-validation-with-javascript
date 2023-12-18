const form = document.querySelector('form');

const emailInput = document.querySelector('#email');
const countryInput = document.querySelector('#country');
const zipCodeInput = document.querySelector('#zip-code');
const password1Input = document.querySelector('#password1');
const password2Input = document.querySelector('#password2');

const emailError = document.querySelector('.email-error');
const countryError = document.querySelector('.country-error');
const zipCodeError = document.querySelector('.zip-code-error');
const password1Error = document.querySelector('.password1-error');
const password2Error = document.querySelector('.password2-error');

function showErrors() {
  if(!emailInput.validity.valid){
    showEmailError();
  }
  if(!countryInput.validity.valid){
    showCountryError();
  }
  if(!zipCodeInput.validity.valid){
    showZipCodeError();
  }
  if(!password1Input.validity.valid){
    showPassword1Error();
  }
  if(!password2Input.validity.valid){
    showPassword2Error();
  }
}

function showEmailError() {
  if(emailInput.validity.valueMissing){
    emailError.textContent = 'You must enter an email';
  } else if(emailInput.validity.typeMismatch){
    emailError.textContent = 'You must enter a valid email address';
  }

  emailError.classList.add('active');
}

function showCountryError() {
  if(countryInput.validity.valueMissing){
    countryError.textContent = 'You must enter a country';
  } else if(countryInput.validity.patternMismatch){
    countryError.textContent = 'Country names should not contain numeric characters';
  }

  countryError.classList.add('active');
}

function showZipCodeError() {
  if(zipCodeInput.validity.valueMissing){
    zipCodeError.textContent = 'You must enter a zip code';
  } else if(zipCodeInput.validity.rangeUnderflow){
    zipCodeError.textContent = 'Zip codes must be positive numbers';
  }
  zipCodeError.classList.add('active');
}

function showPassword1Error() {
  if(password1Input.validity.valueMissing){
    password1Error.textContent = 'You must enter a password';
  } else if(password1Input.validity.tooShort){
    password1Error.textContent = 'Passwords must be at least 6 characters long';
  } else if(password1Input.validity.tooLong){
    password1Error.textContent = 'Passwords must be at most 32 characters long';
  }
  password1Error.classList.add('active');
}

function showPassword2Error() {
  if(password2Input.validity.valueMissing){
    password2Error.textContent = 'You must enter a password confirmation';
  } else if(password2Input.validity.patternMismatch){
    password2Error.textContent = 'Confirmation password must match the above password';
  }
  password2Error.classList.add('active');
}

emailInput.addEventListener('input', (e) => {
  if(emailInput.validity.valid){
    emailError.textContent = '';
    emailError.classList.remove('active');
  } else {
    showEmailError();
  }
})

countryInput.addEventListener('input', (e) => {
  if(countryInput.validity.valid){
    countryError.textContent = '';
    countryError.classList.remove('active');
  } else {
    showCountryError();
  }
})

zipCodeInput.addEventListener('input', (e) => {
  if(zipCodeInput.validity.valid){
    zipCodeError.textContent = '';
    zipCodeError.classList.remove('active');
  } else {
    showZipCodeError();
  }
})

password1Input.addEventListener('input', (e) => {
  if(password1Input.validity.valid){
    password1Error.textContent = '';
    password1Error.classList.remove('active');
    // update the second password pattern constraint
    password2Input.pattern = password1Input.value;
  } else {
    showPassword1Error();
  }
})

password2Input.addEventListener('input', (e) => {
  if(password2Input.validity.valid){
    password2Error.textContent = '';
    password2Error.classList.remove('active');
  } else {
    showPassword2Error();
  }
})

form.addEventListener('submit', (e)=> {
  if(!form.checkValidity()){
    showErrors()
    e.preventDefault();
  }
})

