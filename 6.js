function maxDistance(movements) {
  let rightMovement = 0
  let leftMovement = 0
  let wildcard = 0
  let result = 0

  for (let i = 0; i < movements.length; i++) {
    switch (movements[i]) {
      case '>' : 
        rightMovement++;
        break;

        case '<' :
          leftMovement++
          break;

        case '*' :
          wildcard++
    }
  }

  result = Math.abs(leftMovement - rightMovement) + wildcard

  return result
}