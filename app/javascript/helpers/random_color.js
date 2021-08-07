function randomColor() {
  let colors = ['bg-blue-400', 'bg-red-400', 'bg-gray-400', 'bg-yellow-400', 'bg-indigo-400', 'bg-purple-400', 'bg-pink-400']
  return colors[Math.floor(Math.random()*colors.length)];
}
function randomTailwindColorNumber() {
  let numbers = ['100', '200', '300', '400', '500', '600', '700', '800', '900']
  return numbers[Math.floor(Math.random()*numbers.length)];
}
export function randomBackground() {
  return randomColor()
}