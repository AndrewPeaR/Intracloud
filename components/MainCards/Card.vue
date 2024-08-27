<script setup>
const props = defineProps([
    'name', 'count', 'color'
])

const cardsColors = inject('cardsColors')

const cardColor = cardsColors[props.color]
</script>

<template>
    <div class="main-card" ref="mainCard">
        <div class="main-card__clip">
          <h3 class="main-card__title" v-html="name"></h3>
          <div class="main-card__wrapper">
            <p class="main-card__counter"><span>{{ count }}</span> услуг</p>
          </div>
        </div>
        <IconArrowBig
          alt="arrow"
          :fontControlled="false"
          filled
          class="main-card__arrow"
        />
      </div>
</template>

<style lang="sass">
.main-card
    position: relative

.main-card__clip
    color: v-bind(cardColor)

    box-sizing: border-box
    padding: 30px 30px 0 30px
    height: 206px
    background-color: $cardOpacity
    border-radius: 24px
    position: relative
    @include fast-transition

    -webkit-mask: url(assets/icons/CardClip.svg), linear-gradient(#fff,#fff)
    -webkit-mask-composite: destination-out
    -webkit-mask-position: bottom left
    -webkit-mask-repeat: no-repeat
    // mask: url(assets/icons/CardClip.svg), linear-gradient(#fff, #fff)
    mask: url(assets/icons/clip.svg)
    mask-size: cover
    mask-composite: exclude
    mask-position: 0 101%
    mask-repeat: no-repeat
    
.main-card__clip:hover
    background-color: v-bind(cardColor)

.main-card__clip:hover .main-card__title
    color: $text
.main-card__clip:hover .main-card__counter
    color: $text
.main-card__clip:hover .main-card__counter span
    color: $text

.main-card__title br
    display: none
.main-card__title
    margin: 0
    height: 60px

    -ms-hyphens: manual
    -webkit-hyphens: manual
    hyphens: manual

    @include font-styles-withoutColor(20px, 700, 150%, 0)
    @include fast-transition
.main-card__wrapper
    display: flex
    justify-content: flex-end
.main-card__counter
    text-align: right
    margin: 0
    width: 60px
    @include font-styles-withoutColor(20px, 400, normal, 0)
    font-family: $font-accent
    @include fast-transition
.main-card__counter span
    font-family: $font-accent
    @include font-styles-withoutColor(48px, 800, normal, 0)
    @include fast-transition


.main-card__arrow
    position: absolute
    bottom: 20px
    left: 17px
    width: 25px
    height: 25px
    
.main-card__arrow path
    stroke: v-bind(cardColor)

@media (max-width: 1024px)
    .main-card
        width: 100%
    .main-card__clip
        padding: 20px
        height: 186px
@media (max-width: 639px)
    .main-card__clip
        -webkit-mask: url(assets/icons/clipMobile.svg)
        mask: url(assets/icons/clipMobile.svg)
        mask-composite: exclude
        mask-position: bottom left
        mask-repeat: no-repeat
        padding: 10px
        height: 141px
    .main-card__arrow
        width: 10px
        height: 10px
        bottom: 10px
        left: 10px
    .main-card__title
        font-size: 14px
    .main-card__counter
        font-size: 14px
    .main-card__counter span
        font-size: 36px
</style>