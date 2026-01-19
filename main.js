// add money functionalities
const addMoneyBtn = document.getElementById("addMoneyBtn");
addMoneyBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const selectMethod = document.getElementById("selectMethod");
  const accountNumber = document.getElementById("bankAccountNumber");
  const amount = document.getElementById("amount");
  const convertAmount = parseInt(amount.value);
  const mainBalance = document.getElementById("mainBalance");
  const pin = document.getElementById("pin");
  const addMoneyForm = document.getElementById("addMoneyForm");
  let convertedMainBalance = parseInt(mainBalance.innerText);

  if (
    selectMethod.value &&
    accountNumber.value === "01566074700" &&
    convertAmount &&
    pin.value === "4700"
  ) {
    mainBalance.innerText = convertedMainBalance + convertAmount;
    addMoneyForm.reset();
  } else {
    alert("please enter valid input");
  }
});

const cashOutBtn = document.getElementById("cashOutBtn");
cashOutBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const cashOutForm = document.getElementById("cashOutForm");
  const agentNumber = document.getElementById("agentNumber");
  const cashOutAmount = document.getElementById("cashOutAmount");
  const cashOutPin = document.getElementById("cashOutPin");
  const mainBalance = document.getElementById("mainBalance");
  const convertedMainBalance = parseInt(mainBalance.innerText);
  const convertedCashOutAmount = parseInt(cashOutAmount.value);

  if (
    agentNumber.value.length === 11 &&
    convertedCashOutAmount &&
    cashOutPin.value === "4700"
  ) {
    mainBalance.innerText = convertedMainBalance - convertedCashOutAmount;
    cashOutForm.reset();
  } else {
    alert("please enter valid input");
  }
});
