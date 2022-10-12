function nbYear(p0, percent, aug, p) {
  let currentPop = p0;
  let n = 0;
  percent = percent / 100;
  while (currentPop <= p) {
    currentPop = currentPop + currentPop * percent + aug;
    n++;
  }

  return n;
}

console.log(nbYear(1500, 5, 100, 5000));
console.log(nbYear(1500000, 2.5, 10000, 2000000));
