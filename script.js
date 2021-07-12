// create emoji array
const emojiArr = ["✌","😂","😝","😁","😱","👉","🙌","🍻","🔥","🌈","☀","🎈","🌹","💄","🎀","⚽","🎾","🏁","😡","👿","🐻","🐶","🐬","🐟","🍀","👀","🚗","🍎","💝","💙","👌","❤","😍","😉","😓","😳","💪","💩","🍸","🔑","💖","🌟","🎉","🌺","🎶","👠","🏈","⚾","🏆","👽","💀","🐵","🐮","🐩","🐎","💣","👃","👂","🍓","💘","💜","👊","💋","😘","😜","😵","🙏","👋","🚽","💃","💎","🚀","🌙","🎁","⛄","🌊","⛵","🏀","🎱","💰","👶","👸","🐰","🐷","🐍","🐫","🔫","👄","🚲","🍉","💛","💚"];

const para = document.createElement('p');

for(let i = 0; i < emojiArr.length; i+=1) {
  const button = document.createElement('button');
  button.innerText = emojiArr[i];
  button.addEventListener('click', () => {buttonPress(emojiArr[i], para)});
  document.body.appendChild(button);
}

document.body.appendChild(para);

// function
function buttonPress(emoji, para) {
  para.innerText = "";
  for(let j = 0; j < 3; j +=1) {
    
    for(let i = 0; i < 3; i +=1) {
      para.innerText += emoji;
    }
    para.innerHTML += '<br>';
  }
}

// create buttons
// const buttonOne = document.createElement('button');
// buttonOne.innerText = '😎';
// const buttonTwo = document.createElement('button');
// buttonTwo.innerText = '🚀';
// const buttonThree = document.createElement('button');
// buttonThree.innerText = '🐵';

// Create one par element to be reused

// append para to body for future linebreak addition


// append buttons to doc
// document.body.appendChild(buttonOne)
// document.body.appendChild(buttonTwo)
// document.body.appendChild(buttonThree)

// listener to buttons
// buttonOne.addEventListener('click',  () => {buttonPress('😎', para)});
// buttonTwo.addEventListener('click',  () => {buttonPress('🚀', para)});
// buttonThree.addEventListener('click',  () => {buttonPress('🐵', para)});

