function decode(message) {
  do{
    let principio = message.lastIndexOf("(")
    let final = message.indexOf(")", principio)
    let resultado = message.substring(principio+1, final).split("").reverse().join("")
    message = message.substring(0, principio) + resultado + message.substring(final+1)
  } while (message.indexOf("(") !== -1)
  return message
}