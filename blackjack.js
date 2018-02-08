// let deck = [];

// let suits = ['diamonds', 'spades', 'clubs', 'hearts'];
// let values = ['A', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];


// function makeDeck() {
  
//     for(let x=0; x < suits.length; x++){
//     for(let y=0; y < values.length; y++){
//     let card =
//     { value: values[y], suit: suits[x]
//      };
    
//      } 
//     let royalCard = parseInt(values[y]);
    
//       if(values[y] === 'J' || 'Q' ||'K'){
//       let royalCard  = 10;
      
//       if(values[y]=== 'A')
//       let royalCard = 11;

//     let card =
//     { value: values[y], suit: suits[x], royalCard: royalCard[y]
//      };
//      deck.push(card)
//         }
//     }
//   }
  
var deck = new Array();
var suits = ["spades", "diamonds", "clubs", "hearts"];
var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

function getDeck()
{
	var deck = new Array();

	for(var i = 0; i < suits.length; i++)
	{
		for(var x = 0; x < values.length; x++)
		{
			var card = {Value: values[x], Suit: suits[i]};
			deck.push(card);
		}
	}

	return deck;
}

function shuffle()
{
	// for 1000 turns
	// switch the values of two random cards
	for (var i = 0; i < 1000; i++)
	{
		var location1 = Math.floor((Math.random() * deck.length));
		var location2 = Math.floor((Math.random() * deck.length));
		var tmp = deck[location1];

		deck[location1] = deck[location2];
		deck[location2] = tmp;
	}
}
function renderDeck()
{
	for(var i = 0; i < deck.length; i++)
	{
		var card = document.createElement("div");
		var value = document.createElement("div");
		var suit = document.createElement("div");
		card.className = "card";
		value.className = "value";
		suit.className = "suit " + deck[i].Suit;

		value.innerHTML = deck[i].Value;
		card.appendChild(value);
		card.appendChild(suit);

		document.getElementById("deck").appendChild(card);
	}
}
