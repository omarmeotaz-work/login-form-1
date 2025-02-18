const userName = document.getElementById("name");
const password = document.getElementById("password");
const submit = document.getElementById("submit");
const next = document.getElementById("next");
const previous = document.getElementById("previous");
const congrats = document.getElementById("congrats");
const n = userName.parentElement;
const p = password.parentElement;

function nameCheck(input) {
  if (input.value.length < 3) {
    n.className = "nameform-error";
  } else {
    n.className = "nameform-success";
    p.style.visibility = "visible";
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
  nameCheck(userName);
});

previous.addEventListener("click", function (e) {
  e.preventDefault();
  n.className = "nameform";
  p.style.visibility = "hidden";
  previous.style.visibility = "hidden";
  next.style.visibility = "visible";
  submit.style.visibility = "hidden";
});

submit.addEventListener("click", function (e) {
  e.preventDefault();
  passCheck(password);
});
