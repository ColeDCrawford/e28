// Vue v2
const app = new Vue({
    el: '#app',
    data: {
        item: '',
        qty: '',
        items: [],
        itemsCount: 0,
        //newItem: {},
    },
    methods: {
        addItem() {

            // Don't create the newItem object via a data property because you want each new item to be unique
            // this.newItem.name = this.item;
            // this.newItem.qty = this.qty;

            // Instead, you could create a new local object so it's unique each time:
            // let newItem = {}
            // newItem.name = this.item;
            // newItem.qty = this.qty;

            // Or, use the new object shorthand as I've done here:
            this.items.push({ name: this.item, qty: this.qty });
            this.itemsCount += this.qty;

            // Clear inputs
            this.item = '';
            this.qty = '';
        }
    }
})

// Vue v3
// const app = Vue.createApp({
//     data() {
//         return {
//             item: '',
//             items: [],
//         }
//     }
// }).mount('#app');


// Example demonstrating some object syntax shortcuts:
let max = 10;

let example = {
    // Two different syntaxes, same result:
    max: max,
    max,

    // Two different syntaxes, same result:
    sayHello: function () {
        alert('Hello');
    },

    sayHello() {
        alert('Hello');
    }
};