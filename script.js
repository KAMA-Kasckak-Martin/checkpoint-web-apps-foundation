const ps1 = document.querySelector("#ps1");
const ps2 = document.querySelector("#ps2");
const psw = document.querySelector("form");
const btn = document.querySelector("button");

btn.addEventListener("click", togglepw);
psw.addEventListener("input", checkpw);

function togglepw() {
  if (ps1.type === "password") {
    btn.innerText = "Hide Password";
    ps1.type = "text";
    ps2.type = "text";
  } else {
    btn.innerText = "Show Password";
    ps1.type = "password";
    ps2.type = "password";
  }
}

function checkIfPasswordsMatch() {
  const check = document.querySelector("#check-equal");
  if (ps1.value === ps2.value && ps1.value !== "") {
    check.innerText = "✅";
    return true;
  } else {
    return false;
  }
  console.log(checkIfPasswordsMatch);
}
function checkpw() {
  if (checkIfPasswordsMatch()) {
    checkPasswordLowerCase();
    checkPasswordLength();
    checkPasswordUpperCase();
    checkPasswordNumbers();
  } else {
    const allChecks = document.querySelectorAll(".check");

    for (let check of allChecks) {
      //check.innerText = "❌";
    }
  }
}

function checkPasswordLowerCase() {
  const lowerCaseLetters = /[a-z]/;

  if (ps1.value.match(lowerCaseLetters)) {
    const check = document.querySelector("#check-lower-case");
    check.innerText = "✅";
  }
}

function checkPasswordUpperCase() {
  const UpperCaseLetters = /[A-Z]/;

  if (ps1.value.match(UpperCaseLetters)) {
    const check = document.querySelector("#check-upper-case");
    check.innerText = "✅";
  }
}

function checkPasswordNumbers() {
  const Numbers = /[0-9]/;

  if (ps1.value.match(Numbers)) {
    const check = document.querySelector("#check-number-case");
    check.innerText = "✅";
  }
}

function checkPasswordLength() {
  if (ps1.value.length > 9) {
    const check = document.querySelector("#check-length");
    check.innerText = "✅";
  }
}
