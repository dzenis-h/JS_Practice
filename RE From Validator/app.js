// Form Blur Event Listeners
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zip').addEventListener('blur', validateZip);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);
document.getElementById('btn').addEventListener('click', displayMessage);

function validateName() {
  const name = document.getElementById('name');
  const re = /^[a-zA-Z]{2,20}$/;

  if(!re.test(name.value)){
    name.classList.add('is-invalid');
  } else {
    name.classList.remove('is-invalid');
  }
}

function validateZip() {
  const zip = document.getElementById('zip');
  const re = /^[0-9]{5}(-[0-9]{4})?$/;

  if(!re.test(zip.value)){
    zip.classList.add('is-invalid');
  } else {
    zip.classList.remove('is-invalid');
  }
}

function validateEmail() {
  const email = document.getElementById('email');
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if(!re.test(email.value)){
    email.classList.add('is-invalid');
  } else {
    email.classList.remove('is-invalid');
  }
}

function validatePhone() {
  const phone = document.getElementById('phone');

  const re = /^[([ ]?[+ \]]?[0-9]{1,5}\)?[+-. ]?[0-9]{1,3}[-. ]?[0-9]{1,3}[-. ]?[0-9]{1,3}[-. ]?[0-9]{2,4}$/; 
  
  if(!re.test(phone.value)){
    phone.classList.add('is-invalid');
  } else {
    phone.classList.remove('is-invalid');
  }
}

function displayMessage(e) {
  e.preventDefault();

const message = document.getElementById('message');
const name = document.getElementById('name');
const zip = document.getElementById('zip');
const phone = document.getElementById('phone');
const email = document.getElementById('email');

  if ((name.classList.contains('is-invalid') || zip.classList.contains('is-invalid') || phone.classList.contains('is-invalid') || email.classList.contains('is-invalid')) 
  || (name.value = '' || zip.value === '' || phone.value === '' || email.value === '')) {
    message.classList.add('alert-danger');
    message.innerHTML = `<b>Nope, it wasn\'t done corectlly!</b>`
    removeAlert('alert-danger');
  } else {
    clearInput(name, zip, phone, email);
    message.classList.add('alert-success');
    message.innerHTML = `<b>Success, you did it corectlly!</b>`
    removeAlert('alert-success');
  }
}

function clearInput (name, zip, phone, email) {
  name.value = '';
  zip.value = '';
  phone.value = '';
  email.value = '';
}

function removeAlert (alert) {
  setTimeout(() => {
    message.innerHTML = '';
    message.classList.remove(alert);
  }, 2000);
}

