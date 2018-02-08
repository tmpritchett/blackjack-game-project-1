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
  
// function shuffle()<script type="text/javascript">
// // 
// <html>
// <head>
// <style>
// .card
// {
// 	border: solid 1px #aaa;
// 	border-radius: 9px;
// 	width: 95px;
// 	height: 150px;
// 	float:left;
// 	background-color: white;
// 	padding: 3px 3px 3px 3px;
// }

// .card .value{
// 	font-size:15pt;
// 	font-family: sans-serif;
// }

// .card .suit
// {
// 	background-image: url('suits.png');
// 	height: 100px;
// 	width: 90px;
// }

// .card .diamonds
// {
// 	background-position-y: 100px;
// }

// .card .hearts
// {
// 	background-position-x: 90px;
// }

// .card .clubs
// {
// 	background-position-x:90px;
// 	background-position-y:100px;
// }
// </style>

// <script type="text/javascript">

let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let suits = ["diamonds", "hearts", "spades", "clubs"];
let deck = new Array[];

function getDeck()
{
	let deck = new Array[];

	for(let i = 0; i < suits.length; i++)
	{
		for(let x = 0; x < cards.length; x++)
		{
			let card = {Value: cards[x], Suit: suits[i]};
			deck.push(card);
		}
	}

	return deck;
}

function deal()
{
	// remove top card from deck
	let card = deck[deck.length-1];
	deck.splice(deck.length-1, 1);
	return card;
}

function shuffle()
{
	// for 1000 turns
	// switch the values of two random cards
	for (let i = 0; i < 1000; i++)
	{
		let location1 = Math.floor((Math.random() * deck.length));
		let location2 = Math.floor((Math.random() * deck.length));
		let tmp = deck[location1];

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

function load()
{
	deck = getDeck();
	shuffle();
	renderDeck();
}

// window.onload = load;
// </script>
// </head>

// <body>
// <h1>A Deck of Cards</h1>
// <div id="deck"></div>

// </body>
// </html>