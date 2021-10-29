

function validateForm() {
  let fn = document.forms["signup"]["fname"].value;
  let ln = document.forms["signup"]["lname"].value;
  let email = document.forms["signup"]["email"].value;
  let pass = document.forms["signup"]["password"].value;
  let cpass = document.forms["signup"]["confirmpassword"].value;

  if (fn == "") {
    alert("First name must be filled out");
    return false;
  }
  else if (ln == "") {
    alert("Last name must be filled out");
    return false;
  }
  else if (email == "") {
    alert("Email must be filled out");
    return false;
  }
  else if (pass == "") {
    alert("Password must be filled out");
    return false;
  }
  else if (pass != cpass) {
    alert("Passwords do not match");
    return false;
  }
}

function scrollAdvantages() {
  window.scrollTo(0,500);
}
