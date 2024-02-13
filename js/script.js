const triangleCalcBtn = document.getElementById("triangleCalcBtn");
const rectangleCalcBtn = document.getElementById("rectangleCalcBtn");
const parallelogramBtn = document.getElementById("parallelogramBtn");
const rhombusBtn = document.getElementById("rhombusBtn");
// triangle
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
// rectangle
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
// parallelogram
parallelogramBtn.addEventListener("click", () => {
  const base = getInputValueById("userBaseNum2");
  const hight = getInputValueById("userHeightNum2");
  const positiveVali = positiveNumberValidation(base, hight);
  const iNaNVali = iNaNValidation(base, hight);
  if (positiveVali !== true) {
    alert("base and hight must be positive value!");
    return 0;
  } else if (iNaNVali !== true) {
    alert("input field required!");
    return 0;
  }
  const area = base * hight;
  document.getElementById("parallelogramDisplay").innerText = area;
});
// rhombusBtn
rhombusBtn.addEventListener("click", () => {
  const d1 = getInputValueById("userD1");
  const d2 = getInputValueById("userD2");
  const positiveVali = positiveNumberValidation(d1, d2);
  const iNaNVali = iNaNValidation(d1, d1);
  if (positiveVali !== true) {
    alert("d1 and d2 must be positive value!");
    return 0;
  } else if (iNaNVali !== true) {
    alert("input field required!");
    return 0;
  }
  const area = 0.5 * d1 * d2;
  document.getElementById("rhombusDisplay").innerText = area;
});
