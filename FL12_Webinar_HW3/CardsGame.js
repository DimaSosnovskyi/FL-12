var isFaceCard = Symbol('isFaceCard');
class Deck {
  constructor() {
    this.cards = Deck.createDeck();
    Deck.count = this.cards.length;
  }
  get count () {
    return Deck.count;
  }
  shuffle() {
    var newDeck = [];
  for (var i = 0; i < this.cards.length; i++) {
    var card = this.cards[Math.floor(Math.random() * this.cards.length)];
    if (!(card in newDeck)) {
      newDeck.push(card);
    }
  }
  return this.cards = newDeck;
  }
  static createDeck() {
    var deck = [];
    var suits = ['diamonds','hearts','clubs','spades'];
    var ranks = [1,2,3,4,5,6,7,8,9,10,11,12,13];
    suits.forEach(function (suit) {
      ranks.forEach(function (rank) {
        var card = new Card(suit,rank);
        deck.push(card);
      })
    })
  return deck;
  }
  draw() {
    return console.log(this.cards.pop());
  }
}
Deck.count;
class Card {
  constructor (rank,suit) {
    this.suit = suit;
    this.rank = rank;
    this[isFaceCard] = this.rank === 1 || this.rank > 10 ? true : false;
  }
  get isFaceCard() {
    return this[isFaceCard];
  }
  toString() {
    let cardRank = this.rank;
    let newRank;
    if (cardRank === 1) {
      newRank === 'Ace';
    } else if(cardRank === 11) {
      newRank === 'Jack'
    } else if(cardRank === 12) {
      newRank = 'Queen';
    } else if(cardRank === 13) {
      newRank = 'King';
    } else {
      newRank = cardRank;
    }
    return (newRank + 'of' + this.suit);
  }
  static compare (cardOne,cardTwo) {
    if (cardOne.rank > cardTwo.rank) {
      console.log('CardOne is bigger than cardTwo');
      playerOne.win();
      playerTwo.deck.count--;
    } else if (cardOne.rank < cardTwo.rank) {
      console.log('CardTwo is bigger than cardOne')
      playerTwo.win();
      playerOne.deck.count--;
    } else {
      console.log('Equel');
    }
  }
}
class Player {
  constructor (name,deck) {
    this.name = name;
    this.deck = deck;
    Player.win = 0;
  }
  get wins () {
    return Player.win++;
  }
  static Play (playerOne,playerTwo) {
    while (playerOne.deck.count > 0 || playerTwo.deck.count > 0) {
      let cardOne = playerOne.deck.draw();
      let cardTwo = playerTwo.deck.draw();
      let winnerCard = Card.compare(cardOne,cardTwo);
      console.log(winnerCard);
    }
    if (playerOne.wins > playerTwo.wins) {
      console.log(`${playerOne.name} won with ${playerOne.wins} against ${playerTwo.wins} in ${playerTwo}`);
    } else {
      console.log(`${playerTwo.name} won with ${playerTwo.wins} against ${playerOne.wins} in ${playerOne}`)
    }
  }
}
Player.win;
var deck1 = new Deck();
var deck2 = new Deck();
deck1.shuffle();
deck2.shuffle();
playerOne = new Player ('Nick',deck1);
playerTwo = new Player ('Sam',deck2);


// quit() {
//   if(Employee.base.contains(this)) {
//     Employee.base.splice(Employee.base.indexof(this), 1);
//   }      
// }