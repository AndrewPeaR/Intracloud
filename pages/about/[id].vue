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
    <div v-if="!isLoading" class="wrapper about-company">
        <ElementsBack />
        <AboutCompanyBlock class="about-company__info"/>
        <img class="about-company__background" :src='`/images/services-${color}.png`' :alt="`${color}`"/>
    </div>
</template>

<style lang="sass">
.about-company
    position: relative
    z-index: 3
    margin-bottom: 136px
.about-company__info
    margin-top: 40px
.about-company__background
    position: absolute
    z-index: -1
    top: 75px
    left: 0
    width: 100%
    @include animation
@media (max-width: 1280px)
    .about-company
        @include adaptive-padding
@media (max-width: 768px)
    .about-company
        margin-bottom: 40px
</style>