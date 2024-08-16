<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="sass">
html, body
  margin: 0
.wrapper
  max-width: 1240px
  margin: 0 auto

*
  font-family: $font-main

a, a:link, a:visited
  text-decoration: none

a:hover
  text-decoration: none

body
  background-color: $background

.section-title
  @include font-styles(48px, 700, 121%, 0.02em, $white)
  text-transform: uppercase
.section-title_center
  text-align: center
.block-scroll
    overflow: hidden

@media (max-width: 1280px)
  body
    padding: 0 40px
@media (max-width: 768px)
  .section-title
    font-size: 32px
@media (max-width: 639px)
  body
    padding: 0 15px
@media (max-width: 425px)
  .section-title
    font-size: 24px
</style>
