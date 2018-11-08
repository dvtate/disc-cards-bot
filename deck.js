
const Card = require("./card");

module.exports = class Deck {
    constructor() {
            this.cards = [];
    }

    burn(cards) {
        this.cards = cards.concat(this.cards);
    }

    push(cards) {
        this.cards = this.cards.concat(cards);
    }

    shuffle() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            // pick random card
            const j = Math.floor(Math.random() * (i + 1));
            // swap it with current one
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }

    // add a deck of cards
    add52() {
        for (let s = 0; s < 4; s++)
            for (let v = 0; v < 13; v++)
                this.cards.push(new Card(s, v));
    }

    deal(players) {
        const cardsPerPlayer = this.cards.length / players.length;
        for (let i = 0; i < players.length; i++)
            [ this.cards, players[i] ]
                = [ this.cards.splice(cardsPerPlayer), this.cards ];

        if (this.cards.length % players.length != this.cards.length)
            console.log("remaining cards after dealing appears invalid");
    }

    at(ind) { return this.cards[ind]; }

    top(ind){
        return this.cards[this.cards.length - ind - 1] || null;
    }
};
