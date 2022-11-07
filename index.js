let fighters = [
  "🐉",
  "🐥",
  "🐊",
  "💩",
  "🦍",
  "🐢",
  "🐩",
  "🦭",
  "🦀",
  "🐝",
  "🤖",
  "🐘",
  "🐸",
  "🕷",
  "🐆",
  "🦕",
  "🦁",
];
console.log(fighters);
let stageEl = document.getElementById("stage");
let fightButton = document.getElementById("fightButton");

fightButton.addEventListener("click", function () {
  let randomFighterOne = Math.floor(Math.random() * fighters.length);
  let randomFighterTwo = Math.floor(Math.random() * fighters.length);

  stageEl.textContent =
    fighters[randomFighterOne] + " vs " + fighters[randomFighterTwo];
});
