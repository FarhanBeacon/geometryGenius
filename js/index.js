// Function for getting input from user and calculate the result
function calculateResult(constant, shapeInput1, shapeInput2){
  const input1 = parseFloat(
    document.getElementById(shapeInput1).value
  );
  document.getElementById(shapeInput1).value = "";
  const input2 = parseFloat(
    document.getElementById(shapeInput2).value
  );
  document.getElementById(shapeInput2).value = "";

  return constant * input1 * input2;
}

// Function for check the result is valid or not. And then display this in Area Calculation Area
function checkValidResult(result, shapeArea, shapeAreaValue){
  if(isNaN(result)){
    alert("values are not valid!!!!!!");
    return;
  }else {
    document.getElementById(shapeAreaValue).innerText = result;
    document.getElementById(shapeArea).classList.remove('hidden');
  }
}

// Function for convert cm to m
function convertToMetre(result, shapeConvertBtn, shapeConvertArea, shapeConvertValue){
  document.getElementById(shapeConvertBtn).addEventListener('click', function(){
    const metreValue = result / 100;
    document.getElementById(shapeConvertValue).innerText = metreValue;
    document.getElementById(shapeConvertArea).classList.remove('hidden');
    document.getElementById(shapeConvertBtn).classList.add('hidden');
  });
}

// Reset ConvertBtn
function resetConvertBtn(shapeConvertArea, shapeConvertBtn){
  document.getElementById(shapeConvertArea).classList.add('hidden');
  document.getElementById(shapeConvertBtn).classList.remove('hidden');
}


// Blog Button
document.getElementById('blog-btn').addEventListener('click', function(){
  window.location.href = 'blog.html';
})

// Triangle Section
document
  .getElementById("calculate-triangle")
  .addEventListener("click", function () {
    // Formula for Triangle is (0.5 x b x h)
    const result = calculateResult(0.5, 'triangle-input-1', 'triangle-input-2');
    checkValidResult(result, 'triangleArea', 'triangleAreaValue');
    resetConvertBtn('triangleConvertArea', 'triangleConvertBtn');
    convertToMetre(result, 'triangleConvertBtn', 'triangleConvertArea', 'triangleConvertValue');
  });

// Rectangle Section
document
  .getElementById("calculate-rectangle")
  .addEventListener("click", function () {
    // Formula for Rectangle is (1 x w x l)
    const result = calculateResult(1, 'rectangle-input-1', 'rectangle-input-2');
    checkValidResult(result, 'rectangleArea', 'rectangleAreaValue');
    resetConvertBtn('rectangleConvertArea', 'rectangleConvertBtn');
    convertToMetre(result, 'rectangleConvertBtn', 'rectangleConvertArea', 'rectangleConvertValue');   
  });

// Parallelogram Section
document
  .getElementById("calculate-parallelogram")
  .addEventListener("click", function () {
    // Formula for Parallelogram is (1 x b x h)
    const result = calculateResult(1, 'parallelogram-input-1', 'parallelogram-input-2');
    checkValidResult(result, 'parallelogramArea', 'parallelogramAreaValue');
    resetConvertBtn('parallelogramConvertArea', 'parallelogramConvertBtn');
    convertToMetre(result, 'parallelogramConvertBtn', 'parallelogramConvertArea', 'parallelogramConvertValue'); 
  });
  
// Rhombus Section
document
  .getElementById("calculate-rhombus")
  .addEventListener("click", function () {
    // Formula for Rhombus is (0.5 x d1 x d2)
    const result = calculateResult(0.5, 'rhombus-input-1', 'rhombus-input-2');
    checkValidResult(result, 'rhombusArea', 'rhombusAreaValue');
    resetConvertBtn('rhombusConvertArea', 'rhombusConvertBtn');
    convertToMetre(result, 'rhombusConvertBtn', 'rhombusConvertArea', 'rhombusConvertValue');
  });

// Pentagon Section
document
  .getElementById("calculate-pentagon")
  .addEventListener("click", function () {
    // Formula for Pentagon is (0.5 x p x b)
    const result = calculateResult(0.5, 'pentagon-input-1', 'pentagon-input-2');
    checkValidResult(result, 'pentagonArea', 'pentagonAreaValue'); 
    resetConvertBtn('pentagonConvertArea', 'pentagonConvertBtn');
    convertToMetre(result, 'pentagonConvertBtn', 'pentagonConvertArea', 'pentagonConvertValue'); 
  });

// Ellipse Section
document
  .getElementById("calculate-ellipse")
  .addEventListener("click", function () {
    // Formula for Ellipse is (3.1416 x a x b)
    const value = calculateResult(3.1416, 'ellipse-input-1', 'ellipse-input-2');
    const result = value.toFixed(4);
    checkValidResult(result, 'ellipseArea', 'ellipseAreaValue'); 
    resetConvertBtn('ellipseConvertArea', 'ellipseConvertBtn');
    convertToMetre(result, 'ellipseConvertBtn', 'ellipseConvertArea', 'ellipseConvertValue');    
  });