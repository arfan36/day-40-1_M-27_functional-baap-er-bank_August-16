function getInputFieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
}

function getElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText;
    const value = parseFloat(elementValueString);
    return value;
}

document.getElementById('btn-deposit').onclick = function () {
    /* 
    1. get the element ty id
    2. get the value from the element
    3. convert the string to a number
     */
    const newDepositAmount = getInputFieldValueById('deposit-field');
};