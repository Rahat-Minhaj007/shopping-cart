// **********************************Phone Amount Plus***************************************

const plusBtn = document.getElementById('plusPhone');
plusBtn.addEventListener('click', function () {

    // .............................increase phone amount.............................

    const phoneAmount = document.getElementById("phoneAmount").value;
    const phoneNumber = parseInt(phoneAmount);
    const phoneAmountPlus = phoneNumber + 1;
    document.getElementById("phoneAmount").value = phoneAmountPlus;

    //......................... phone amount & per phone price multiply.......................

    const phonePriceStable = 1219;
    const phoneTotalPrice = phoneAmountPlus * phonePriceStable;
    document.getElementById("phonePrice").innerText = phoneTotalPrice;

    //............................... subtotal=subtotal +per phone price...............................

    const subTotal = document.getElementById('subTotal').innerText;
    const subTotalNum = parseInt(subTotal);
    const subTotalNumFinal = subTotalNum + 1219;
    document.getElementById('subTotal').innerText = subTotalNumFinal;

    //............................... subtotal price assign in total price.................................

    const total = document.getElementById('total').innerText;
    const totalNum = parseInt(total);
    document.getElementById('total').innerText = subTotalNumFinal;

})

//  **********************************************Phone Amount Minus*******************************************

const minusBtn = document.getElementById("minusPhone");
minusBtn.addEventListener('click', function () {

    // .............................decrease phone amount.............................

    const phoneAmount = document.getElementById("phoneAmount").value;
    const phoneNumber = parseInt(phoneAmount);
    const phoneAmountPlus = phoneNumber - 1;
    document.getElementById("phoneAmount").value = phoneAmountPlus;

    //......................... sub phone price after decrease the phone amount .......................

    const phonePrice = document.getElementById("phonePrice").innerText;
    const phoneAmountPrice = parseFloat(phonePrice);
    const phonePriceMinus = phoneAmountPrice - 1219;
    document.getElementById("phonePrice").innerText = phonePriceMinus;

    //...............................subtotal after decrease phone amount...............................

    const subTotal = document.getElementById('subTotal').innerText;
    const subTotalNum = parseInt(subTotal);
    const subTotalNumFinal = subTotalNum - 1219;
    document.getElementById('subTotal').innerText = subTotalNumFinal;

    //...............................total after decrease phone amount...............................

    const total = document.getElementById('total').innerText;
    const totalNum = parseInt(total);
    document.getElementById('total').innerText = subTotalNumFinal;

})

//*******************************************case amount Plus*********************************************

const cPlusBtn = document.getElementById(
    "casePlus");
cPlusBtn.addEventListener('click', function () {

    // .............................increase case amount.............................

    const caseAmount = document.getElementById("caseAmount").value;
    const caseNumber = parseInt(caseAmount);
    const caseAmountPlus = caseNumber + 1;
    document.getElementById("caseAmount").value = caseAmountPlus;

    //......................... case amount & per case price multiply.......................

    const casePriceStable = 59;
    const caseTotalPrice = caseAmountPlus * casePriceStable;
    document.getElementById("casePrice").innerText = caseTotalPrice;

    //............................... subtotal=subtotal +per case price...............................

    const subTotal = document.getElementById('subTotal').innerText;
    const subTotalNum = parseInt(subTotal);
    const subTotalNumFinal = subTotalNum + 59;
    document.getElementById('subTotal').innerText = subTotalNumFinal;

    //............................... subtotal price assign in total price.................................

    const total = document.getElementById('total').innerText;
    const totalNum = parseInt(total);
    document.getElementById('total').innerText = subTotalNumFinal;

})

//***********************************************case amount Minus********************************************

const cMinusBtn = document.getElementById(
    "caseMinus");
cMinusBtn.addEventListener('click', function () {

    // .............................decrease phone amount.............................

    const caseAmount = document.getElementById("caseAmount").value;
    const caseNumber = parseInt(caseAmount);
    const caseAmountPlus = caseNumber - 1;
    document.getElementById("caseAmount").value = caseAmountPlus;

    //......................... sub case price after decrease the case amount .......................

    const casePrice = document.getElementById("casePrice").innerText;
    const caseAmountPrice = parseFloat(casePrice);
    const casePriceMinus = caseAmountPrice - 59;
    document.getElementById("casePrice").innerText = casePriceMinus;

    //...............................subtotal after decrease case amount...............................

    const subTotal = document.getElementById('subTotal').innerText;
    const subTotalNum = parseInt(subTotal);
    const subTotalNumFinal = subTotalNum - 59;
    document.getElementById('subTotal').innerText = subTotalNumFinal;

    //............................... subtotal price assign in total price.................................

    const total = document.getElementById('total').innerText;
    const totalNum = parseInt(total);
    document.getElementById('total').innerText = subTotalNumFinal;
})

