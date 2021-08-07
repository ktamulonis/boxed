let player;

export const currentPlayer = () => {
  if (player) return player;

  const dom_id = getMeta("dom-id");

  player = { dom_id };
  return player;
};

function getMeta(name) {
  const element = document.head.querySelector(
    `meta[name='current-player-${name}']`
  );
  if (element) {
    return element.getAttribute("content");
  }
}