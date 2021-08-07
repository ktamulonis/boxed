function randomColor() {
  let colors = ['blue', 'red', 'gray', 'yellow', 'indigo', 'purple', 'pink']
  return colors[Math.floor(Math.random()*colors.length)];
}
function randomTailwindColorNumber() {
  let numbers = ['100', '200', '300', '400', '500', '600', '700', '800', '900']
  return numbers[Math.floor(Math.random()*numbers.length)];
}
export function randomBackground() {
  return randomColor() + '-' + randomTailwindColorNumber()
}