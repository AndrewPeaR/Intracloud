<script setup>
const route = useRoute()
const service = reactive({})
const isLoading = ref(true)

const cardsColors = inject('cardsColors')
let cardColor = ''

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
        <div class="wrapper wrapper_padding">
            <ElementsBack />
            <h2 class="service__title">{{ service.value.name }}</h2>
            <div class="service__cards">
                <img class="service__background" :src='`../_nuxt/assets/images/services-${service.value.color}.png`' :alt="`${service.value.color}`"/>
                <ServiceCard class="service__card" v-for="card in service.value.cardList.cards" :key="card.id" :color="cardColor" :card="card"/>
            </div>
        </div>
        <div class="slider-cards">
            <img class="slider-cards__background" :src='`../_nuxt/assets/images/services-${service.value.color}.png`' :alt="`${service.value.color}`"/>
            <ServiceSlider :cards="service.value.cardList.cards" :color="cardColor"/>
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
    gap: 30px
    
.service__background
    position: absolute
    top: -75px
    left: 120px
    z-index: -1
    @include animation
.slider-cards
    position: relative
    padding-bottom: 84px
    z-index: 6
    display: none
.slider-cards__background
    width: 130%
    height: 110%
    position: absolute
    top: -40px
    left: -100px
    @include animation

// Небольшой костыль для того, чтобы переопределить ширину слайдов
// Нужно для того, чтобы фримод нормально работал, и не растягивал
// слайды на 100% ширины
.slider-cards .swiper-slide
    width: auto
    
@media (max-width: 1279px)
    .service__cards
        grid-template-columns: repeat(2, 1fr)
@media (max-width: 768px)
    .service
        margin-bottom: 0
    .service__cards
        display: none
    .slider-cards
        display: block
    .service__title
        margin-bottom: 32px
        font-size: 32px
        line-height: 131%
@media (max-width: 480px)
    .service__title
        font-size: 24px
    .slider-cards__background
        width: 170%
        height: 100%
        top: -50px
        left: -160px

</style>