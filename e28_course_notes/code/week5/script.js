let app = new Vue({
    el: '#app',
    data: {
        randomNumber1: null,
        randomNumber2: null,
        answer: '',
        imageSource: '',
        imageAlt: '',
        feedback: '',
        correct: null,
        showHint: false,
        statements: [],
        difficultyLevel: '',
        phoneNumber: null,
        guesses: [],
        guess: null,
        secretNumber: 5,
    },
    methods: {
        submitAnswer() {

            if (this.answer === this.correctAnswer) {
                this.imageSource = 'happy';
                this.imageAlt = 'Happy smiley face';
                this.feedback = 'You got it right!';
                this.correct = true;

            } else {
                this.imageSource = 'sad';
                this.imageAlt = 'Frowny face';
                this.feedback = 'Try again...';
                this.correct = false;
            }
        },
        getRandomNumber() {
            return Math.floor((Math.random() * 10) + 1);
        },
    },
    mounted() {
        this.randomNumber1 = this.getRandomNumber();
        this.randomNumber2 = this.getRandomNumber();
    },
    computed: {
        correctAnswer() {
            return this.randomNumber1 + this.randomNumber2;
        },
        // Example of using a computed property to alter a single data property
        displayPhoneNumber() {
            // Filter only numbers from the input
            let cleaned = ('' + this.phoneNumber).replace(/\D/g, '');

            // Check if the input is of correct length
            let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);

            if (match) {
                return '(' + match[1] + ') ' + match[2] + '-' + match[3]
            };

            return null
        },
        // Example using a computed property to filter a list
        highGuesses() {
            function tooHigh(number) {
                return number > this;
            }

            return this.guesses.filter(tooHigh, this.secretNumber);
        }
    },
    watch: {
        answer() {
            console.log('Answer changed to: ' + this.answer);
        }
    }
})
