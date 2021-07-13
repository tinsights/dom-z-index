// create emoji array
const emojiArr = ["✌","😂","😝","😁","😱","👉","🙌","🍻","🔥","🌈","☀","🎈","🌹","💄","🎀","⚽","🎾","🏁","😡","👿","🐻","🐶","🐬","🐟","🍀","👀","🚗","🍎","💝","💙","👌","❤","😍","😉","😓","😳","💪","💩","🍸","🔑","💖","🌟","🎉","🌺","🎶","👠","🏈","⚾","🏆","👽","💀","🐵","🐮","🐩","🐎","💣","👃","👂","🍓","💘","💜","👊","💋","😘","😜","😵","🙏","👋","🚽","💃","💎","🚀","🌙","🎁","⛄","🌊","⛵","🏀","🎱","💰","👶","👸","🐰","🐷","🐍","🐫","🔫","👄","🚲","🍉","💛","💚"];

// create global scope variables
let emoji = '';
let gridSize = 0;

// create and append buttons
for(let i = 0; i < emojiArr.length; i+=1) {
  const button = document.createElement('button');
  button.className = 'button'
  button.innerText = emojiArr[i];
  button.addEventListener('click', () => {emoji = emojiArr[i]});
  document.body.appendChild(button);
}
// add random button and listener
const randomButton = document.createElement('button');
randomButton.innerText = '❔';
randomButton.className = 'button'
document.body.appendChild(randomButton);
randomButton.addEventListener('click', () => {createRandomEmoji()})

// add listener to define size of grid
document.addEventListener('keydown', (e) => {createEmojiGrid(emoji, e.key)})

// create emoji grid
function createEmojiGrid(emoji, keyPressed) {
  if (keyPressed === "ArrowUp") {
    gridSize += 1;
  }
  else if (keyPressed == "ArrowDown") {
    gridSize = gridSize === 0 ?  0 : gridSize - 1;
  }
  else {
    gridSize = keyPressed;
  }
  const para = document.createElement('p')
  para.style.position = "absolute";
  para.style.zIndex = gridSize;
  // emojis to be displayed below buttons
  document.body.appendChild(para);
  for(let j = 0; j < gridSize; j +=1) {
    
    for(let i = 0; i < gridSize; i +=1) {
      para.innerText += emoji;
    }
    para.innerHTML += '<br>';
  }
}

const createRandomEmoji = () => {
  emoji = emojiArr[Math.floor(Math.random() * emojiArr.length)];
  gridSize = Math.ceil(Math.random() * 10);
  createEmojiGrid(emoji, gridSize);
}
