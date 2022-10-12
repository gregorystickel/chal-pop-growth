function nbYear(p0, percent, aug, p) {
  let currentPop = p0; //store starting pop in current pop
  let n = 0; //set number of years to 0
  percent = percent / 100; //convert number to a percentage
  // run while current pop is less or equal to ending pop
  while (currentPop <= p) {
    currentPop = currentPop + currentPop * percent + aug;
    n++; // increment year
  }

  return n;
}

console.log(nbYear(1500, 5, 100, 5000));
console.log(nbYear(1500000, 2.5, 10000, 2000000));
