let app = new Vue({
    el: "#app",
    data: {
      playing: false,
      playerState: {
        name: "Player",
        stack: 10,
        betDefault: 1,
        handNumber: 0,
        handsWon: 0,
        handsLost: 0,
        handsPushed: 0
      },
      handState: {
        dealerCards: [],
        playerCards: [],
        // dealerShowTotal: 0,
        bet: 0,
        playerTurn: true,
        playerActions: []
      },
      deck: [],
      discard:[],
    },
    computed: {
        playerScore(){
            return score(this.handState.playerCards);
        },
        dealerScore(){
            function show(card){
                return card.show
            }
            showCards = this.handState.dealerCards.filter(show)
            return score(showCards);
        },
        dealerHiddenScore(){
            return score(this.handState.dealerCards);
        },
        dealerShowCards(){
            function show(card){
                return card.show
            }
            return this.handState.dealerCards.filter(show)
        },
        dealerDownCards(){
            function show(card){
                return !card.show
            }
            return this.handState.dealerCards.filter(show)
        },
        validOptions(){
            if(!this.handState.playerTurn){
                return [];
            } else {
                options = ['HIT', 'STAND'];
                if(this.handState.playerCards.length == 2){
                    options.push("DOUBLE");
                }
                function checkEq(cardone, cardtwo){
                    return cardone.face == cardtwo.face
                }
                if(this.handState.playerCards.length == 2 && (checkEq(this.handState.playerCards[0], this.handState.playerCards[1]))){
                    options.push('SPLIT');
                }
                return options;
            }
        }
    },
    methods: {
      hit: function(){
          console.log("hit");
          let card = dealCard(this.deck)
          this.handState.playerCards.push(card);
          if(this.playerScore > 21){
              console.log("Bust");
              this.handState.playerTurn = false;
              this.playerState.handsLost++;
          }
          if(this.handState.playerCards.length == 2 && this.playerScore == 21){
              console.log("Natural blackjack!");
              this.endHand();
          }
      },
      stand: function(){
          console.log("stand");
          this.handState.playerTurn = false;
          this.endHand();
      },
      endHand: function(){
        // Dealer turn
        this.handState.dealerCards.forEach(function(c){
            c.show = true;
          })
        //   this.handState.dealerShowTotal = score(this.handState.dealerCards);

        //   while(this.handState.dealerShowTotal <= 17){
        while(this.dealerScore <= 17){
              let card = dealCard(this.deck);
              this.handState.dealerCards.push(card);
            //   this.handState.dealerShowTotal = score(this.handState.dealerCards);
          }

          // End of round
          if(this.dealerScore > 21){
            console.log("Dealer busts");
            this.playerState.stack += this.handState.bet * 2
            this.playerState.handsWon++
          }
          else if(this.dealerScore > this.playerScore){
            console.log("Dealer wins");
            this.playerState.handsLost++
          }
          else if(this.playerScore > 21){
              console.log("Player busts");
              this.playerState.handsLost++
          }
          else if (this.dealerScore < this.playerScore){
              console.log("Player wins");
              this.playerState.handsWon++
              if(this.handState.playerCards.length == 2 && this.playerScore == 21){
                console.log("with a natural");
                this.playerState.stack += this.handState.bet * 3;
              } else {
                this.playerState.stack += this.handState.bet * 2
              }

          }
          else if (this.dealerScore == this.playerScore){
              console.log("Push")
              this.playerState.stack += this.handState.bet
              this.playerState.handsPushed++
          }
      },
      double: function(){
          this.playerState.stack -= this.playerState.betDefault;
          this.handState.bet += this.playerState.betDefault;
          let card = dealCard(this.deck)
          this.handState.playerCards.push(card);
          this.handState.playerTurn = false;
          this.endHand();
      },
      split: function(){
          console.log("split");
      },
      start: function(){
        console.log('starting');
        this.deck = shuffle(createDeck());
        this.playing = true;
        this.deal();
      },
      deal: function(){
          console.log("Dealing next round");
          if(this.playerState.stack < this.playerState.betDefault){
              this.playing = false;
              console.log("Sorry, your stack is too low to bet. At least it wasn't real money!");
          } else {
            this.playerState.handNumber++;
            this.handState.bet = this.playerState.betDefault;
            this.playerState.stack -= this.playerState.betDefault;

            // move cards to discard
            while(this.handState.playerCards.length > 0){
                this.discard.push(this.handState.playerCards.pop());
            }
            while(this.handState.dealerCards.length > 0){
              this.discard.push(this.handState.dealerCards.pop());
            }

            // check deck size
            if (this.deck.length < 10){
                console.log("low on cards, bringing back in discard and shuffling");
                while(this.discard.length > 0){
                    this.deck.push(this.discard.pop());
                }
                shuffle(this.deck);
            }

            let dealerUp = dealCard(this.deck);
            let dealerDown = dealCard(this.deck);
            let playerCardOne = dealCard(this.deck);
            let playerCardTwo = dealCard(this.deck);

            //   this.handState.dealerShowTotal += dealerUp.value;
            //   this.handState.playerScore += playerCard.value;

            this.handState.dealerCards.push(dealerUp);
            dealerDown['show'] = false;
            this.handState.dealerCards.push(dealerDown);
            this.handState.playerCards.push(playerCardOne);
            this.handState.playerCards.push(playerCardTwo);

            if(this.dealerHiddenScore == 21){
                console.log("dealer blackjack :(");
                this.handState.playerTurn = false;
                this.endHand();
            } else if (this.playerScore == 21){
                console.log("Blackjack!")
                this.handState.playerTurn = false;
                this.endHand();
            } else {
                this.handState.playerTurn = true;
            }
            
          }
          
      },
    }
  })

