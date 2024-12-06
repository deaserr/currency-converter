/**
 * Issues in code: I was unable to create loop to populate 
 * common conversion charts
 */

//Currency values
const currencies = ["USD", "CAD", "EUR", "AUD", "JPY"];
const usdRates = [1.3763, 0.92125, 1.4945, 149.47];
const cadRates = [0.72659, 0.66938, 1.0858, 108.6];
const eurRates = [1.0855, 1.4940, 1.622, 162.26];
const audRates = [0.66926, 0.92109, 0.61653, 100.04];
const jpyRates = [0.0066899, 0.0092075, 0.0061630, 0.0099973];

//Access DOM
let fromAmount = document.getElementById("from-amount");
let toAmount = document.getElementById("to-amount");
let conversion = document.getElementById("conversion");

//gets values from HTML for conversion
function convert()
{
    let cur1 = document.getElementById("first-currency").value;
    let cur2 = document.getElementById("second-currency").value;
    let amount = document.getElementById("amount").value;
    runConversion(cur1, cur2, amount);
}//end of convert

//swaps the from and to of the current conversion
function swap()
{
    let cur1 = document.getElementById("first-currency").value;
    let cur2 = document.getElementById("second-currency").value;

    let swap = cur2;

    document.getElementById("second-currency").value = cur1;
    document.getElementById("first-currency").value = cur2;

    convert();
}//end of swap

//Runs conversion and edits HTML with results
function runConversion(cur1, cur2, amount)
{
    let newAmount;

    switch(cur1)
    {
        case "USD":
            newAmount = usdConversion(cur2, amount);
            break;
        case "CAD":
            newAmount = cadConversion(cur2, amount);
            break;
        case "EUR":
            newAmount = eurConversion(cur2, amount);
            break;
        case "AUD":
            newAmount = audConversion(cur2, amount);
            break;
        case "JPY":
            newAmount = jpyConversion(cur2, amount);
            break;
    }

    conversionChart(cur1, cur2);

    fromAmount.textContent = amount + " " + cur1 + " =";
    toAmount.textContent = newAmount.toFixed(5) + " " + cur2;
}//end of runConversion

function usdConversion(newCur, amount)
{
    let newAmount;
    switch(newCur)
    {
        case "CAD":
            newAmount = amount * usdRates[0];
            break;
        case "EUR":
            newAmount = amount * usdRates[1];
            break;
        case "AUD":
            newAmount = amount * usdRates[2];
            break;
        case "JPY":
            newAmount = amount * usdRates[3];
            break;
    }
    return newAmount;
}//end of usdConversion

function cadConversion(newCur, amount)
{
    let newAmount;
    switch(newCur)
    {
        case "USD":
            newAmount = amount * cadRates[0];
            break;
        case "EUR":
            newAmount = amount * cadRates[1];
            break;
        case "AUD":
            newAmount = amount * cadRates[2];
            break;
        case "JPY":
            newAmount = amount * cadRates[3];
            break;
    }
    return newAmount;
}//end of cadConversion

function eurConversion(newCur, amount)
{
    let newAmount;
    switch(newCur)
    {
        case "USD":
            newAmount = amount * eurRates[0];
            break;
        case "CAD":
            newAmount = amount * eurRates[1];
            break;
        case "AUD":
            newAmount = amount * eurRates[2];
            break;
        case "JPY":
            newAmount = amount * eurRates[3];
            break;
    }
    return newAmount;
}//end of eurConversion

function audConversion(newCur, amount)
{
    let newAmount;
    switch(newCur)
    {
        case "USD":
            newAmount = amount * audRates[0];
            break;
        case "CAD":
            newAmount = amount * audRates[1];
            break;
        case "EUR":
            newAmount = amount * audRates[2];
            break;
        case "JPY":
            newAmount = amount * audRates[3];
            break;
    }
    return newAmount;
}//end of audConversion

function jpyConversion(newCur, amount)
{
    let newAmount;
    switch(newCur)
    {
        case "USD":
            newAmount = amount * jpyRates[0];
            break;
        case "CAD":
            newAmount = amount * jpyRates[1];
            break;
        case "EUR":
            newAmount = amount * jpyRates[2];
            break;
        case "AUD":
            newAmount = amount * jpyRates[3];
            break;
    }
    return newAmount;
}//end of jpyConversion

//gets values for common conversions
function conversionChart(cur1, cur2)
{
    let newAmount;
    const commonNum = [1, 5, 10, 25, 50, 100, 500, 1000, 5000, 10000];
    let conversion1 = [];
    let conversion2 = [];

    //conversions of cur1 to cur2
    for(let i = 0; i < commonNum.length; i++)
    {
        switch(cur1)
        {
            case "USD":
                newAmount = usdConversion(cur2, commonNum[i]);
                break;
            case "CAD":
                newAmount = cadConversion(cur2, commonNum[i]);
                break;
            case "EUR":
                newAmount = eurConversion(cur2, commonNum[i]);
                break;
            case "AUD":
                newAmount = audConversion(cur2, commonNum[i]);
                break;
            case "JPY":
                newAmount = jpyConversion(cur2, commonNum[i]);
                break;
        }

        conversion1.push(newAmount);
    }

    //conversions of cur2 to cur1
    for(let i = 0; i < commonNum.length; i++)
    {
        switch(cur2)
        {
            case "USD":
                newAmount = usdConversion(cur1, commonNum[i]);
                break;
            case "CAD":
                newAmount = cadConversion(cur1, commonNum[i]);
                break;
            case "EUR":
                newAmount = eurConversion(cur1, commonNum[i]);
                break;
            case "AUD":
                newAmount = audConversion(cur1, commonNum[i]);
                break;
            case "JPY":
                newAmount = jpyConversion(cur1, commonNum[i]);
                break;
        }

        conversion2.push(newAmount);
    }

    //missing code to add conversion values to HTML for display

    console.log(commonNum);
    console.log(conversion1);
    console.log(conversion2);
}//end of conversionChart