// Initialize the root Vue instance
const app = Vue.createApp({
    // Note how the data option is set to a function that returns an obj. of data
    data() {
        return {
            item: '',
            qty: '',
            items: [],
            itemsCount: 0,
        }
    },
    methods: {
        addItem() {
            this.items.push({ name: this.item, qty: this.qty });
            this.itemsCount += this.qty;

            // Clear inputs
            this.item = '';
            this.qty = '';
        }
    }
});

// Component options
const itemDetailOptions = {
    // Note how the data option is set to a function that returns an obj. of data
    data() {
        return {
        }
    },
    props: ['item'],
    template: '#item-detail',
};

// Initialize a component within our root Vue instance
app.component('item-detail', itemDetailOptions);

// Mount the app
app.mount('#app');