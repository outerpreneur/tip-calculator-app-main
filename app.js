const formTag = document.querySelector("form")

// inputs

const billInputTag = document.querySelector("#bill")
const numberOfPeople = document.querySelector("#people")
const inputTag = document.querySelectorAll("input")

// tip buttons

const buttons = document.querySelectorAll(".tip-selection button")
const customTip = document.querySelector(".custom-tip")

// outputs

const tipAmount = document.querySelector("#tip-amount")
const billTotal = document.querySelector("#bill-total")


// reset

const resetBtn = document.querySelector(".reset");

// // functions

function customTipInput() {
    const billTotalValue = billInputTag.value
    const formatBillTotalValue = parseFloat(billTotalValue).toLocaleString('en-US')
    const numberOfPeopleValue = numberOfPeople.value
    let tipValue = customTip.value
    tipValueFormat = parseFloat(tipValue)
    tipSplitedNumberPeople = tipValueFormat / numberOfPeopleValue
    tipAmount.innerHTML = "$" + tipSplitedNumberPeople.toFixed(2)
    const billToBeSplitted = formatBillTotalValue / numberOfPeopleValue
    const billToBesplittedWithTip = parseFloat(billToBeSplitted) + parseFloat(tipSplitedNumberPeople)
    billTotal.innerHTML = "$" + billToBesplittedWithTip.toFixed(2)
};



// // triggers


buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        e.preventDefault()
        const billTotalValue = billInputTag.value
        const formatBillTotalValue = parseFloat(billTotalValue).toLocaleString('en-US')
        const numberOfPeopleValue = numberOfPeople.value
        let tipValue = e.target.innerText
        tipValue = tipValue.substr(0, tipValue.length -1)
        tipValueFormat = parseFloat(tipValue)
        SelectedTipValueForBill = formatBillTotalValue * (tipValueFormat / 100)
        BillPlusTotalTip= parseFloat(billTotalValue) + parseFloat(SelectedTipValueForBill)
        BillPlusTotalTipPP = BillPlusTotalTip / numberOfPeopleValue
        billTotal.innerHTML = "$" + parseFloat(BillPlusTotalTipPP).toFixed(2)
        TotalTipPP = SelectedTipValueForBill / numberOfPeopleValue
        tipAmount.innerHTML = "$" + parseFloat(TotalTipPP).toFixed(2)
    })
})

customTip.addEventListener("keyup", () => {
    console.log("click on tip")
    customTipInput()
})


numberOfPeople.addEventListener('keyup', () => {
    const numberOfPeopleValue = numberOfPeople.value
    const formatNumberPeople = parseFloat(numberOfPeopleValue)
    if (formatNumberPeople === 0)  {
        console.log("cant be 0")
        numberOfPeople.parentElement.classList.add("error-message")
        numberOfPeople.classList.add("error")
    } else if (!formatNumberPeople) {
        numberOfPeople.parentElement.classList.add("error-message")
    } else {
        numberOfPeople.parentElement.classList.remove("error-message")
    }
})


resetBtn.addEventListener('click', () => {
    tipAmount.innerHTML = "$0.00"
    billTotal.innerHTML = '$0.00'
    billInputTag.value = 0
    numberOfPeople.value = 0
})



// function calculateTip(billInputTag, tipPercentage, numberOfPeople) {
//     let tipAmount = (billInputTag * (tipPercentage / 100)) / numberOfPeople;
//     // let tip = Math.floor(tipAmount * 100) / 100;
//     // tip = tip.toFixed(2);
// }
