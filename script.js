// create emoji array
const emojiArr = ["✌","😂","😝","😁","😱","👉","🙌","🍻","🔥","🌈","☀","🎈","🌹","💄","🎀","⚽","🎾","🏁","😡","👿","🐻","🐶","🐬","🐟","🍀","👀","🚗","🍎","💝","💙","👌","❤","😍","😉","😓","😳","💪","💩","🍸","🔑","💖","🌟","🎉","🌺","🎶","👠","🏈","⚾","🏆","👽","💀","🐵","🐮","🐩","🐎","💣","👃","👂","🍓","💘","💜","👊","💋","😘","😜","😵","🙏","👋","🚽","💃","💎","🚀","🌙","🎁","⛄","🌊","⛵","🏀","🎱","💰","👶","👸","🐰","🐷","🐍","🐫","🔫","👄","🚲","🍉","💛","💚"];

// create global scope variables
const para = document.createElement('p');
let emoji = '';

// create and append buttons
for(let i = 0; i < emojiArr.length; i+=1) {
  const button = document.createElement('button');
  button.innerText = emojiArr[i];
  button.addEventListener('click', () => {emoji = emojiArr[i]});
  document.body.appendChild(button);
}

// emojis to be displayed below buttons
document.body.appendChild(para);

// add listener to define size of grid
document.addEventListener('keypress', (kb) => {createEmojiGrid(emoji, kb.key)})

// create emoji grid
function createEmojiGrid(emoji, gridSize) {
  para.innerText = "";
  for(let j = 0; j < gridSize; j +=1) {
    
    for(let i = 0; i < gridSize; i +=1) {
      para.innerText += emoji;
    }
    para.innerHTML += '<br>';
  }
}

