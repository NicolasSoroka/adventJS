function createChristmasTree(ornaments, height) {
  let tree = ''
  let lastIndex = 0;
  let row = ''

  for (let i = 0; i < height; i++) {
    tree = tree + ' '.repeat(height-i-1);

    for (let j = 0; j <= i; j++) {
      row = ' ' + ornaments.slice(lastIndex, lastIndex + 1)

      if (j === 0) {
        row = row.trim()
      }
      tree = tree + row
      lastIndex++;
      if (lastIndex >= ornaments.length) {
        lastIndex = 0;
      }
    }
    tree = tree + '\n'
  }

  return tree + ' '.repeat(height-1) + '|' + '\n'
}