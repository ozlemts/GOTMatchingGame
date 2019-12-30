
let cardOrder = [0,0,1,1,2,2,3,3,4,4,5,5];
let shuffled = [];
let chosen = [0,0];
let move = 0;
let el = [];


//shuffle the cards
shuffled = shuffle(cardOrder);
document.querySelectorAll(".card_front").forEach(e => {e.src = "img/" + shuffled[e.getAttribute('data_key')] + ".png"}); 



//open the clicked card, take the number
document.querySelector(".card_backs").addEventListener('click', (e)=> {
    if(e.target.nodeName =='IMG'){
        el[move] = e.target;
        el[move].classList.toggle('removeOpacity');
        chosen[move] = e.target.getAttribute('data_key');
        move = move + 1;
        if (move > 1 ) {
            move = 0;
            if (shuffled[chosen[0]] == shuffled[chosen[1]]){
            console.log("They are same");
            } else {
                setTimeout (()=>{ el[0].classList.toggle('removeOpacity');
                                  el[1].classList.toggle('removeOpacity');}, 500);
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

