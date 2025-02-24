const firstName = document.getElementById("fname");
const lastName = document.getElementById("lname");
const password = document.getElementById("password");
const submit = document.getElementById("submit");
const next = document.getElementById("next");
const previous = document.getElementById("previous");
const congrats = document.getElementById("congrats");
const fn = firstName.parentElement;
const ln = lastName.parentElement;
const p = password.parentElement;

function NameCheck(input, input2) {
  if (input.value.length < 3 && input2.value.length < 3) {
    fn.className = "nameform-error";
    ln.className = "Lnameform-error";
  } else if (input.value.length < 3) {
    ln.className = "lnameform d-flex flex-column gap-2";
    fn.className = "nameform-error";
  } else if (input2.value.length < 3) {
    ln.className = "Lnameform-error";
    fn.className = "nameform d-flex flex-column gap-2";
  } else {
    fn.className = "nameform-success";
    ln.className = "Lnameform-success";
    p.style.visibility = "visible";
    p.style.height = "auto";
    previous.style.visibility = "visible";
    next.style.visibility = "hidden";
    submit.style.visibility = "visible";
  }
}

function passCheck(input) {
  const formControl = input.parentElement;
  if (input.value.length < 6) {
    p.className = "passwordform-error";
  } else {
    p.className = "passwordform-success";
    previous.style.visibility = "hidden";
    submit.style.visibility = "hidden";
    congrats.style.visibility = "visible";
  }
}

next.addEventListener("click", function (e) {
  e.preventDefault();
  NameCheck(firstName, lastName);
});

previous.addEventListener("click", function (e) {
  e.preventDefault();
  fn.className = "nameform d-flex flex-column gap-2";
  ln.className = "lnameform d-flex flex-column gap-2";
  p.style.visibility = "hidden";
  previous.style.visibility = "hidden";
  next.style.visibility = "visible";
  submit.style.visibility = "hidden";
});

submit.addEventListener("click", function (e) {
  e.preventDefault();
  passCheck(password);
});
