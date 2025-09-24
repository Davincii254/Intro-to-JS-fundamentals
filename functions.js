function getKipchogeMantra() {
  return "No human is limited!";
}

console.log(getKipchogeMantra());


function kasaraniStadiumCheer(athleteName) {
  const loudName = athleteName.toUpperCase();
  return `Wooo! Let's go ${loudName}! `;
}

console.log(kasaraniStadiumCheer("Victor"))


function bonusMoney(city, distanceInKm) {
  let moneyCount;

  if (distanceInKm >= 42) {
    moneyCount = 5000; 
  } else if (distanceInKm >= 21) {
    moneyCount = 2500; 
  } else {
    moneyCount = 1000; 
  }

  return `After conquering the ${city} ${distanceInKm}km, it's time for a big bonus! You get $ ${moneyCount} Well deserved!`;
}

const nairobiMarathon = bonusMoney("Nairobi", 42);
console.log(nairobiMarathon);


function calculateMarketBill(itemName, quantity, pricePerItem) {
  const totalCost = quantity * pricePerItem;

  return `Buying ${quantity} ${itemName}(s) at ${pricePerItem} Ksh each will cost you a total of ${totalCost} Ksh.`;
}

const avocadoBill = calculateMarketBill("Avocado", 4, 30);
console.log(avocadoBill);

const sukumaBill = calculateMarketBill("Sukuma Wiki bunch", 3, 20);
console.log(sukumaBill);