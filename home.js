const validPin = 1234;
// add money
document.getElementById("add-btn").addEventListener("click", function (e) {
  e.preventDefault();

  const selectBank = document.getElementById("bank").value;
  const accountNumber = document.getElementById("account-number").value;
  const addAmount = parseInt(document.getElementById("add-amount").value);

  const addPin = parseInt(document.getElementById("add-pin").value);

  const availableBalance = parseInt(
    document.getElementById("available-balance").innerText
  );

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

  document.getElementById("available-balance").innerText =
    totalAvailableBalance;
});

// cash out

document.getElementById("withdraw-btn").addEventListener("click", function (e) {
  e.preventDefault();

  const agentNumber = document.getElementById("agent-number").value;

  const amount = parseInt(document.getElementById("amount").value);

  const pinNumber = parseInt(document.getElementById("pin-number").value);

  const availableBalance = parseInt(
    document.getElementById("available-balance").innerText
  );

  if (agentNumber.length < 11) {
    alert("Please provide valid agent number");
    return;
  }

  if (pinNumber !== validPin) {
    alert("Please provide valid pin number");
    return;
  }
  const totalNewAvailableBalance = availableBalance - amount;

  document.getElementById("available-balance").innerText =
    totalNewAvailableBalance;
});

// toggling feature
document.getElementById("add-money").addEventListener("click", function () {
  document.getElementById("cash-out-parent").style.display = "none";
  document.getElementById("add-money-parent").style.display = "block";
});
document.getElementById("cash-out").addEventListener("click", function () {
  document.getElementById("add-money-parent").style.display = "none";
  document.getElementById("cash-out-parent").style.display = "block";
});
