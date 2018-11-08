

const Desck = require("./deck");
const Card = require("./card");
const Hand = require("./hand");

/*
Game: {
    deck: { cards }
    players: [ { id:"", cards: [] } ]
    rules: { },
    curplayer: #,
    fc: { ind, tries,  }
}
*/
module.exports = class Game {

    constructor(opts) {
        this.deck = opts.deck || new Deck();
        this.players = opts.players || [];
        this.rules = opts.rules || {};
        this.curplayer = 0; // who's turn is it?
    }

    addPlayer(player) {
        this.players.push(player);
    }


    slappable() {
        if (!this.deck.length)
            return false;
        // standard rules

        // double
        if (this.deck.top(0).value == (this.deck.top(1) || {}).value)
            return true;
        // sandwitch
        if (this.deck.top(0).value == (this.deck.top(2) || {}).value)
            return true;

        // non standard rules and add-ins
        if (rules.non_standard_rule_1_name && false)
            return true;

        return false;
    }

    deckWon() {
        if (!this.fc)
            return this.GG();

        let fc = deck.cards[this.fc.ind];

        // failed to match fc
        if (this.fc.ind + fc.fcTries() < this.length) {
            console.log("fc not matched");
            return true;
        }

        return false;

    }

    GG() {
        if (this.players.length == 1 && !this.slappable())
            return true;
    }

    resetDeck() {
        this.fc = undefined;

    }

    turn() {
        let curCard = this.players[this.curplayer].pop();
        if (curCard.faceCard()) {
            this.fc.holder = this.players[this.curplayer];
            this.fc.ind = this.deck.cards.length;
        }
        this.deck.push(curCard);

    }
};
