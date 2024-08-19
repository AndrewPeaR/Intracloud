<script setup>
const cardsInfo = ref([]);
const isLoading = ref(true);

const fetchServices = async () => {
  try {
    await fetch("https://6878975d52b32495.mokky.dev/services")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        cardsInfo.value = data;
      })
      .catch((error) => console.error(error));
  } catch (err) {
    console.log(err);
  }
};

onMounted(async () => {
  await fetchServices();
  isLoading.value = false;
});
</script>

<template>
  <div class="wrapper wrapper_padding" v-if="isLoading === false">
    <div class="main main_desktop">
      <NuxtLink
        v-for="card in cardsInfo"
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
    <div class="main main_mobile">
        <NuxtLink
            v-for="card in cardsInfo.slice(0, 4)"
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
        <div class="main_flex">
            <NuxtLink
            v-for="card in cardsInfo.slice(4, cardsInfo.length)"
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
    </div>
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

.main_mobile
    display: none

.main:before
    content: ''
    position: absolute
    height: 100%
    width: 100%
    z-index: -1
    background: url(assets/images/main-bg.png) no-repeat
    background-size: contain
    background-position: 50% 50%
    @include animation_main

.main__card:nth-child(1)
    grid-area: A
.main__card:nth-child(4)
    grid-area: D

@media (max-width: 1024px)
    .main
        width: 100%
        gap: 16px
        padding-top: 31px
        padding-bottom: 1px
        grid-template-columns: 1fr 0.66fr 1fr
        grid-template-areas: "A A B" "C D D" "E E E"
    .main_flex
        grid-area: E
        display: flex
        gap: 16px
        justify-content: space-between
    .main_flex .main__card
        flex-basis: 29%
    .main_flex .main__card:nth-child(2)
        flex-basis: 39%
    .main_mobile
        display: grid
    .main_desktop
        display: none    
@media (max-width: 639px)
    .main
        gap: 12px
        padding: 32px 0 0 0
    .main:before
        background-position: center top
    .main_flex
        gap: 12px
@media (max-width: 410px)
    .main:before
        background-size: 85%
</style>
