// login functionalities

const loginBtn = document.getElementById("loginBtn");
loginBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const accountNumber = getInputValuesById("accountNumber");
  const pinNumber = getInputValuesById("pin");
  if (accountNumber.length === 11 && accountNumber === "01566074700") {
    if (pinNumber.length === 4 && pinNumber === "4700") {
      window.location.href = "main.html";
    } else {
      alert("Invalid Password");
    }
  } else {
    alert("Invalid Account Number");
  }
});
