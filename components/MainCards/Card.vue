<script setup>
const props = defineProps([
    'name', 'count', 'color'
])

const cardsColors = inject('cardsColors')
// console.log(cardsColors);

const cardColor = cardsColors[props.color]
// const example = ref("mainCard")
// if (example.value) { 
//     example.value?.style.setProperty('--cardColor', `${cardsColors[props.color]}`)
// }
// let root = document.documentElement
// root.style.setProperty('--cardColor', `${cardsColors[props.color]}`)
</script>

<template>
    <div class="main-card" ref="mainCard">
        <div class="main-card__clip">
          <h3 class="main-card__title">{{ name }}</h3>
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
    --cardColor: #fff
    position: relative

.main-card__clip
    color: v-bind(cardColor)

    box-sizing: border-box
    padding: 30px 30px 0 30px
    height: 206px
    background-color: $card
    opacity: 0.8
    border-radius: 24px
    position: relative
    @include fast-transition

    -webkit-mask: url(assets/icons/CardClip.svg), linear-gradient(#fff,#fff)
    -webkit-mask-composite: destination-out
    -webkit-mask-position: bottom left
    -webkit-mask-repeat: no-repeat
    mask: url(assets/icons/CardClip.svg), linear-gradient(#fff,#fff)
    mask-composite: exclude
    mask-position: bottom left
    mask-repeat: no-repeat
    
.main-card__clip:hover
    background-color: v-bind(cardColor)

.main-card__clip:hover .main-card__title
    color: $text
.main-card__clip:hover .main-card__counter
    color: $text
.main-card__clip:hover .main-card__counter span
    color: $text

.main-card__title
    margin: 0
    height: 60px
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
</style>