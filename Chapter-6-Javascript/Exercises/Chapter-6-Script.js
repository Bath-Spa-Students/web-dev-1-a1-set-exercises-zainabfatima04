document.addEventListener("DOMContentLoaded", function() {
  const petrolCostInput = document.getElementById("petrol-cost");
  const litersInput = document.getElementById("liters");
  const calculateBtn = document.getElementById("calculate-btn");
  const totalCostOutput = document.getElementById("total-cost");

  calculateBtn.addEventListener("click", function() {
    const petrolCost = parseFloat(petrolCostInput.value);
    const liters = parseFloat(litersInput.value);
    const totalCost = petrolCost * liters;
    totalCostOutput.textContent = `Total cost: $${totalCost.toFixed(2)}`;
  });
});