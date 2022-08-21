

document.getElementById('btn-deposit').onclick = function () {
    /* 
    1. get the element ty id
    2. get the value from the element
    3. convert the string to a number
     */
    const newDepositAmount = getInputFieldValueById('deposit-field');
    /* 
    1. get previous deposit total by id
     */
    const previousDepositTotal = getTextElementValueById('deposit-total');

    // calculate new deposit total
    const newDepositTotal = previousDepositTotal + newDepositAmount;

    // set deposit total value
    setTextElementValue('deposit-total', newDepositTotal);

    // get previous balance by using the function
    const previousBalnaceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = previousBalnaceTotal + newDepositAmount;
    setTextElementValue('balance-total', newBalanceTotal);
};