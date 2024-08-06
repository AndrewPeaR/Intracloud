<script setup></script>

<template>
  <div class="wrapper">
    <div class="buttons">
      <ElementsButton :type="'primary'" :text="'Оставить заявку'" />
      <ElementsButton :type="'secondary'" :text="'Оставить заявку'" />
      <ElementsButton :type="'text'" :text="'Оставить заявку'" />
    </div>
    <MainCardsBlock />
  </div>
</template>

<style lang="sass">
// Сетка для кнопок
.buttons
    display: flex
    justify-content: space-evenly

body
    padding-top: 50px
    background-color: $background
    height: 100vh

</style>
