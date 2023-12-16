function organizeGifts(gifts) {

  const matches = gifts.match(/\d+[a-z]/gi);

  let result = '';
  matches.forEach(el => {
      const [number, letter] = el.match(/\d+|[a-z]/gi);

      let bags = Math.trunc(number % 10) == 0 ? '' : `(${letter.repeat(Math.trunc(number % 10))})` 

      let auxLetter = `{${letter}}`
      let boxes = (Math.trunc(number / 10 ) % 5) == 0 ? '' : auxLetter.repeat(Math.trunc(number / 10 ) % 5)

      auxLetter = `[${letter}]`
      let pale = (Math.trunc(Math.trunc(number / 10 ) / 5)) == 0 ? '' : auxLetter.repeat(Math.trunc(Math.trunc(number / 10 ) / 5))

      let aux = `${pale}${boxes}${bags}`      

      result = `${result}${aux}`
  });

    return result
}