function getIndexsForPalindrome(word) {
  if (word === word.split('').reverse().join('')) {
    return [];
  }

  const arr = word.split('');
  const len = arr.length;

  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      const temp = [...arr];
      [temp[i], temp[j]] = [temp[j], temp[i]];

      if (temp.join('') === temp.reverse().join('')) {
        return [i, j];
      }
    }
  }

  return null;
}