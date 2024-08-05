<script setup>

</script>

<template>
  <div class="wrapper">
    <div class="buttons">
        <ElementsButton :type="'primary'" :text="'Оставить заявку'"/> 
        <ElementsButton :type="'secondary'" :text="'Оставить заявку'"/> 
        <ElementsButton :type="'text'" :text="'Оставить заявку'"/> 
    </div>
    <div class="clippath__wrapper">
        <div class="clip">
            <IconArrow alt="arrow" :fontControlled="false" filled class="clip__arrow"/>
            <IconCardClip alt="arrow" :fontControlled="false" filled class="card__clip"/>
        </div>
    </div>
  </div>
</template>

<style lang="sass">
// Карточки услуг - в разработке.
// Тут пока только тестирование различных способов отрисовки карточек
.clippath__wrapper
    max-width: 800px
    margin: 0 auto
    margin-top: 60px
.clip
    width: 400px
    height: 186px
    background-color: $white
    border-radius: 24px
    position: relative
.card__clip
    position: absolute
    z-index: 3
    bottom: -1px
    left: 0
.card__clip path
    fill: $background
.clip__arrow
    position: absolute
    z-index: 5
    bottom: 20px
    left: 20px
.clip__arrow path
    fill:$white
    stroke: $white



.wrapper
    max-width: 1240px
    margin: 0 auto
    padding-top: 50px
    background-color: $background
    height: 100vh
.buttons
    display: flex
    justify-content: space-evenly
*
    font-family: $font-main

</style>
