function registrationValidation() {
  let registrationForm = document.getElementById("registration");

  // validate name field
  let name = registrationForm.elements["name"].value;
  let validName = isNameValid(name);

  // validate age field
  let age = registrationForm.elements["age"].value;
  let validAge = isAgeValid(age);

  // validate email field
  let email = registrationForm.elements["email"].value;
  let validEmail = isEmailValid(email);

  // validate phone number
  let phone = registrationForm.elements["phone"].value;
  let validPhone = isPhoneValid(phone);

  let successMsg = document.getElementById("successMsg");
  if (validName && validAge && validEmail && validPhone) {
    let p = document.createElement("p");
    let text = document.createTextNode("Registration is successful! Our team will be in contact with you shortly.");
    p.appendChild(text);
    successMsg.appendChild(p);
    successMsg.style.color = "green";
    successMsg.style.fontWeight = "bold";
    successMsg.classList.remove("hidden");
  }
}

function addError(field, message) {
  successMsg.classList.add("hidden");
  let p = document.createElement("p");
  let text = document.createTextNode(message);
  p.appendChild(text);
  let id = "error" + field;
  document.getElementById(id).innerHTML = "";
  document.getElementById(id).appendChild(p);
}

function isNameValid(name) {
  document.getElementById("errorname").innerHTML = "";
  if (!name) {
    addError("name", "Name field must not be empty.");
    return false;
  }

  let regName = /^[ a-zA-Z\-\’,]+$/;
  if (!regName.test(name)) {
    addError("name", "Invalid name given.");
    return false;
  }
  return true;
}

function isAgeValid(age) {
  document.getElementById("errorage").innerHTML = "";
  if (!age) {
    addError("age", "Age field must not be empty.");
    return false;
  }

  age = parseFloat(age);

  if (!Number.isInteger(age)) {
    addError("age", "Age must be an integer (whole number).");
    return false;
  }

  if (age < 18 || age > 130) {
    addError("age", "Age must be a number between 18 and 130.");
    return false;
  }
  return true;
}

function isEmailValid(email) {
  document.getElementById("erroremail").innerHTML = "";
  if (!email) {
    addError("email", "Email field must not be empty.");
    return false;
  }

  let regEmail = /^[a-zA-Z-]([\w-.]+)?@([\w-]+\.)+[\w]+$/;
  if (!regEmail.test(email)) {
    addError("email", "Invalid email given.");
    return false;
  }
  return true;
}

function isPhoneValid(phone) {
  document.getElementById("errorphone").innerHTML = "";
  if (phone) {
    if (!/^\d+$/.test(phone)) {
      addError("phone", "Phone number must contain only digits (no letters or symbols).");
      return false;
    } else if (phone.length !== 10) {
      addError("phone", "Your phone number must be 10 digits long.");
      return false;
    } else if (!/^[0-9]+$/.test(phone)) {
      addError("phone", "Your phone number must only contain the digits 0-9.");
      return false;
    } else if (!/^04/.test(phone)) {
      addError("phone", "Your phone number must begin with 04.");
      return false;
    }
  }
  return true;
}
