const form = document.getElementById("form");
const email = document.getElementById("email");
const username = document.getElementById("username");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

//show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

//show input success message
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

//check email vaild
function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

//check required fields
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    console.log(input.value);
    if (input.value.trim() === "") {
      showError(
        input,
        `${input.id.charAt(0).toUpperCase() + input.id.slice(1)} is required`
      );
    }
  });
}

//check input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${
        input.id.charAt(0).toUpperCase() + input.id.slice(1)
      } must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${
        input.id.charAt(0).toUpperCase() + input.id.slice(1)
      } must be less than ${max} characters`
    );
  } else {
    showSuccess(input, "success");
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkRequired([username, email, password, password2]);
  //   console.log("click");
  checkLength(username, 5, 15);
  checkLength(password, 6, 25);
});

// //Event Listener
// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   //validation statement - username
//   if (username.value === "") {
//     showError(username, "Username is required.");
//     console.log("username error");
//   } else {
//     showSuccess(username);
//     console.log(username.value);
//   }
//   //validation statement - email
//   if (email.value === "") {
//     showError(email, "email is required.");
//     console.log("email error");
//   } else if (!validateEmail(email.value)) {
//     showError(email, "email is not vaild");
//   } else {
//     showSuccess(email);
//     console.log(email.value);
//   }
//   //validation statement - password
//   if (password.value === "") {
//     showError(password, "Password is required.");
//     console.log("password error");
//   } else {
//     showSuccess(password);
//     console.log(password.value);
//   }
//   //validation statement - password 2
//   if (password2.value === "") {
//     showError(password2, "Confirm assword is required.");
//     console.log("confirm assword error");
//   } else {
//     showSuccess(password2);
//     console.log(password2.value);
//   }
// });
