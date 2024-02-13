function getInputValueById(idName) {
  const inputField = document.getElementById(idName);
  const strValue = inputField.value;
  const numValue = parseFloat(strValue);
  return numValue;
}
function positiveNumberValidation(a, b) {
  if (a < 0 || b < 0) {
    return false;
  } else {
    return true;
  }
}
function iNaNValidation(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return false;
  } else {
    return true;
  }
}
function areaCalculator(name,result) {
  const areaCalculatorDisplay = document.getElementById('areaCalculatorDisplay');
  areaCalculatorDisplay.innerHTML += `<li><span>${name}</span> -  <span class="font-semibold text-red-700">${result}</span> cm<sup>2</sup></li>`;
}