function dealCard(deck){
    return this.deck.pop();
}
  
  const suits = ['H', 'S', 'C', 'D']
  const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
  const values = {
      'J': 10,
      'Q': 10,
      'K': 10,
      'A': 11
    }
  function getValue(face){
    if(face in values){
      return values[face];
    } else {
      return parseInt(face);
    }
  }
  
  function createDeck(){
      deck = [];
    suits.forEach(function(s){
      faces.forEach(function(f){
        deck.push({
          'suit': s,
          'face': f,
          'value': getValue(f),
          'str': `${s}-${f}`,
          'show': true
        });
      });
    })
    return deck
  }
  
  /*
   * Shuffles array in place. ES6 version
   * @param {Array} a items An array containing the items.
   * From https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
   */
  function shuffle(a) {
      var j, x, i;
      for (i = a.length - 1; i > 0; i--) {
          j = Math.floor(Math.random() * (i + 1));
          x = a[i];
          a[i] = a[j];
          a[j] = x;
      }
      return a;
  }

  function score(cards){
      let score = 0;
      console.log(cards)
      cards.forEach(function(card){
          score += card.value;
      })
      return score;
  }
  
  
  /* class Deck {
    suits = ['H', 'S', 'C', 'D']
    faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
    values = {
      'J': 11,
      'Q': 12,
      'K': 13,
      'A': 14
    }
    function getValue(face){
      if(face in values){
        return values[face];
      } else {
        return parseInt(face);
      }
    }
    deck = [];
    suits.forEach(function(s){
      faces.forEach(function(f){
        deck.push({
          'suit': s,
          'face': f,
          'value': getValue(f),
          'str': `${s}-${f}`
        });
      });
    })
    
  *
   * Shuffles array in place. ES6 version
   * @param {Array} a items An array containing the items.
   * From https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
  function shuffle(a) {
      var j, x, i;
      for (i = a.length - 1; i > 0; i--) {
          j = Math.floor(Math.random() * (i + 1));
          x = a[i];
          a[i] = a[j];
          a[j] = x;
      }
      return a;
  }
  
  function shuffleDeck(){
    return shuffle(deck);
  }
  
  function deal(deck, numPlayers){
    stacks = []
    for(var i = 0; i < numPlayers; i++){
      stacks.push([])
    }
    extra = []
    while(deck.length > numPlayers){
      for(var i = 0; i < numPlayers; i ++){
        stacks[i].push(deck.pop());
      }
    }
    deck.forEach(function(c){
      extra.push(c);
    })
    return({
      'stacks': stacks,
      'extra': extra
     });
  }
  
  }
  
  class Game{
    computerScore = 0
    playerScore = 0
    roundCount = 0
    
  }
  
  class Round{
  
  }
  
  class Hand {
    cards = []
    pass = []
    
  }
  
  class Trick {
    cards = []
  } */