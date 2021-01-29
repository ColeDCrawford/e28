// Initialize a component that will be globally available
Vue.component('round-detail', {
    data() {
        return {
        }
    },
    props: {
        'number': {
            type: Number,
            default: 0
        },
        'winner': {
            type: String,
            default: ''
        }
    },
    template: '#round-detail',
});


// Initialize the root Vue instance
let app = new Vue({
    el: '#app',
    data: {
        flipped: false,
        choice: 'heads',
        sides: ['heads', 'tails'],
        rounds: [],
        round: 1
    },
    methods: {
        flip() {
            this.flipped = true;
            this.coin = this.sides[Math.floor(Math.random() * 2)];

            let winner = '';
            if (this.choice == this.coin) {
                winner = 'Player';
            } else {
                winner = 'Computer';
            }

            this.rounds.push({
                number: this.round++,
                winner: winner,
                coin: this.coin,
                choice: this.choice,
            })
        },
        deleteRound(roundNumber) {
            console.log('Invoked deleteRound from root Vue instance');
            function isMatchingRound(round) {
                return round.number != this;
            }
            this.rounds = this.rounds.filter(isMatchingRound, roundNumber);
        }
    }
});
