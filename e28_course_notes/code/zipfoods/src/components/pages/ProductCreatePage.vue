<template>
    <div>
        <h2>Add a Product</h2>

        <small class="form-help">* Required field</small>

        <div id="inputs">
            <label for="name">* Name</label>
            <input
                type="text"
                data-test="product-name-input"
                v-model="product.name"
                id="name"
                v-on:blur="validate()"
            />
            <small class="form-help">Min: 3, Max: 100</small>
            <error-field v-if="errors && 'name' in errors" :errors="errors.name"></error-field>

            <label for="sku">* SKU:</label>
            <input
                type="text"
                data-test="product-sku-input"
                v-model="product.sku"
                id="sku"
                v-on:blur="validate()"
            />
            <small class="form-help">Min: 3, Max: 100. Letters and dashes only.</small>
            <error-field v-if="errors && 'sku' in errors" :errors="errors.sku"></error-field>

            <label for="price">* Price:</label>
            <input
                type="text"
                data-test="product-price-input"
                v-model="product.price"
                id="price"
                v-on:blur="validate()"
            />
            <small class="form-help">Enter a decimal value number</small>
            <error-field v-if="errors && 'price' in errors" :errors="errors.price"></error-field>

            <label for="available">* Quantity available:</label>
            <input
                type="text"
                data-test="product-available-input"
                v-model="product.available"
                id="available"
                v-on:blur="validate()"
            />
            <small class="form-help">Enter a whole number</small>
            <error-field v-if="errors && 'available' in errors" :errors="errors.available"></error-field>

            <label for="weight">* Weight (in lbs):</label>
            <input
                type="text"
                data-test="product-weight-input"
                v-model="product.weight"
                id="weight"
                v-on:blur="validate()"
            />
            <error-field v-if="errors && 'weight' in errors" :errors="errors.weight"></error-field>

            <label for="perishable" class="form-checkbox-label">
                <input
                    data-test="product-perishable-checkbox"
                    type="checkbox"
                    v-model="product.perishable"
                    id="perishable"
                />
                Perishable?
            </label>

            <label for="description">* Description</label>
            <textarea
                data-test="product-description-textarea"
                v-model="product.description"
                id="description"
                v-on:blur="validate()"
            ></textarea>
            <small class="form-help">Min:100</small>
            <error-field v-if="errors && 'description' in errors" :errors="errors.description"></error-field>
        </div>

        <button @click="addProduct" data-test="add-product-button">Add Product</button>

        <transition name="fade">
            <div
                data-test="product-added-confirmation"
                class="alert"
                v-if="showConfirmationMessage"
            >
                Your product
                <em>{{ addedName }}</em> was added!
            </div>
        </transition>

        <div class="form-feedback-error" v-if="errors">Please correct the above errors</div>
    </div>
</template>

<script>
import { axios } from '@/common/app.js';
import ErrorField from '@/components/ErrorField.vue';
import Validator from 'validatorjs';

export default {
    components: {
        'error-field': ErrorField
    },
    data() {
        return {
            errors: null,
            showConfirmationMessage: false,
            product: {
                name: 'Candy Heart Grapes',
                sku: 'candy-heart-grapes-' + new Date().valueOf(),
                price: 5.99,
                available: 25,
                weight: 2,
                perishable: true,
                description:
                    'Next time the kids are craving candy, hand them a bowl of seedless Candy Heart grapes. Plump, red, and bursting with juice, they taste a little like raspberry lemonade and are just as refreshing. So go ahead and eat your heart out!'
            }
        };
    },
    methods: {
        validate() {
            let validator = new Validator(this.product, {
                name: 'required|between:3,100',
                sku: 'required|between:3,100|alpha_dash',
                price: 'required|numeric',
                available: 'required|numeric',
                weight: 'required|numeric',
                description: 'required|min:100'
            });

            if (validator.fails()) {
                this.errors = validator.errors.all();
            } else {
                this.errors = null;
            }

            return validator.passes();
        },
        addProduct() {
            if (this.validate()) {
                axios.post('/product', this.product).then(response => {
                    if (response.data.errors) {
                        this.errors = response.data.errors;
                    } else {
                        this.$store.dispatch('fetchProducts');

                        this.showConfirmationMessage = true;
                        this.addedName = this.product.name;

                        setTimeout(
                            () => (this.showConfirmationMessage = false),
                            3000
                        );

                        this.product = {
                            name: '',
                            slug: '',
                            price: '',
                            available: '',
                            weight: '',
                            perishable: false,
                            description: ''
                        };
                    }
                });
            }
        }
    }
};
</script>

<style lang='scss' scoped>
#inputs {
    text-align: left;
}
</style>