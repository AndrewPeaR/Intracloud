<script setup>
const props = defineProps(["cards", "color"]);
</script>

<template>
  <div class="slider-cards__swiper">
    <Swiper
      :modules="[SwiperFreeMode]"
      :slides-per-view="'auto'"
      :slides-per-group="cards.length"
      :space-between="16"
      :rewind="true"
      :free-mode="{
        enabled: true
      }"
    >
      <SwiperSlide v-for="card in cards" :key="card.id">
        <ServiceCard
          class="slider-cards__item"
          :color="color"
          :card="card"
        />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style lang="sass">
.slider-cards__item
    height: 488px
    box-sizing: border-box
    max-width: 416px
.slider-cards__swiper .swiper-slide:first-child
    margin-left: 40px
.slider-cards__swiper .swiper-slide:last-child
    margin-right: 40px
@media (max-width: 640px)
    .slider-cards__swiper .swiper-slide:last-child
        margin-right: 15px
    .slider-cards__swiper .swiper-slide:first-child
        margin-left: 15px
@media (max-width: 480px)
    .slider-cards__item
        height: 448px
        max-width: 316px

</style>
