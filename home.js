const validPin = 1234;

//**********(reuseable code)*******************

//function to get value

function getInputValueNumber(id) {
  const inputField = document.getElementById(id);
  const inputFieldValue = inputField.value;
  const inputFieldValueNumber = parseInt(inputFieldValue);

  return inputFieldValueNumber;
}

function getInputValue(id) {
  const inputFieldValue = document.getElementById(id).value;

  return inputFieldValue;
}

//function to get innerText

function getInnerText(id) {
  const elementValueNumber = parseInt(document.getElementById(id).innerText);

  return elementValueNumber;
}

//function to set innerText

function setInnerText(value) {
  console.log(value);

  const availableBalanceElement = document.getElementById("available-balance");

  availableBalanceElement.innerText = value;
}

//toggling function

function handleToggle(id) {
  const forms = document.getElementsByClassName("form");

  for (const form of forms) {
    form.style.display = "none";
  }

  document.getElementById(id).style.display = "block";
}

// add money
document.getElementById("add-btn").addEventListener("click", function (e) {
  e.preventDefault();

  const selectBank = getInputValue("bank");
  const accountNumber = getInputValue("account-number");
  const addAmount = getInputValueNumber("add-amount");

  const addPin = getInputValueNumber("add-pin");

  const availableBalance = getInnerText("available-balance");

  console.log(availableBalance);

  if (accountNumber.length < 11) {
    alert("Please provide valid account number");
    return;
  }

  if (addPin !== validPin) {
    alert("Please provide valid pin number");
    return;
  }

  const totalAvailableBalance = availableBalance + addAmount;

  setInnerText(totalAvailableBalance);
});

// cash out

document.getElementById("withdraw-btn").addEventListener("click", function (e) {
  e.preventDefault();

  const agentNumber = getInputValue("agent-number");

  const amount = getInputValueNumber("amount");

  const pinNumber = getInputValueNumber("pin-number");

  const availableBalance = getInnerText("available-balance");

  if (agentNumber.length < 11) {
    alert("Please provide valid agent number");
    return;
  }

  if (pinNumber !== validPin) {
    alert("Please provide valid pin number");
    return;
  }
  const totalNewAvailableBalance = availableBalance - amount;

  setInnerText(totalNewAvailableBalance);
});

// toggling feature
document.getElementById("add-money").addEventListener("click", function () {
  handleToggle("add-money-parent");
});
document.getElementById("cash-out").addEventListener("click", function () {
  handleToggle("cash-out-parent");
});
document
  .getElementById("transfer-money")
  .addEventListener("click", function () {
    handleToggle("transfer-money-parent");
  });
