function findFirstRepeated(gifts) {
  let set = new Set();
  for (let gift of gifts) {
      if (set.has(gift)) {
          return gift;
      }
      set.add(gift);
  }
  return -1;
}

