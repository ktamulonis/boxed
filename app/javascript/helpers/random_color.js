function randomColor() {
  let colors = ['bg-blue', 'bg-red', 'bg-gray', 'bg-yellow', 'bg-indigo', 'bg-purple', 'bg-pink']
  return colors[Math.floor(Math.random()*colors.length)];
}
function randomTailwindColorNumber() {
  let numbers = ['100', '200', '300', '400', '500', '600', '700', '800', '900']
  return numbers[Math.floor(Math.random()*numbers.length)];
}
export function randomBackground() {
  return randomColor()
}