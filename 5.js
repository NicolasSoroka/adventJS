function cyberReindeer(road, time) {
  let santaPos = 0;
  let finalRoad = [];
  finalRoad = [...finalRoad, road]

    for (let i = 1 ; i < time; i++) {
      let actualTrip = road.replaceAll('S', '.');
      
      if (i >= 5) {
        actualTrip = actualTrip.replaceAll('|', '*')
      }

      if (actualTrip[santaPos+1] !== '|') {
        santaPos++;
        actualTrip = actualTrip.substring(0, santaPos) + 'S' + actualTrip.substring(santaPos + 1);
      } else {
        actualTrip = actualTrip.substring(0, santaPos) + 'S' + actualTrip.substring(santaPos + 1);
      }

      finalRoad = [...finalRoad, actualTrip]
    }

    return finalRoad;
}