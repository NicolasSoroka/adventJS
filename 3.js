function findNaughtyStep(original, modified) {

  let mayor, menor;

  if (original === modified) return ''

  if (original.length > modified.length) {
    mayor = original
    menor = modified
  } else if (original.length < modified.length) {
    mayor = modified
    menor = original
  }

    for (let i = 0 ; i < mayor.length ; i++) {
      if (mayor[i] !== menor[i]) {
        return mayor[i];
      }
    }
}