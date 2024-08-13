<script setup>
const route = useRoute()
const color = ref('')
const isLoading = ref(true)

const fetchServiceColor = async () => {
    try {
        await fetch(`https://6878975d52b32495.mokky.dev/services?id=${route.params.id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                color.value = data[0].color
            })
            .catch(error => console.error(error));
    
    } catch (err) {
        console.log(err);
    }
}

onMounted(async () => {
    await fetchServiceColor()
    isLoading.value = false
})
</script>

<template>
    <div class="wrapper">
        <p>Color: {{ color }}</p>
        <img v-if="!isLoading" class="" :src='`../_nuxt/assets/images/services-${color}.png`' :alt="`${color}`"/>
    </div>
</template>

<style lang="sass">
p
    color: white
</style>