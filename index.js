// let username = document.getElementById("username");
// let email = document.getElementById("email");
// let phone = document.getElementById("phone");
// let password = document.getElementById("password");

let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"),
  email = id("email"),
  phone = id("phone"),
  password = id("password"),
  errorMsg = classes("error"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon");

// regular expression

let userExp = /^[a-zA-Z]+$/;
let emailExp = /^[a-zA-Z0-9]+@[a-zA-Z]+.[a-zA-Z]+$/;
let mobExp = /^[0]?[789]\d{9}$/;
let passwordExp = /^[a-zA-Z0-9]+$/;

// validation started

form.addEventListener("submit", (e) => {
  e.preventDefault();

  engine(username, 0, "username can not be left blank");
  engine(email, 1, "Email can not be left blank");
  engine(phone, 2, "phone can not be left blank");
  engine(password, 3, "password can not be left blank");
});

// matches function

let matches = (id, serial, messege, exp) => {
  if (id.value.match(exp)) {
    errorMsg[serial].innerHTML = "";
    failureIcon[serial].style.opacity = "0";
    successIcon[serial].style.opacity = "1";
  } else {
    errorMsg[serial].innerHTML = messege;
    failureIcon[serial].style.opacity = "1";
    successIcon[serial].style.opacity = "0";
  }
};

// validation function

let engine = (id, serial, message) => {
  if (id.value === "") {
    errorMsg[serial].innerHTML = message;
    failureIcon[serial].style.opacity = "1";
    successIcon[serial].style.opacity = "0";
  } else {
    matches(username, 0, "only alphabets allowed", userExp);
    matches(email, 1, "Email valid email ", emailExp);
    matches(phone, 2, " Enter mobile in digits only", mobExp);
    matches(
      password,
      3,
      "make strong password use a-z A-Z and number and special character",
      passwordExp
    );
  }
};
