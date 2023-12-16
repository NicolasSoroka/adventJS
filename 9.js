function adjustLights(lights) {
  let changesNeeded = 0;

    for (let i = 0; i < lights.length; i++) {
        if ((i % 2 !== 0 && lights[i] !== '🔴') || (i % 2 === 0 && lights[i] !== '🟢')) {
            changesNeeded++;
        }
    }

    return Math.min(changesNeeded, lights.length - changesNeeded);
}