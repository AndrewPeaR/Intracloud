<script setup>
const cardsInfo = [{
    id: 1,
    name: 'Центр корпоративного обслуживания',
    count: 5,
    color: 'yellow',
    tagLink: 'centr-korporativnogo-obsluzhivaniya'
}, {
    id: 2,
    name: 'Отказоустойчивость',
    count: 5,
    color: 'red',
    tagLink: 'otkazoustojchivost'
}, {
    id: 3,
    name: 'Безопасность',
    count: 6,
    color: 'green',
    tagLink: 'bezopasnost'
}, {
    id: 4,
    name: 'Инфраструктура',
    count: 14,
    color: 'mint',
    tagLink: 'infrastruktura'
}, {
    id: 5,
    name: 'Связь',
    count: 6,
    color: 'violet',
    tagLink: 'svyaz'
}, {
    id: 6,
    name: 'Оперативная помощь',
    count: 6,
    color: 'orange',
    tagLink: 'operativnaya-pomoshh'
}, {
    id: 7,
    name: 'ЭДО',
    count: 6,
    color: 'blue',
    tagLink: 'edo'
}]

const cardsInfoTest = ref([])
const isLoading = ref(true)

const fetchServices = async () => {
    try {
        await fetch('https://6878975d52b32495.mokky.dev/services')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                cardsInfoTest.value = data
            })
            .catch(error => console.error(error));
    
    } catch (err) {
        console.log(err);
    }
}

onMounted(async () => {
    await fetchServices()
    isLoading.value = false

})

</script>

<template>
    <div class="wrapper main" v-if="isLoading === false">
        <!-- :to="card.tagLink" -->
      <NuxtLink
        v-for="card in cardsInfoTest"
        :key="card.id"
        :to="`/service/${card.id}`"
        class="main__card"
      >
          <MainCardsCard 
            :name="card.name"
            :count="card.count"
            :color="card.color"
          />
        </NuxtLink>
    </div>
</template>

<style lang="sass" scoped>
// Сетка для карточек
.main
    position: relative
    z-index: 2
    overflow: hidden
    padding: 96px 0 44px
    margin-bottom: 88px
    display: grid
    gap: 30px
    grid-template-columns: repeat(3, 1fr)
    grid-template-areas: "A A B" "C D D" "E F G"

.main:before
    content: ''
    position: absolute
    height: 100%
    width: 100%
    z-index: -1
    background: url(assets/images/main-bg.png) no-repeat
    background-position: 50% 50%
    @include animation_main

.main__card:nth-child(1)
    grid-area: A
.main__card:nth-child(4)
    grid-area: D

</style>