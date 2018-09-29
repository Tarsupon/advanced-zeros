module.exports = function getZerosCount(number, base) {
  let j = 0;
  let temp = 2;
  let count = 0;
  let f = 0;
  let p = [];
  let q = [];
  let c = [];

  do {
    if (base % temp == 0) {
      base = base / temp;
      count++;
      f = 1;
    }
    else {
      if (f === 1) {
        p[j] = temp;
        q[j] = count;
        j++;
      }
      temp++;
      count = 0;
      f = 0;
    }
  }
  while (temp <= base);

  p[j] = temp;
  q[j] = count;


  for (temp = 0; temp < p.length; temp++) {
    let n = 1;
    c[temp] = 0;

    while (n <= number) {
      n = n * p[temp];
      c[temp] = c[temp] + Math.floor(number / n);
    }
  }

  let ans = c[0] / q[0];
  for (temp = 0; temp < q.length; temp++) {
    ans = Math.min(ans, Math.floor(c[temp] / q[temp]));
  }


  return ans;
}
