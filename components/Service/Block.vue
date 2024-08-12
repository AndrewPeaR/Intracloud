<script setup>
const route = useRoute()
const service = reactive({})
const isLoading = ref(true)

const cardsColors = inject('cardsColors')
const bgImages = {
    'yellow': 'assets/images/services-yellow.png',
    'red': 'assets/images/services-red.png',
    'green': 'assets/images/services-green.png',
    'mint': 'assets/images/services-mint.png',
    'violet': 'assets/images/services-violet.png',
    'orange': 'assets/images/services-orange.png',
    'blue': 'assets/images/services-blue.png'
}

let cardColor = ''
let backgroundUrl = ''

const fetchService = async () => {
    try {
        await fetch(`https://6878975d52b32495.mokky.dev/services?id=${route.params.id}&_relations=cardLists`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                service.value = data[0]
                cardColor = cardsColors[service.value.color]
                backgroundUrl = bgImages[service.value.color]
            })
            .catch(error => console.error(error));
    
    } catch (err) {
        console.log(err);
    }
}

onMounted(async () => {
    await fetchService()
    isLoading.value = false
})
</script>

<template>
    <section v-if="!isLoading" class="service">
        <div class="wrapper">
            <ElementsBack />
            <h2 class="service__title">{{ service.value.name }}</h2>
            <div class="service__cards">
                <img class="service__background" :src='`../_nuxt/assets/images/services-${service.value.color}.png`' :alt="`${service.value.color}`"/>
                <ServiceCard v-for="card in service.value.cardList.cards" :key="card.id" :color="cardColor" :card="card"/>
            </div>
        </div>
    </section>
</template>

<style lang="sass">
.service
    overflow: hidden
    position: relative
    margin-bottom: 130px
.service__title
    margin: 40px 0 56px 0
    text-transform: uppercase
    @include font-styles(48px, 700, 121%, 0.02em, v-bind(cardColor))
.service__cards
    position: relative
    z-index: 3
    display: grid
    grid-template-columns: repeat(3, 1fr)
    grid-template-rows: repeat(2, 1fr)
    gap: 30px
.service__background
    position: absolute
    top: -75px
    left: 120px
    z-index: -1
    animation-name: backgroundAnimate
    animation-duration: 3s
    animation-timing-function: ease
    animation-iteration-count: infinite
    animation-direction: alternate-reverse
    animation-delay: 1s

@keyframes backgroundAnimate
    0%
        transform: scale(1, 1) rotate(0deg)
        // transform: scale(1, 1) 
        
    100%
        // Так как проект учебный, добавил rotate для небольшой красоты
        // Очевидно, что на продакшн самовольства не будет, и все строго по дизайну
        transform: scale(0.95, 0.95) rotate(3deg)
        // transform: scale(0.95, 0.95) 
        

</style>