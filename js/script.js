const triangleCalcBtn = document.getElementById("triangleCalcBtn");
const rectangleCalcBtn = document.getElementById("rectangleCalcBtn");

triangleCalcBtn.addEventListener("click", () => {
  const base = getInputValueById("userBaseNum");
  const hight = getInputValueById("userHightNum");
  const positiveVali = positiveNumberValidation(base, hight);
  const iNaNVali = iNaNValidation(base, hight);
  if (positiveVali !== true) {
    alert("base and hight must be positive value!");
    return 0;
  } else if (iNaNVali !== true) {
    alert("input field required!");
    return 0;
  }
  const area = 0.5 * base * hight;
  document.getElementById("triangleDisplay").innerText = area;
});

rectangleCalcBtn.addEventListener("click", () => {
  const width = getInputValueById("userWidthNum");
  const length = getInputValueById("userLengthNum");
  const positiveVali = positiveNumberValidation(width, length);
  const iNaNVali = iNaNValidation(width, length);
  if (positiveVali !== true) {
    alert("width and length must be positive value!");
    return 0;
  } else if (iNaNVali !== true) {
    alert("input field required!");
    return 0;
  }
  const area = width * length;
  document.getElementById("rectangleDisplay").innerText = area;
});
