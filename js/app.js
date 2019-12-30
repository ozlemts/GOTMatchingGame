
let cardOrder = [0,0,1,1,2,2,3,3,4,4,5,5];
let shuffled = [];
let chosenKeys = [0,0];
let move = 0;
let choosenCards = [];
let score = 0;
let allCards = document.querySelector(".card_backs");

//shuffle the cards
shuffled = shuffle(cardOrder);
document.querySelectorAll(".card_front").forEach(e => { e.src = "img/" + shuffled[e.getAttribute('data_key')] + ".png" }); 

//open the clicked card, take the number
document.querySelector(".card_backs").addEventListener('click', (e)=> {
    if(e.target.nodeName =='IMG'){
        choosenCards[move] = e.target;
        choosenCards[move].classList.toggle('removeCover');
        chosenKeys[move] = e.target.getAttribute('data_key');
        move = move + 1;
        if (move > 1 ) {
            move = 0;
            if (shuffled[chosenKeys[0]] == shuffled[chosenKeys[1]]) {
            console.log("They are same");
            score = score + 1;
            if (score == 6) {
                setTimeout (()=>{ location.reload(); }, 3000);
            }
            document.querySelector(".score").innerText = 'Score: ' + score;
            
            } else {
                allCards.classList.toggle('preventClick');
                setTimeout (()=>{ choosenCards[0].classList.toggle('removeCover');
                                  choosenCards[1].classList.toggle('removeCover');
                                  allCards.classList.toggle('preventClick');}, 300);
            } 
        }
    }

})



function shuffle(array) {
    var copy = [], n = array.length, i;
  
    // While there remain elements to shuffle…
    while (n) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * array.length);
  
      // If not already shuffled, move it to the new array.
      if (i in array) {
        copy.push(array[i]);
        delete array[i];
        n--;
      }
    }
    return copy;
  }

