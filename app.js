const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#given-amount");
const checkButton = document.querySelector("#check");
const errorMessage = document.querySelector("#error");
const numberColumn = document.querySelector("#number").children;
const notesColumn = document.querySelector("#denomination").children;
const nextButton = document.querySelector("#next");
const tableDisplay = document.querySelector("#display-table");
const cashSection = document.querySelector("#cash-section");

function clearTable() {
  for (let i = 1; i < numberColumn.length; i++) {
    numberColumn[i].innerText = 0;
  }
}
checkButton.addEventListener("click", () => {
  clearTable();
  if (cashGiven.value < 0 || billAmount.value < 0) {
    sendError("Invalid Number!");
    tableDisplay.style.display = "none";
  } else if (billAmount.valueAsNumber <= cashGiven.valueAsNumber) {
    // cashSection.style.display = "block";
    errorMessage.style.display = "none";
    tableDisplay.style.display = "block";
    getChange(cashGiven.valueAsNumber, billAmount.valueAsNumber);
  } else {
    sendError("Do you want to wash plates?");
    tableDisplay.style.display = "none";
  }
});
nextButton.addEventListener("click", () => {
  if (billAmount.value > 0) {
    nextButton.style.display = "none";
    cashSection.style.display = "flex";
    checkButton.style.display = "block";
  } else {
    sendError("Invalid Number");
  }
});

function sendError(msg) {
  errorMessage.style.display = "block";
  errorMessage.innerText = msg;
}
function getChange(cash, amount) {
  const denominations = [2000, 500, 100, 20, 10, 5, 1];
  let difference = 0;
  difference = cash - amount;
  let num = 0;

  for (let ele = 0; ele < denominations.length; ele++) {
    num = Math.floor(difference / denominations[ele]);
    difference = difference % denominations[ele];
    assignValue(num, denominations[ele]);
    if (num === 0) {
      continue;
    }
    if (difference === 0) {
      break;
    }
  }
}

function assignValue(val, denEle) {
  for (let j = 1; j < notesColumn.length; j++) {
    let item = Number(notesColumn[j].innerText);
    if (denEle === item) {
      numberColumn[j].innerText = val;
    }
  }
}
