const transactions = [];

// add money functionalities
const addMoneyBtn = document.getElementById("addMoneyBtn");
addMoneyBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const now = new Date();

  let hour = now.getHours();
  const minute = String(now.getMinutes()).padStart(2, "0");
  const second = String(now.getSeconds()).padStart(2, "0");
  const ampm = hour >= 12 ? "pm" : "am";

  hour = hour % 12 || 12;

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
    const addTransaction = {
      transactionTitle: selectMethod.value,
      hour: hour,
      min: minute,
      second: second,
      ampm: ampm,
    };

    transactions.push(addTransaction);
    renderTransactions();
    addMoneyForm.reset();
  } else {
    alert("please enter valid input");
  }
});

// cash out functionalities
const cashOutBtn = document.getElementById("cashOutBtn");
cashOutBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const now = new Date();

  let hour = now.getHours();
  const minute = String(now.getMinutes()).padStart(2, "0");
  const second = String(now.getSeconds()).padStart(2, "0");
  const ampm = hour >= 12 ? "pm" : "am";

  hour = hour % 12 || 12;

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

    const cashOutTransaction = {
      transactionTitle: `cash out to ${agentNumber.value} `,
      hour: hour,
      min: minute,
      second: second,
      ampm: ampm,
    };

    transactions.push(cashOutTransaction);
    renderTransactions();
    cashOutForm.reset();
  } else {
    alert("please enter valid input");
  }
});

// transfer money functionalities

const transferBtn = document.getElementById("transferBtn");
transferBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const now = new Date();

  let hour = now.getHours();
  const minute = String(now.getMinutes()).padStart(2, "0");
  const second = String(now.getSeconds()).padStart(2, "0");
  const ampm = hour >= 12 ? "pm" : "am";

  hour = hour % 12 || 12;

  const transferMoneyForm = document.getElementById("transferMoneyForm");
  const userAccountNumber = document.getElementById("userAccountNumber");
  const transferAmount = document.getElementById("transferAmount");
  const transferPin = document.getElementById("transferPin");
  const mainBalance = document.getElementById("mainBalance");
  const convertedMainBalance = parseInt(mainBalance.innerText);
  const convertedTransferAmount = parseInt(transferAmount.value);

  if (
    userAccountNumber.value.length === 11 &&
    transferAmount.value &&
    transferPin.value === "4700"
  ) {
    mainBalance.innerText = convertedMainBalance - convertedTransferAmount;

    const transferMoneyTransaction = {
      transactionTitle: `Transfer money to ${userAccountNumber.value} `,
      hour: hour,
      min: minute,
      second: second,
      ampm: ampm,
    };

    transactions.push(transferMoneyTransaction);
    renderTransactions();
    transferMoneyForm.reset();
  } else {
    alert("please enter valid input");
  }
});

// pay bill functionalities
const payBillBtn = document.getElementById("payBillBtn");
payBillBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const now = new Date();

  let hour = now.getHours();
  const minute = String(now.getMinutes()).padStart(2, "0");
  const second = String(now.getSeconds()).padStart(2, "0");
  const ampm = hour >= 12 ? "pm" : "am";

  hour = hour % 12 || 12;

  const payBillForm = document.getElementById("payBillForm");
  const selectPayment = document.getElementById("selectPayment");
  const billerAccountNumber = document.getElementById("billerAccountNumber");
  const billingAmount = document.getElementById("billingAmount");
  const billingPin = document.getElementById("billingPin");
  const mainBalance = document.getElementById("mainBalance");
  const convertedMainBalance = parseInt(mainBalance.innerText);
  const convertedBillingAmount = parseInt(billingAmount.value);

  if (
    selectPayment.value &&
    billerAccountNumber.value.length === 11 &&
    billingAmount.value &&
    billingPin.value === "4700"
  ) {
    mainBalance.innerText = convertedMainBalance - convertedBillingAmount;

    const billPaymentTransaction = {
      transactionTitle: selectPayment.value,
      hour: hour,
      min: minute,
      second: second,
      ampm: ampm,
    };

    transactions.push(billPaymentTransaction);
    renderTransactions();
    payBillForm.reset();
  } else {
    alert("please enter valid input");
  }
});

// menu boxes
const menuBoxes = document.getElementsByClassName("box");

// sections
const sections = [
  document.getElementById("addMoneySection"),
  document.getElementById("cashOutSection"),
  document.getElementById("transferMoneySection"),
  document.getElementById("getBonusSection"),
  document.getElementById("payBillSection"),
  document.getElementById("transactionHistorySection"),
];

document.getElementById("addMoneyBox").classList.add("active");
document.getElementById("addMoneySection").classList.remove("hidden");

for (let i = 0; i < menuBoxes.length; i++) {
  menuBoxes[i].addEventListener("click", function () {
    for (let j = 0; j < menuBoxes.length; j++) {
      menuBoxes[j].classList.remove("active");
    }

    for (let k = 0; k < sections.length; k++) {
      sections[k].classList.add("hidden");
    }
    this.classList.add("active");

    let boxId = this.id;
    let sectionId = "";

    if (boxId === "addMoneyBox") {
      sectionId = "addMoneySection";
    } else if (boxId === "cashOutBox") {
      sectionId = "cashOutSection";
    } else if (boxId === "transferMoneyBox") {
      sectionId = "transferMoneySection";
    } else if (boxId === "getBonusBox") {
      sectionId = "getBonusSection";
    } else if (boxId === "payBillBox") {
      sectionId = "payBillSection";
    } else if (boxId === "transactionHistoryBox") {
      sectionId = "transactionHistorySection";
    }

    document.getElementById(sectionId).classList.remove("hidden");
  });
}

// transactions loop
function renderTransactions() {
  let transactionsContainer = document.getElementById("transactionsContainer");

  transactionsContainer.innerHTML = "";

  if (transactions.length === 0) {
    transactionsContainer.innerHTML = `
      <div class="flex justify-center items-center bg-white shadow-md py-10 rounded-md">
        <h2 class="text-gray-400 text-lg capitalize font-medium">
          no transactions yet
        </h2>
      </div>
    `;
    return;
  }

  for (let i = 0; i < transactions.length; i++) {
    let transaction = transactions[i];

    transactionsContainer.innerHTML += `
      <div class="transactionCard rounded-md flex items-center justify-between bg-white shadow-md p-4">

        <div class="flex items-center space-x-3">

          <div class="w-11 h-11 bg-gray-200 flex justify-center items-center rounded-full">
            <img src="./assets/purse1.png" class="object-contain" />
          </div>

          <div>
            <h3 class="font-medium capitalize">
              ${transaction.transactionTitle}
            </h3>

            <p class="text-sm capitalize text-gray-500">
              at ${transaction.hour}:${transaction.min}:${transaction.second} ${transaction.ampm}
            </p>
          </div>

        </div>

        <div class="space-y-1">
          <div class="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
          <div class="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
          <div class="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
        </div>

      </div>
    `;
  }
}

renderTransactions();
