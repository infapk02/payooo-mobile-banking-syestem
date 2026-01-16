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
