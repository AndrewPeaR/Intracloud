<script setup></script>

<template>
  <div>
    <HeaderBlock />
    <MainCardsBlock />
    <AboutBlock />
    <FooterBlock />
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

.section-title
  @include font-styles(48px, 700, 121%, 0.02em, $white)
  text-transform: uppercase
</style>
