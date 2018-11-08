
module.exports = class Hand {
    constructor(id) {
        this.id = id;
        this.cards = [];
    }

    cards() {
        return this.cards;
    }

    // remove given number of cards from hand
    // returns cards removed
    discard(num) {
        return this.cards.splice(-num);
    }

    // adds given card array to the cards list
    accept(cards) {
        this.cards = this.cards.concat(cards);
    }

    // add card to hand
    push(c) {
        this.cards.push(c);
    }

    pop() {
        return this.cards.pop();
    }
    // how many cards
    size() {
        return this.cards.length;
    }
};
