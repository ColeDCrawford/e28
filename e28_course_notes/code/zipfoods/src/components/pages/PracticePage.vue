<template>
    <div>
        <h2>Practice - Composition API Demo</h2>
        {{ greeting }}
    </div>
</template>

<script>
import { ref, computed, onMounted } from '@vue/composition-api';

export default {
    setup() {
        // ref = reactive reference
        let playerName = ref('Sam');

        const greeting = computed(() => {
            return 'Hello ' + playerName.value;
        });

        onMounted(() => {
            console.log('The component was mounted');
        });

        return { playerName, greeting };
    },
    data() {
        return {};
    }
    // mounted() {
    //     console.log('the component was mounted');
    // }
    // computed: {
    //     greeting() {
    //         return 'Hello ' + this.playerName
    //     }
    // }
};
</script>
