const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#given-amount");
const checkButton = document.querySelector("#check");
const errorMessage = document.querySelector("#error");
const numberColumn = document.querySelector("#number").children;
const notesColumn = document.querySelector("#denomination").children;

errorMessage.style.display = "none";

checkButton.addEventListener("click", () => {
    if (billAmount.valueAsNumber <= cashGiven.valueAsNumber) {
        console.log(billAmount.valueAsNumber, cashGiven.valueAsNumber);
        getChange(cashGiven.valueAsNumber, billAmount.valueAsNumber)
    } else {
        sendError("Do you want to wash plates?")
    }
})

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
        let item = parseInt(notesColumn[j].innerText)
        console.log(typeof (notesColumn[j].innerText), typeof (denEle))
        if (denEle === item) {
            numberColumn[j].innerText = val;

        }
    }

}