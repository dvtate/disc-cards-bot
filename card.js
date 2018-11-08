


module.exports = class Card {

    constructor(suite, value) {
        if (!value) {

        } else {
            this.suite = suite;
            this.value = value;
        }
    }

    static suiteName(suite) {
        return ["Spades", "Diamonds", "Clubs", "Hearts"][suite];
    }

    static valueName(value) {
        return [ "two", "three", "four", "five", "six", "seven", "eight",
            "nine", "ten", "ace", "king", "queen", "jack"][value];
    }

    faceCard() {
        return this.value < 8;
    }



    toString() {
        return valueName(this.value) + " of " + suiteName(this.suite));
    }

    // is this needed?
    valueOf() {
        return 13 * this.suite + this.value;
    }

    equals(card) {
        return this.suite == card.suite && this.value == card.value;
    }

    fcTries() {
        return this.value == 9 ? 4
            : this.value == 10 ? 3
            : this.value == 11 ? 2
            : this.value == 12 ? 1 : -1;
    }
};
