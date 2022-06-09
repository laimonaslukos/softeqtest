let array = [];
for (let i = 1; i < 100; i++) {
  array.push(i);
  if (i % 3 === 0) {
    array[i] = "open";
  }
  if (i % 7 === 0) {
    array[i] = "source";
  }
  if (i % 3 === 0 && i % 7 === 0) {
    array[i] = "opensource";
  }
}

console.log(array);
