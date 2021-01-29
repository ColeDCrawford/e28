const app = new Vue({
    el: '#app',
    data: {
        playerName: '',
        gameType: 'numeric',
        answer: 75,
        guess: '',
        guessCount: 0,

        // Array example
        guesses: [1, 5, 50, 99],

        guessCount: 0,

        // Object example
        settings: {
            max: 200,
            type: 'numeric',
            guessLimit: 15,
        },

        // Array of objects example
        guessesDetailed: [
            { guess: 15, result: 'low' },
            { guess: 60, result: 'high' },
            { guess: 50, result: 'low' },
        ]
    },
    methods: {
        submitGuess() {
            this.guesses.push(this.guess);
            this.guessCount++;
            console.log(this.guesses);
            console.log(this.guessCount);
        }
    }
})
