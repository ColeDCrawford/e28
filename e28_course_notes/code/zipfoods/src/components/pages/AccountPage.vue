<template>
    <div id="account-page">
        <div v-if="user">
            <h2 data-test="welcome-message">Hi, {{ user.name }}!</h2>

            <div id="favorites">
                <strong>Your Favorites</strong>
                <p v-if="favorites && favorites.length == 0">No favorites yet.</p>
                <li v-for="(favorite, key) in favorites" v-bind:key="key">{{ favorite.name }}</li>
            </div>

            <button @click="logout" data-test="logout-button">Logout</button>
        </div>

        <div v-else id="loginForm">
            <h2>Login</h2>
            <small>
                (Form is prefilled for demonstration purposes; remove in final
                application)
            </small>
            <div>
                <label>
                    Email:
                    <input type="text" data-test="email-input" v-model="data.email" />
                </label>
            </div>
            <div>
                <label>
                    Password:
                    <input
                        type="password"
                        data-test="password-input"
                        v-model="data.password"
                    />
                </label>
            </div>

            <button @click="login" data-test="login-button">Login</button>

            <ul v-if="errors">
                <li class="error" v-for="(error, index) in errors" :key="index">{{ error }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
import { axios } from '@/common/app.js';

export default {
    data() {
        return {
            // Form is prefilled for demonstration purposes; remove in final application
            // jill@harvard.edu/asdfasdf is one of our seed users from e28-api/seeds/user.json
            data: {
                email: 'jill@harvard.edu',
                password: 'asdfasdf'
            },
            errors: null,
            favorites: []
        };
    },
    computed: {
        // Get our user and products state from the Vuex store
        user() {
            return this.$store.state.user;
        },
        products() {
            return this.$store.state.products;
        }
    },
    methods: {
        loadFavorites() {
            if (this.user) {
                // Because favorite is a auth-protected resource, this will
                // only return favorites belonging to the authenticated user
                axios.get('favorite').then(response => {
                    this.favorites = response.data.favorite.map(favorite => {
                        return this.$store.getters.getProductById(
                            favorite.product_id
                        );
                    });
                });
            }
        },
        login() {
            axios.post('login', this.data).then(response => {
                if (response.data.authenticated) {
                    this.$store.commit('setUser', response.data.user);
                } else {
                    this.errors = response.data.errors;
                }
            });
        },
        logout() {
            axios.post('logout').then(response => {
                if (response.data.success) {
                    this.$store.commit('setUser', null);
                }
            });
        }
    },
    watch: {
        user() {
            this.loadFavorites();
        }
    },
    mounted() {
        this.loadFavorites();
    }
};
</script>