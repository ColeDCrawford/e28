import { ref } from '@vue/composition-api'
import { axios } from '@/common/app.js';

export default function useFavorite(productId) {

    // Reactive references
    let isFavorite = ref(false);
    let favoriteId = ref(null);

    // Initially, we need to figure out if this product is a favorite
    // We do this by pinging the `favorite` "query" route where the `product_id` field `productId`
    // (Note that because the `favorite` resource is auth-restricted, it will automatically only
    // return favorites belonging to this user, so we don't have to include that as part of the query)
    axios.get('/favorite/query?product_id=' + productId).then((response) => {
        if (response.data.results.length > 0) {
            // There should only ever be one unique match between a given user id and a given product id
            // so we narrow the results down to [0]
            favoriteId.value = response.data.results[0].id;
            isFavorite.value = true;
        }
    });

    const addToFavorites = () => {
        axios.post('/favorite', {
            product_id: productId,
            // Note: don't have to specify user_id because it's implied with auth-restricted resources
        }).then((response) => {
            if (response.data.success) {
                isFavorite.value = true;
                favoriteId.value = response.data.favorite.id;
            }
        });
    }

    const removeFromFavorites = () => {
        axios.delete('/favorite/' + favoriteId.value).then((response) => {
            if (response.data.success) {
                isFavorite.value = false;
                favoriteId.value = null;
            }
        });
    }

    return { isFavorite, addToFavorites, removeFromFavorites }
}