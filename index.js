// Code your solution in this file!
function distanceFromHqInBlocks(location) {
  return Math.abs(location - 42);
}

function distanceFromHqInFeet(location) {
  return Math.abs((location - 42) * 264);
}

function distanceTravelledInFeet(start, end) {
  return Math.abs(end - start) * 264;
}

function convertCentsToDollarsAndCents(cents) {
  let dollars = Math.floor(cents / 100);
  let remainingCents = cents % 100;

  let result = `${dollars}.${remainingCents.toString().padStart(2, "0")}`;

  return parseFloat(result);
}

function calculatesFarePrice(start, end) {
  const distance = distanceTravelledInFeet(start, end);
  if (distance < 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return convertCentsToDollarsAndCents((distance - 400) * 2);
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
