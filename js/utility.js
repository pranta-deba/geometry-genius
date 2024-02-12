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
