// login button functionality

document.getElementById("buttonLogin").addEventListener("click", function (e) {
  e.preventDefault();

  const mobileNumber = 12345678910;
  const pinNumber = 1234;

  const mobileNumberValue = document.getElementById("mobile-number").value;

  const mobileNumberValueConverted = parseInt(mobileNumberValue);

  const pinNumberValue = document.getElementById("pin-number").value;

  const pinNumberValueConverted = parseInt(pinNumberValue);

  console.log(mobileNumberValueConverted, pinNumberValueConverted);

  if (
    mobileNumberValueConverted === mobileNumber &&
    pinNumberValueConverted === pinNumber
  ) {
    window.location.href = "./home.html";
  } else {
    alert("invalid credentials");
  }
});
