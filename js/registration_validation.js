function registrationValidation() {
  let registrationForm = document.getElementById("registration");

  // validate name field
  let name = registrationForm.elements["name"].value;
  let nameValidResult = validateName(name);
  console.log(nameValidResult);

  // validate age field
  let age = registrationForm.elements["age"].value;
  let ageValidResult = validateAge(age);
  console.log(ageValidResult);

  // validate email field
  let email = registrationForm.elements["email"].value;
  let emailValidResult = validateEmail(email);
  console.log(emailValidResult);

  // validate phone number
  let phone = registrationForm.elements["phone"].value;
  let phoneValidResult = validatePhone(phone);
  console.log(phoneValidResult);
}

function addError(field, message) {
  var p = document.createElement("p");
  var text = document.createTextNode(message);
  p.appendChild(text);
  let id = "error" + field;
  document.getElementById(id).innerHTML = "";
  document.getElementById(id).appendChild(p);
}

function validateName(name) {
  document.getElementById("errorname").innerHTML = "";
  if (!name) {
    addError("name", "Name field must not be empty.");
  }

  let regName = /^[ a-zA-Z\-\’,]+$/;
  if (!regName.test(name)) {
    addError("name", "Invalid name given.");
  }
}

function validateAge(age) {
  document.getElementById("errorage").innerHTML = "";
  if (!age) {
    addError("age", "Age field must not be empty.");
  }

  age = parseFloat(age);

  if (!Number.isInteger(age)) {
    addError("age", "Age must be an integer (whole number).");
  }

  if (age < 18 || age > 130) {
    addError("age", "Age must be a number between 18 and 130.");
  }
}

function validateEmail(email) {
  document.getElementById("erroremail").innerHTML = "";
  if (!email) {
    addError("email", "Email field must not be empty.");
  }

  let regEmail = /^[a-zA-Z-]([\w-.]+)?@([\w-]+\.)+[\w]+$/;
  if (!regEmail.test(email)) {
    addError("email", "Invalid email given.");
  }
}

function validatePhone(phone) {
  document.getElementById("errorphone").innerHTML = "";
  if (phone) {
    if (!/^\d+$/.test(phone)) {
      addError("phone", "Phone number must contain only digits (no letters or symbols).");
    } else if (phone.length !== 10) {
      addError("phone", "Your phone number must be 10 digits long.");
    } else if (!/^[0-9]+$/.test(phone)) {
      addError("phone", "Your phone number must only contain the digits 0-9.");
    } else if (!/^04/.test(phone)) {
      addError("phone", "Your phone number must begin with 04.");
    }
  }
}
