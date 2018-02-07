let deck = [];

let suits = ['diamonds', 'spades', 'clubs', 'hearts'];
let values = ['A', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];


function makeDeck() {
  
    for(let x=0; x < suits.length; x++){
    for(let y=0; y < values.length; y++){
    let card =
    { value: values[y], suit: suits[x]
     };
    
     } 
    let royalCard = parseInt(values[y]);
    
      if(values[y] === 'J' || 'Q' ||'K'){
      let royalCard  = 10;
      
      if(values[y]=== 'A')
      let royalCard = 11;

    let card =
    { value: values[y], suit: suits[x], royalCard: royalCard[y]
     };
     deck.push(card)
        }
    }
    function shuffle () 
    {
      
    }
  
  }
