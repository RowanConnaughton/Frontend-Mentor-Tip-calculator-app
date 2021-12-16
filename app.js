const billInput = document.querySelector("#bill");
const peopleInput = document.querySelector("#num-people");
const buttonTip = document.querySelectorAll(".form__tip-btn");
const customInput = document.querySelector("#custom-tip");
const tipAmount = document.querySelector(".tip-amount");
const totalAmount = document.querySelector(".total-person");
const btnReset = document.querySelector(".reset-btn");
const errBill = document.querySelector(".error-bill");
const errPeople = document.querySelector(".error-people");

let bill = 0;
let customTip = 0;
let numPeople = 0;

billInput.addEventListener("input", (e) => {
  bill = Number(e.target.value);

  if (bill !== 0) {
    errBill.style.display = "none";
  } else {
    errBill.style.display = "block";
  }

  calulateBill();
});

peopleInput.addEventListener("input", (e) => {
  numPeople = Number(e.target.value);

  if (numPeople !== 0) {
    errPeople.style.display = "none";
  } else {
    errPeople.style.display = "block";
  }

  calulateBill();
});

customInput.addEventListener("input", (e) => {
  customTip = Number(e.target.value);
  calulateBill();
});

for (let i = 0; i < buttonTip.length; i++) {
  buttonTip[i].addEventListener("click", (e) => {
    customTip = Number(e.target.value);
    calulateBill();
  });
}

function calulateBill() {
  if (bill <= 0 || customTip <= 0 || numPeople <= 0) {
    tipAmount.innerHTML = "0.00";
    totalAmount.innerHTML = "0.00";
  } else {
    let calulatedTip = (bill * customTip) / (100 * numPeople);
    tipAmount.innerHTML = calulatedTip.toFixed(2);

    let calulatedTotal =
      bill / numPeople + (bill * customTip) / (100 * numPeople);
    totalAmount.innerHTML = calulatedTotal.toFixed(2);

    btnReset.disabled = false;
    btnReset.classList.add("activeBtn");
  }
}

btnReset.addEventListener("click", (e) => {
  e.preventDefault();

  bill = 0;
  customTip = 0;
  numPeople = 0;
  tipButton = 0;

  billInput.value = "";
  customInput.value = "";
  peopleInput.value = "";
  tipAmount.innerHTML = "0.00";
  totalAmount.innerHTML = "0.00";

  btnReset.disabled = true;
  btnReset.classList.remove("activeBtn");
});
